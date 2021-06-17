import React, { useState } from 'react';
import ExpenseList from './Components/ExpenseList';
import "./App.css";
import NewExpense from './Components/NewExpense/NewExpense';
const initialData = [
  {
    id: 1,
    title: "Laptop",
    amount: 450,
    date: new Date(2020, 7, 25)
  },
  {
    id: 2,
    title: "Loud Speaker",
    amount: 50,
    date:  new Date(2020, 3, 28)
  },
  {
    id: 3,
    title: "Books",
    amount: 20,
    date: new Date(2021, 2, 2)
  },
  {
    id: 4,
    title: "Television",
    amount: 200,
    date: new Date(2019, 6, 29)
  }
];

function App() {
  const [expenses, setExpense] = useState(initialData);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [...prevExpense, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList items={expenses}/>
    </div>
  )
}
export default App;
