import { MdEdit, MdDelete } from "react-icons/md";
import { useContext } from "react";
import { EditContext } from "../context/EditContext";

type Transaction = {
  type: string;
  amount: string;
  category: string;
  description: string;
};

type TransactionHistoryProps = {
  transactions: Transaction[];
  onDeleteTransaction: (index: number) => void;
  showEditButton?: boolean;
  deleteLabel?: string;
};

const TransactionHistory = ({
  transactions,
  onDeleteTransaction,
  showEditButton = false,
  deleteLabel,
}: TransactionHistoryProps) => {
  const editTransaction = useContext(EditContext);

  const handleEditButtonClick = (transaction: Transaction, index: number) => {
    const storedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    const updatedTransactions: Transaction[] = storedTransactions.filter(
      (_: Transaction, i: number) => i !== index
    );
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

    if (typeof transactions !== "undefined") {
      transactions.splice(index, 1);
    }

    editTransaction.setItem(transaction);
  };

  return (
    <div className="bg-[var(--bg-secondary)] shadow-lg rounded-xl p-4 sm:p-6 mb-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--accent-primary-text)] mb-4 text-center">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="text-center items-center justify-center w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-xs sm:text-sm text-[var(--accent-secondary-text)] bg-[var(--accent-secondary-bg)] uppercase">
              <th className="px-2 sm:px-4 py-2 bg-amber-50">Type</th>
              <th className="px-2 sm:px-4 py-2">Amount</th>
              <th className="px-2 sm:px-4 py-2 bg-amber-50">Category</th>
              <th className="px-2 sm:px-4 py-2">Description</th>
              <th className="px-2 sm:px-4 py-2 bg-amber-50">{deleteLabel}</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="text-[(--text-primary)]">
                <td>
                  <button
                    className={`${
                      transaction.type === "Expense"
                        ? "bg-red-500"
                        : "bg-green-500"
                    } w-[70%] m-2 rounded-lg text-white px-2 py-1 cursor-pointer font-semibold text-xs sm:text-sm`}
                  >
                    {transaction.type}
                  </button>
                </td>
                <td
                  className={`px-2 sm:px-4 py-3 font-semibold tracking-wide ${
                    transaction.type === "Expense"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >{`₹${transaction.amount}`}</td>
                <td className="px-2 sm:px-4 py-3 capitalize">
                  {transaction.category}
                </td>
                <td className="px-2 sm:px-4 py-3">{transaction.description}</td>
                <td className="px-2 sm:px-4 py-3 flex justify-center items-center gap-2 sm:gap-4 text-lg sm:text-xl">
                  {showEditButton && (
                    <button
                      onClick={() => handleEditButtonClick(transaction, index)}
                      className="text-green-950 cursor-pointer hover:text-green-500 transition duration-500"
                    >
                      <MdEdit />
                    </button>
                  )}

                  <button
                    onClick={() => onDeleteTransaction(index)}
                    className="text-red-800 cursor-pointer hover:text-red-500 transition duration-500"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {transactions.length === 0 && (
          <p className="text-center text-[var(--accent-primary-text)] m-4">
            No transactions available.
          </p>
        )}
        {transactions.length > 0 && (
          <div className="w-fit text-center text-lg sm:text-xl text-[var(--accent-primary-text)] font-semibold text-shadow-2xs border-none outline-none mt-3">{`Total Transaction : ${transactions.length}`}</div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
