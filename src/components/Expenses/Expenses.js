import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeDataHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  var checkForResults = <p>No results shown.</p>;

  if (filteredExpenses.length > 0) {
    checkForResults = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  }

  return (
    <Card className="expenses">

      <ExpenseFilter
        selected={filteredYear}
        onYearChange={yearChangeDataHandler}
      ></ExpenseFilter>

      {checkForResults}
      
    </Card>
  );
}

export default Expenses;
