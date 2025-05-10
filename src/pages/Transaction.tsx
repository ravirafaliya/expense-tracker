import { useEffect, useState } from "react";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";

type Transaction = {
  type: string;
  amount: string;
  description: string;
  category: string;
};

const Transaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const handleDeleteButton = (indexToDelete: number): void => {
    const updatedTransactions = transactions.filter((_, index: number) => {
      return index !== indexToDelete;
    });
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };
  return (
    <div>
      <Header />
      <div className="p-3">
        <TransactionHistory
          transactions={transactions}
          onDeleteTransaction={handleDeleteButton}
          showEditButton={false}
        />
      </div>
    </div>
  );
};

export default Transaction;
