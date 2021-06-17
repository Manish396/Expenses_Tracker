import "./ExpenseFilter.css"
function ExpenseFilter(props) {
    const DropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className = "Expense-filter">
            <div className="Expense-filter_control">
                <label>Filter By Year</label>
                <select value = {props.selected} onChange = {DropdownChangeHandler}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    );
}
export default ExpenseFilter;