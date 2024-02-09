import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    document.querySelectorAll(".inputF").forEach(ele=>{
        ele.style.display="none"
    }
        )
    document.querySelectorAll(".btnF").forEach(ele=>{
        console.log(ele)
        ele.style.display="none"
    })
    document.querySelector(".newExpBtn").style.display="flex"
  };
  /////////////////////////////////
  function addNewExpence(event){
    event.preventDefault();
    console.log(event)
    event.target.parentElement.style.display="none"
    document.querySelectorAll(".inputF").forEach(ele=>{
        ele.style.display="block"
    }
        )
    document.querySelectorAll(".btnF").forEach(ele=>{
        console.log(ele)
        ele.style.display="block"
    })

  }
  function cancelNewExpense(event){
        event.preventDefault()
        document.querySelectorAll(".inputF").forEach(ele=>{
            ele.style.display="none"
        }
            )
        document.querySelectorAll(".btnF").forEach(ele=>{
            console.log(ele)
            ele.style.display="none"
        })
        document.querySelector(".newExpBtn").style.display="flex"
        

  }
  /////////////////////////////////

  return (
    <form onSubmit={(event) => formSubmit(event)}>
      <div className="new-expense__controls">
        <div className="new-expense__control inputF">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={(event) => titleChangeHandler(event)}
            type="text"
          />
        </div>
        <div className="new-expense__control inputF">
          <label>Amount</label>
          <input
            onChange={(event) => amountChangeHandler(event)}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control inputF">
          <label>Date</label>
          <input
            onChange={(event) => dateChangeHandler(event)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions btnF" >
        <button type="button" onClick={(e)=>cancelNewExpense(e)} >Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
      <div className="new-expense__actions">
      </div>
      <div className="new-expense__actions newExpBtn">
        <button type="button" onClick={(e)=>addNewExpence(e)}>Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
