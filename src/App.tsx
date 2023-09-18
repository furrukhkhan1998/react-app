import {useState} from 'react';
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';


function App() {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([{id: 1, description: 'adsadad', amount: 10, category: 'Groceries'},
  {id: 2, description: 'adsdqw', amount: 13, category: 'random' },
  {id: 3, description: 'sdfsad', amount: 1, category: 'Groceries' },
  {id: 4, description: 'zzsdaasd', amount: 4, category: 'random' }]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category == selectedCategory) : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e)=> e.id!== id))}/>
    </>
  ) 
} 

export default App;