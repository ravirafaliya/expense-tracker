import { useEffect, useState } from "react";
import Header from "../layouts/Header";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type Transaction = {
  type: string;
  amount: string;
  category: string;
  description: string;
};

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

const Report = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
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
  }, []);

  const balance = income - expense;

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
    { name: "Balance", value: balance },
  ];

  return (
    <div>
      <Header />
      <div className="p-4 bg-[var(--bg-secondary)] shadow-md rounded-lg max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-[var(--accent-primary-text)] mb-4 text-center">
          Financial Report
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {transactions.length === 0 && (
            <p className="text-center text-[var(--accent-primary-text)] m-4">
              No transactions available.
            </p>
          )}

          {transactions.length && (
            <div className="flex-1 bg-[var(--accent-primary-bg)] shadow-lg rounded-lg p-4">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={(entry) => {
                      const iconMap: { [key: string]: string } = {
                        Income: "💰",
                        Expense: "💸",
                        Balance: "🧾",
                      };
                      return `${iconMap[entry.name]} ${entry.name} 
                    `;
                    }}
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string) => {
                      const iconMap: { [key: string]: string } = {
                        Income: "💰",
                        Expense: "💸",
                        Balance: "🧾",
                      };
                      return [`₹${value}`, `${iconMap[name]} ${name}`];
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-600">
                📊 Total Transactions
              </p>
              <p className="text-2xl font-bold">{transactions.length}</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-green-600">
                💰 Total Income
              </p>
              <p className="text-2xl font-bold">₹{income}</p>
            </div>
            <div className="p-4 bg-red-100 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-red-600">
                💸 Total Expense
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default Report;
