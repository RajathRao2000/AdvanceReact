import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle]=useState("")
    const [enteredAmount,setEnteredAmount]=useState("")
    const [enteredDate,setEnteredDate]=useState("")

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmit=(event)=>{
    event.preventDefault()
    console.log(event)
    console.log("title:",event.target[0].value)
    console.log("amount:",event.target[1].value)
    console.log("date:",event.target[2].value)
  }

  return (
    <form onSubmit={(event) => formSubmit(event)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={(event) => titleChangeHandler(event)} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(event) => amountChangeHandler(event)}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(event) => dateChangeHandler(event)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button  type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
