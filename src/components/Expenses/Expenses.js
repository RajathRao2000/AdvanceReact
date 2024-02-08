import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  let valuesArr = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.location}
    />
  ));

  const [expenceList, setExpenseList] = useState(valuesArr);
  const [filteredYear, setFilteredYear] = useState("--select--");

  const filterChangeHandler = (selectedYear) => {
    let arr=valuesArr
    setFilteredYear(selectedYear);
    setExpenseList(
      arr.filter((obj) => {
        return obj.props.date.getFullYear() == selectedYear;
      })
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenceList}
    </Card>
  );
};

export default Expenses;
