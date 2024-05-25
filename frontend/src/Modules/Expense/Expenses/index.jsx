import React, { useState } from "react";
import DisplayAmountCard from "../../../components/Cards/ExpenseCards/DisplayAmountCard";
import ExpenseTable from "../../../components/Tables/ExpenseTables/ExpenseTable";

const totalEarnings = 190467500;

const Expense = () => {
  const [expenseData, setExpenseData] = useState([
    {
      name: "Fridge",
      description: "two doors",
      date: "07/07/2022",
      price: "35090",
      type: "asset",
    },
    {
      name: "Mango",
      description: "3kg",
      date: "07/07/2022",
      price: "150",
      type: "liability",
    },
    {
      name: "Meat",
      description: "10kg",
      date: "07/07/2022",
      price: "1500",
      type: "material",
    },
  ]);

  const [totalProfit, setTotalProfit] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <DisplayAmountCard
            title="Profit"
            amount={totalProfit}
            currency="PKR"
          />
        </div>

        <div className="col-md-6">
          <DisplayAmountCard
            title="Expense"
            amount={totalExpense}
            currency="PKR"
          />
        </div>
      </div>
      <div className="container" style={{ overflowX: "hidden" }}>
        <ExpenseTable
          data={expenseData}
          totalEarnings={totalEarnings}
          setExpense={setTotalExpense}
          setProfit={setTotalProfit}
        />
      </div>
    </>
  );
};

export default Expense;
