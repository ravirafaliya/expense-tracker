import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/comp-addTransaction/InputBox";
import SelectBox from "../components/comp-addTransaction/SelectBox";
import Description from "../components/comp-addTransaction/Description";

type AddTransactionProps = {
  onAddTransaction: (transaction: {
    type: string;
    amount: string;
    description: string;
    category: string;
  }) => void;
};
const AddTransaction = ({ onAddTransaction }: AddTransactionProps) => {
  const [inputValue, setInputValue] = useState("");
  const [incomeType, setIncomeType] = useState("income");
  const [expenseType, setExpenseType] = useState("expense");
  const [incomeButtonClicked, setIncomeButtonClicked] = useState(false);
  const [expenseButtonClicked, setExpenseButtonClicked] = useState(false);
  const [description, setDescription] = useState("");

  const handleIncomeClick = () => {
    console.log("Income clicked");
    setIncomeButtonClicked(true);
    setExpenseButtonClicked(false);
  };

  const handleExpenseClick = () => {
    console.log("Expense clicked");
    setExpenseButtonClicked(true);
    setIncomeButtonClicked(false);
  };

  const handleAddTransaction = () => {
    console.log("Add Transaction clicked");
    console.log("Input Value:", inputValue);
    console.log("Income Type:", incomeType);
    console.log("Expense Type:", expenseType);

    const transactionDetails = () => {
      if (incomeButtonClicked) {
        return {
          type: "Income",
          amount: inputValue,
          category: incomeType,
          description: description,
        };
      } else if (expenseButtonClicked) {
        return {
          type: "Expense",
          category: expenseType,
          amount: inputValue,
          description: description,
        };
      }
    };

    const details = transactionDetails();

    if (!details) {
      console.warn("No transaction type selected.");
      return;
    }

    onAddTransaction(details);
    setInputValue("");
    setIncomeType("");
    setExpenseType("");
    setIncomeButtonClicked(false);
    setExpenseButtonClicked(false);
    setDescription("");
  };
  return (
    <>
      <div className="w-full bg-[var(--bg-secondary)] flex flex-col items-center justify-center shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[var(--accent-primary-text)] p-3  w-full text-center">
          Add Transaction
        </h2>
        <div className="flex w-full px-3 gap-4">
          <Button
            name="Income"
            onClick={handleIncomeClick}
            bgColor="bg-[var(--accent-primary)]"
          />
          <Button
            name="Expense"
            onClick={handleExpenseClick}
            bgColor="bg-[var(--accent-secondary)]"
          />
        </div>
        <div>
          <InputBox
            placeholder="Amount"
            value={inputValue}
            type="number"
            css="font-bold appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-4xl text-center mb-3 py-5 focus:outline-none"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          {incomeButtonClicked && (
            <>
              <SelectBox
                options={[
                  "Salary",
                  "Freelance",
                  "Business",
                  "rental_Income",
                  "Investment",
                  "Bank Interest",
                  "Gifts",
                  "Others",
                ]}
                value={incomeType}
                onChange={(e) => setIncomeType(e.target.value)}
              />
              <Description
                description={description}
                setDescription={setDescription}
              />
            </>
          )}
          {expenseButtonClicked && (
            <>
              <SelectBox
                options={[
                  "food",
                  "transport",
                  "rent",
                  "utilities",
                  "entertainment",
                  "health",
                  "education",
                  "shopping",
                ]}
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
              />
              <Description
                description={description}
                setDescription={setDescription}
              />
            </>
          )}
        </div>
        <Button
          name={`Add Transaction ${inputValue}`}
          bgColor="bg-[var(--accent-primary-text)]"
          onClick={handleAddTransaction}
        />
      </div>
    </>
  );
};

export default AddTransaction;
