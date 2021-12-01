import './ExpenseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    return(
        <div className="expense__date">
                <div className="expense__month">{month}</div>
                <div className="expense__year">{year}</div>
                <div className="expense__day">{day}</div>
        </div>
    );
}
export default ExpenseDate;