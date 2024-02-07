import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  let arr=[]
  for(let i=0;i<props.items.length;i++){
    arr.push(<ExpenseItem
      title={props.items[i].title}
      amount={props.items[i].amount}
      date={props.items[i].date}
      location={props.items[i].location}
    />)
  }
  return (
    <Card className="expenses">
      {arr}
    </Card>
  );
}

export default Expenses;
