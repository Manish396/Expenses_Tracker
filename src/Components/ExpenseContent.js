import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpenseContent.css";
function ExpenseContent(props) {
    if (props.items.length === 0) {
        return <h2>No Expenses Found!</h2>
    }
    return (
        <ul className = "expense-content">
            {props.items.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </ul>
    );
}
export default ExpenseContent;