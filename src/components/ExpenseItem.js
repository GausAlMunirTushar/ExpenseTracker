import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){
    
    return(
        <div className="expense__item">
            <ExpenseDate date={props.date}/>
            <div className="expense__description">
                <h2>{props.title}</h2>
                <span className="expense__price">{props.amount}</span>
            </div>
        </div>
    );
}
export default ExpenseItem;