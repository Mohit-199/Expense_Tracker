import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
      
  
      const [yearSelect,setYear] = useState("2022");
      const dateFilter = (filteredDate) =>{
        setYear(filteredDate);
      }
      const filteredExpItems = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearSelect;
      });

      return (
            <Card className="expenses">
              <ExpensesFilter selected={yearSelect} onFilter={dateFilter}/>
              <ExpensesChart expenses={filteredExpItems}/>
              <ExpenseList items={filteredExpItems} />
            </Card>
      )
}

export default Expenses;