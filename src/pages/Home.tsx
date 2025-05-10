import AddTransaction from "../layouts/AddTransaction";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";
import { useEffect, useRef, useState } from "react";
import { EditProvider } from "../context/EditContext";

type Transaction = {
  type: string;
  amount: string;
  description: string;
  category: string;
};

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const isInitialMount = useRef(true);

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteButton = (indexToDelete: number): void => {
    const updatedTransactions = transactions.filter((_, index: number) => {
      return index !== indexToDelete;
    });
    setTransactions(updatedTransactions);
  };

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <header>
        <Header />
      </header>
      <EditProvider>
        <section>
          <div className="flex">
            <section className="w-1/2 p-4">
              <AddTransaction onAddTransaction={handleAddTransaction} />
            </section>
            <section className="w-1/2 p-4">
              {/* <TransactionHistory transactions={transactions} /> */}
            </section>
          </div>
          <div className="p-2">
            <TransactionHistory
              transactions={transactions}
              onDeleteTransaction={handleDeleteButton}
            />
          </div>
        </section>
      </EditProvider>
    </>
  );
};

export default Home;
