// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  //Can only put in react hook or react comppnent functino
  const [enteredYear, setEnteredYear] = useState("2021");
  // const defaultYear = new Date().getFullYear;

  const enterYearHandler = (inputYear) => {
    console.log(inputYear, "in Expenses");
    setEnteredYear(inputYear);
  };
  let listOfYearlyExpenses;
  if (enteredYear === "All") {
    listOfYearlyExpenses = props.items;
  } else {
    listOfYearlyExpenses = props.items.filter(
      (el) => el.date.getFullYear() === +enteredYear
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onEnterYear={enterYearHandler} />
        <ExpenseChart expenses={listOfYearlyExpenses} />
        <ExpensesList items={listOfYearlyExpenses} enteredYear={enteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;

// const listOfExpenseItem = listOfYearlyExpenses.map((el) => (
//   <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
// ));

// let expensesContent = <p>No expenses found.</p>;

// if (listOfExpenseItem.length > 0) {
//   expensesContent = listOfExpenseItem;
// }

// return (
//   <div>
//     <Card className="expenses">
//       <ExpensesFilter selected={enteredYear} onEnterYear={enterYearHandler} />
//       {expensesContent}
//       <ExpenseChart expenses={listOfYearlyExpenses} />
//       <ExpensesList items={listOfYearlyExpenses} enteredYear={enteredYear} />
//     </Card>
//   </div>
// );
