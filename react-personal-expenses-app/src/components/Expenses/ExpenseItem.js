import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  let dateData = props.date;
  let amount = props.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={dateData} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
