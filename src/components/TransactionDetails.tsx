import { useEffect, useState } from "react";

type Transaction = {
  type: string;
  amount: string;
  category: string;
  description: string;
};

const TransactionDetails = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Function to update state from localStorage
  const updateTransactionLocalStorage = () => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      const parsed = JSON.parse(storedTransactions);
      setTransactions(parsed);

      const totalIncome = parsed
        .filter((t: Transaction) => t.type === "Income")
        .reduce((sum: number, t: Transaction) => sum + Number(t.amount), 0);

      const totalExpense = parsed
        .filter((t: Transaction) => t.type === "Expense")
        .reduce((sum: number, t: Transaction) => sum + Number(t.amount), 0);

      setIncome(totalIncome);
      setExpense(totalExpense);
    }
  };

  useEffect(() => {
    // Initial load
    updateTransactionLocalStorage();

    // Create custom event listener for current tab
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "transactions") {
        updateTransactionLocalStorage();
      }
    };

    // Listen for storage events (from other tabs)
    window.addEventListener("storage", handleStorageChange);

    // Override localStorage.setItem to detect changes in current tab
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value]);
      if (key === "transactions") {
        updateTransactionLocalStorage();
      }
    };

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.setItem = originalSetItem; // Restore original
    };
  }, []);

  const balance = income - expense;

  return (
    <div className="flex-1 grid grid-cols-1 gap-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-600">
          📊 Total Transactions
        </p>
        <p className="text-2xl font-bold">{transactions.length}</p>
      </div>
      <div className="p-4 bg-green-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-green-600">💰 Total Income</p>
        <p className="text-2xl font-bold">₹{income}</p>
      </div>
      <div className="p-4 bg-red-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-red-600">💸 Total Expense</p>
        <p className="text-2xl font-bold">₹{expense}</p>
      </div>
      <div className="p-4 bg-blue-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-blue-600">
          🧾 Remaining Amount
        </p>
        <p
          className={`text-2xl font-bold ${
            balance >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          ₹{balance}
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
