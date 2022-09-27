import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const submitedExpenseDataHandler = (submitedExpenseData) => {
    const expenseData = {
      ...submitedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(!showForm);
  };

  const showFormhandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSubmitExpenseData={submitedExpenseDataHandler}
          onCancel={showFormhandler}
        />
      ) : (
        <button onClick={showFormhandler}>Add new expenses</button>
      )}
    </div>
  );
};

export default NewExpense;
