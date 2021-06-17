import React, {useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseContent from "./ExpenseContent.js";
import ExpenseChart from "./ExpenseChart";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2021');
  
  const FilterChangeHandler = (SelectedYear) => {
    setFilteredYear(SelectedYear);
  }

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseChart expense={filteredExpense}/>
      <ExpenseFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
      <ExpenseContent items={filteredExpense}/>
    </div>
  );
}
export default ExpenseList;