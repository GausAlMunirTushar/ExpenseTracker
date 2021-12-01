import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses= () => {
    let expeneses = [
        {
            id: 'e1',
            title: 'Books Buy',
            amount: 500,
            date: new Date(2020, 0, 1)
        },
        {
            id: 'e1',
            title: 'College Fee',
            amount: 500,
            date: new Date(2020, 0, 1)
        },
        {
            id: 'e1',
            title: 'House Rent',
            amount: 500,
            date: new Date(2020, 0, 1)
        },
        {
            id: 'e1',
            title: 'Car Rent',
            amount: 500,
            date: new Date(2020, 0, 1)
        }, {
            id: 'e1',
            title: 'Rent',
            amount: 500,
            date: new Date(2020, 0, 1)
        }
    ]
    return(
        <Card className="expenses">
                <ExpenseItem
                date={expeneses[0].date} 
                title={expeneses[0].title} 
                amount={expeneses[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expeneses[1].date} 
                title={expeneses[1].title} 
                amount={expeneses[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expeneses[2].date} 
                title={expeneses[2].title} 
                amount={expeneses[2].amount}>
            </ExpenseItem>
        </Card>
    );
}
export default Expenses;