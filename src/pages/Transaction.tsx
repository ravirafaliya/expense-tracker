import { useState } from "react";
import TransactionHistory from "../layouts/TransactionHistory";

type Transaction = {
  type: string;
  amount: string;
  description: string;
  category: string;
};

const Transaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleDeleteButton = (indexToDelete: number): void => {
    const updatedTransactions = transactions.filter((_, index: number) => {
      return index !== indexToDelete;
    });
    setTransactions(updatedTransactions);
  };
  return (
    <div>
      <TransactionHistory
        transactions={transactions}
        onDeleteTransaction={handleDeleteButton}
      />
    </div>
  );
};

export default Transaction;
