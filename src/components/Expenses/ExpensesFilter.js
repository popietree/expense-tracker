import "./ExpensesFilter.css";

//Controlled component becauce value set and change Handler logic is in parent
const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onEnterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
