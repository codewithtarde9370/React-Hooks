import AddBtn from './add-button.png';
import './home.css';
import Todo from './../../components/todolist';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
const [category, setCategory] = useState("");

useEffect(()=>{
  const savedTodoList=localStorage.getItem("todoList")

  if (savedTodoList){
    setTodoList(JSON.parse(savedTodoList))
  }
},[])

useEffect(()=>{
if (todoList.length === 0) return 

localStorage.setItem("todoList",JSON.stringify(todoList))
},[todoList])

function deleteItem(index){

  const newTodoList = todoList.filter((item,i)=>{
    if(i !== index){
              return true;
    }
    else{
      return false;
    }
  }) 
}

  return (
    <>
      <div className='app-container'>
        <h1 className='heading'>To-do-app</h1>

        <div className='list-container'>
          {todoList.length === 0 ? (
            <p className='empty-msg'>List is empty. Add a new task here.</p>
          ) : (
            todoList.map((listItem, i) => {
              const {task, category}=listItem;
            return(
            <>
            <Todo key={i} task={task} category={category} deleteItem={deleteItem}/>
            </>)})
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
              <option value="entertainment">entertainment</option>
              <option value="learning">learning</option>
              <option value="kitchen">kitchen</option>
              <option value="home">home</option>
              <option value="food">food</option>
              <option value="office">office</option>
              <option value="health">health</option>
              <option value="personal">personal</option>
              <option value="others">others</option>

            </select>

          <img
            src={AddBtn}
            className='add-btn'
            alt='submit btn'
            onClick={() => {
             if (newTask==="" || category==="")
               {(toast.error("Task and category Cannot be Empty!"))}
            
              else 
              { setTodoList([...todoList, {task:newTask, category: category}])  
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