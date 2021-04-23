import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeDataHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">

      <ExpenseFilter
        selected={filteredYear}
        onYearChange={yearChangeDataHandler}
      ></ExpenseFilter>

        <ExpensesList filtered={filteredExpenses} />
      {/* {checkForResults} */}
      
    </Card>
  );
}

export default Expenses;
