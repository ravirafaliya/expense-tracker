import AddTransaction from "../layouts/AddTransaction";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";
import { useState } from "react";

type Transaction = {
  type: string;
  amount: string;
  description: string;
  category: string;
};

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex">
        <section className="w-1/2 p-4">
          <AddTransaction onAddTransaction={handleAddTransaction} />
        </section>
        <section className="w-1/2 p-4">
          <TransactionHistory transactions={transactions} />
        </section>
      </div>
    </>
  );
};

export default Home;
