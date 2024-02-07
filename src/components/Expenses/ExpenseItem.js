import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenceDetails from './ExpenceDetails_sharp';

const ExpenseItem = (props) => {

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenceDetails title={props.title} amount={props.amount} date={props.date} location={props.location}/>
    </Card>
  );
}

export default ExpenseItem;
