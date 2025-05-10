import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/comp-addTransaction/InputBox";
import SelectBox from "../components/comp-addTransaction/SelectBox";
import Description from "../components/comp-addTransaction/Description";
import { useContext, useEffect } from "react";
import { EditContext } from "../context/EditContext";

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
  const [incomeType, setIncomeType] = useState("salary");
  const [expenseType, setExpenseType] = useState("food");
  const [incomeButtonClicked, setIncomeButtonClicked] = useState(false);
  const [expenseButtonClicked, setExpenseButtonClicked] = useState(false);
  const [description, setDescription] = useState("");

  const { item } = useContext(EditContext);

  const handleIncomeClick = () => {
    // console.log("Income clicked");
    setIncomeButtonClicked(true);
    setExpenseButtonClicked(false);
  };

  const handleExpenseClick = () => {
    // console.log("Expense clicked");
    setExpenseButtonClicked(true);
    setIncomeButtonClicked(false);
  };

  const handleAddTransaction = () => {
    // console.log("Add Transaction clicked");
    // console.log("Input Value:", inputValue);
    // console.log("Income Type:", incomeType);
    // console.log("Expense Type:", expenseType);

    const transactionDetails = () => {
      if (!incomeButtonClicked && !expenseButtonClicked) {
        alert("Please select a transaction type - 'Income' or 'Expense'");
        return;
      }
      if (!inputValue) {
        alert("Please enter a valid amount");
        return;
      }
      if (Number(inputValue) <= 0) {
        alert("Please enter a positive number for the amount");
        return;
      }
      if (!description) {
        alert("Please enter a description");
        return;
      }

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
    if (!details) return;

    onAddTransaction(details);
    setInputValue("");
    setIncomeType("salary");
    setExpenseType("food");
    setIncomeButtonClicked(false);
    setExpenseButtonClicked(false);
    setDescription("");
  };

  useEffect(() => {
    if (item) {
      setInputValue(item.amount);
      setDescription(item.description);

      if (item.type === "Income") {
        setIncomeButtonClicked(true);
        setIncomeType(item.category);
        setExpenseButtonClicked(false);
      } else {
        setExpenseButtonClicked(true);
        setExpenseType(item.category);
        setIncomeButtonClicked(false);
      }
    }
  }, [item]);

  const selectCategoryFields = () => {
    switch (true) {
      case incomeButtonClicked:
        return (
          <>
            <SelectBox
              options={[
                "Salary",
                "Freelance",
                "Business",
                "Rental Income",
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
        );

      case expenseButtonClicked:
        return (
          <>
            <SelectBox
              options={[
                "Food",
                "Transport",
                "Rent",
                "Utilities",
                "Entertainment",
                "Health",
                "Education",
                "Shopping",
              ]}
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
            />
            <Description
              description={description}
              setDescription={setDescription}
            />
          </>
        );

      default:
        return (
          <>
            <SelectBox
              options={["Select Category"]}
              value={incomeButtonClicked ? incomeType : expenseType}
              onChange={(e) =>
                incomeButtonClicked
                  ? setIncomeType(e.target.value)
                  : setExpenseType(e.target.value)
              }
            />
            <Description
              description={description}
              setDescription={setDescription}
            />
          </>
        );
    }
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
            bgColor={
              incomeButtonClicked
                ? "bg-[var(--accent-income-clickBg)]"
                : "bg-[var(--accent-income-bg)]"
            }
          />
          <Button
            name="Expense"
            onClick={handleExpenseClick}
            bgColor={
              expenseButtonClicked
                ? "bg-[var(--accent-expense-clickBg)]"
                : "bg-[var(--accent-expense-bg)]"
            }
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
        <div>{selectCategoryFields()}</div>
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
