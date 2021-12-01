import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  let expenseDate = new Date(2021, 3, 25);
  let expenseTitle = 'Mobile Bill';
  let expenseAmount = 100;
  
  return (
    <div className="App">
        <h2>Expense Tracker App</h2>
         <Expenses/>
    </div>
  );
}

export default App;
