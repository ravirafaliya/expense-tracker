import { useEffect, useState } from "react";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";
import { IoIosCloseCircle } from "react-icons/io";

type Transaction = {
  type: string;
  amount: string;
  description: string;
  category: string;
};

const Transaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [quote, setQuote] = useState<string | null>(null);
  const [showQuote, setShowQuote] = useState<boolean>(true);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
    fetchQuote();
  }, []);

  const handleDeleteButton = (indexToDelete: number): void => {
    const updatedTransactions = transactions.filter((_, index: number) => {
      return index !== indexToDelete;
    });
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote");
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseQuote = () => {
    setShowQuote(false);
  };

  const handleRefreshQuote = () => {
    fetchQuote();
    setShowQuote(true);
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
      {showQuote && (
        <div className="quote-container mx-auto my-5 p-4 border border-gray-300 rounded-lg max-w-xl text-center bg-gray-50 shadow-md relative">
          <p className="text-lg italic text-gray-700">
            {quote ? quote : "Loading..."}
          </p>
          <div className="mt-3 flex justify-center space-x-4">
            <button
              onClick={handleRefreshQuote}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Refresh
            </button>
            <button
              onClick={handleCloseQuote}
              className="absolute top-0 right-0 text-red-500 hover:text-red-600 transition duration-200"
            >
              <IoIosCloseCircle size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
