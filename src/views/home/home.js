import AddBtn from './add-button.png';
import './home.css';
import Todo from './../../components/todolist';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
const [category, setCategory] = useState("");
  return (
    <>
      <div className='app-container'>
        <h1 className='heading'>To-do-app</h1>

        <div className='list-container'>
          {todoList.length === 0 ? (
            <p className='empty-msg'>List is empty. Add a new task here.</p>
          ) : (
            todoList.map((listItem, i) => <Todo key={i} listItem={listItem} />)
          )}
        </div>

        <div className='btn-ip'>
          <input
            className='input'
            type='text'
            id='todo-input'
            placeholder='Enter your Task here..'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
            <select
             className='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="Shopping">Shopping</option>
              <option value="Learning">Learning</option>
              <option value="Grocery">Grocery</option>
              <option value="Household">Household</option>
              <option value="official">official</option>
              <option value="Others">Others</option>
            </select>

          <img
            src={AddBtn}
            className='add-btn'
            alt='submit btn'
            onClick={() => {
             if (newTask==="" || category==="")
               {(toast.error("Task and category Cannot be Empty!"))}
            
              else 
              { setTodoList([...todoList, newTask])  
              setNewTask("")
              setCategory("")
              toast.success("Task added Succesfully!")}
            }}
          />
          <Toaster/>
        </div>
      </div>
    </>
  );
}

export default Home;
