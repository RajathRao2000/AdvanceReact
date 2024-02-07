

import "./ExpenseItem.css";

function ExpenceDetails(props) {
  function deleteExpense(event){
    event.target.parentElement.parentElement.remove()
  }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button onClick={deleteExpense}></button> */}
      <button className="delete-btn" onClick={(event)=>deleteExpense(event)}>Delete Expense</button>
    </div>
  );
}

export default ExpenceDetails;