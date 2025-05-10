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
};

const TransactionHistory = ({
  transactions,
  onDeleteTransaction,
}: TransactionHistoryProps) => {
  const editTransaction = useContext(EditContext);
  console.log(editTransaction);

  const handleEditButtonClick = (transaction: Transaction) => {
    editTransaction.setItem(transaction);
  };
  return (
    <div className="bg-[var(--bg-secondary)] shadow-lg rounded-xl p-6 mb-6">
      <h2 className="text-3xl font-semibold text-[var(--accent-primary-text)] mb-4 text-center">
        Transaction History
      </h2>
      <table className="text-center items-center justify-center w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-sm text-[var(--accent-secondary-text)] bg-[var(--accent-secondary-bg)] uppercase ">
            <th className="px-4 py-2 bg-amber-50">Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2 bg-amber-50">Category</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2 bg-amber-50">Edit/Delete</th>
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
                  } w-[70%] m-2 rounded-lg text-white px-2 py-1 cursor-pointer font-semibold text-sm`}
                >
                  {transaction.type}
                </button>
              </td>
              <td
                className={`px-4 py-3 font-semibold tracking-wide ${
                  transaction.type === "Expense"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >{`₹${transaction.amount}`}</td>
              <td className="px-4 py-3 capitalize">{transaction.category}</td>
              <td className="px-4 py-3">{transaction.description}</td>
              <td className="px-4 py-3 flex justify-center items-center gap-4 text-xl">
                <button
                  onClick={() => handleEditButtonClick(transaction)}
                  className="text-green-950 hover:text-green-500 transition duration-500"
                >
                  <MdEdit />
                </button>

                <button
                  onClick={() => onDeleteTransaction(index)}
                  className="text-red-800 hover:text-red-500 transition duration-500"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
