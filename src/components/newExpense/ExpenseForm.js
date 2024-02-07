import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titlechange = (event) => {
    console.log(event.target.value);
    console.log("title change: " + event.target.value);
  };
  const amountchange = (event) => {
    console.log("amount change: " + event.target.value);
  };
  const datechange = (event) => {
    console.log("date change: " + event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={(event) => titlechange(event)} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(event) => amountchange(event)}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(event) => datechange(event)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
