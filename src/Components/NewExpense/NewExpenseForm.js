import React, { useState } from 'react';
import "./NewExpenseForm.css"
function NewExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.newFormData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit = {submitHandler}>
            <div className = "new-expense_controls">
                <div className = "new-expense_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className = "new-expense_control">
                    <label>Amount</label>
                    <input type="num" min="0.01" step="0.01" value ={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className = "new-expense_control">
                    <label>Date</label>
                    <input type="date" min="1 jan 2019" max="10 jun 2021" value ={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_action">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">New Expense</button>
            </div>
        </form>
    );
}
export default NewExpenseForm;