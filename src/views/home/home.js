import AddBtn from './add-button.png';
import './home.css';
import Todo from './../../components/todolist';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

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
          <img
            src={AddBtn}
            className='add-btn'
            alt='submit btn'
            onClick={() => {
             if (newTask==="")
               {(toast.error("Task Cannot be Empty!"))}
              else 
              { setTodoList([...todoList, newTask])  
              setNewTask("")
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
