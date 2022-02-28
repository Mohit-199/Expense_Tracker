import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Initialexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 194.12,
    date: new Date(2023, 2, 24),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 179.49, 
    date: new Date(2024, 3, 22) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 104.67,
    date: new Date(2023, 1, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 500,
    date: new Date(2022, 1, 30),
  },
]

const App = () => {
  const [initialExp, setExpense] = useState(Initialexpenses);
  const addExpenseHandler = (addExpense) =>{
    setExpense((prevExpense) => {
      return [addExpense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler} />
      <Expenses items={initialExp} />
    </div>
  );
}

export default App;
