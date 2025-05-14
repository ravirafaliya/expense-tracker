import AddTransaction from "../layouts/AddTransaction";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";
import { useEffect, useRef, useState } from "react";
import { EditProvider } from "../context/EditContext";
import TransactionDetails from "../components/TransactionDetails";

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
      <header className="fixed top-0 z-10 w-full">
        <Header />
      </header>
      <EditProvider>
        <section className="p-4 mt-30 md:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row">
            <section className="w-full lg:w-1/2 p-4">
              <AddTransaction onAddTransaction={handleAddTransaction} />
            </section>
            <section className="w-full lg:w-1/2 p-4">
              <TransactionDetails />
            </section>
          </div>
          <div className="p-2">
            <TransactionHistory
              transactions={transactions}
              onDeleteTransaction={handleDeleteButton}
              showEditButton={true}
              deleteLabel="Edit/Delete"
            />
          </div>
        </section>
      </EditProvider>
    </>
  );
};

export default Home;
