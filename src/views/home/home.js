import React from 'react'
import AddBtn from './add-button.png'
import './home.css'
import Todolist from '../../components/todolist'

function home() {
 
  return (
    <>
      <div className='app-container'>
      <h1 className='heading'>To-do-app</h1>

        <div className='list-container'>
          <Todolist/>
        </div>
        <div className='btn-ip'>
<input className='input' type='text' id='todo-input' placeholder='Enter your Task here..'></input>
<img src={AddBtn}  className='add-btn' alt='submit btn'></img>
        </div>
        </div>


    
    </>
  )
}

export default home