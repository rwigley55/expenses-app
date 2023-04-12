import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //enteredExpenseData is the expenseData object we generated in the ExpenseForm submit handler
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //Passing data to this function through props, can be lifted up with state
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
