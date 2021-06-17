import React, { useState } from 'react';
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css"
function NewExpense(props) {
    const [formShown, setFormShown] = useState(false);
    const ButtonHandler = (event) => {
        setFormShown(true);
    }
    const cancelButtonHandler = (event) => {
        setFormShown(false);
    }
    const saveNewFormData = (formData) => {
        const expenseData = {
            ...formData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense_form">
            {!formShown && <button onClick={ButtonHandler}>Add New Expense</button>}
            {formShown && <NewExpenseForm newFormData={saveNewFormData} onCancel={cancelButtonHandler}/>}
        </div>
    );
}
export default NewExpense;