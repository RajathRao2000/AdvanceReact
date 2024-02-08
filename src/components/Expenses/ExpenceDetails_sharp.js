import React,{useState} from 'react';

import "./ExpenseItem.css";

function ExpenceDetails(props) {
  function deleteExpense(event){
    event.target.parentElement.parentElement.remove()
  }

  // const [title,setTitle]=useState(props.title)
  // const clickHandler=()=>{

  //   setTitle("Updated!")
  //   console.log(title)
  // }

  // const [expense,setExpense]=useState(props.amount)

  // const changeExpense=()=>{
  //   setExpense(100)
  // }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button className="delete-btn" onClick={(event)=>deleteExpense(event)}>Delete Expense</button>
      <button className="edit-btn" onClick={(event)=>changeExpense(event)}>Change Expense</button>
      <button className="clickHandler" onClick={clickHandler}>change title</button> */}
    </div>
  );
}

export default ExpenceDetails;