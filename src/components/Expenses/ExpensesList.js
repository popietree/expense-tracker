import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  // if entrie jsx code changes you can add if check

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  const listOfExpenseItem = props.items.map((el) => (
    <ExpenseItem
      key={el.id}
      title={el.title}
      amount={el.amount}
      date={el.date}
    />
  ));

  return <ul className="expenses-list"> {listOfExpenseItem}</ul>;
};

export default ExpensesList;
