import React from "react";
import './ExpenseItem.css';
function ExpenseItem(){
    return(
        <div className="expense__item">
            <div> March 14, 2001</div>
            <div className="expense__description">
                <h2>Laptop Insurance</h2>
                <span className="expense__price">$500</span>
            </div>
        </div>
    );
}
export default ExpenseItem;