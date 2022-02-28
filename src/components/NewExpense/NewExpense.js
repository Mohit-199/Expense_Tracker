import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const setEdiitngHandler = () =>{
        setIsEditing(true);
    }
    const onCancelHandler = () =>{
        setIsEditing(false);
    }
    const onSaveHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={setEdiitngHandler} >Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveHandler} onCancel={onCancelHandler} />}
        </div>
    )
}
export default NewExpense;