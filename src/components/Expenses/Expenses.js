import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let arr = [];
  for (let i = 0; i < props.items.length; i++) {
    arr.push(
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i].date}
        location={props.items[i].location}
      />
    );
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {arr}
    </Card>
  );
};

export default Expenses;
