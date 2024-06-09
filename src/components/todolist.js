import React from 'react'
import './todolist.css'

function Todolist() {

    const todoList=[
        "learning the poems",
        "reading sherlock holmes",
        "creating my app",
    ]
    return (
        <>
        {
    todoList.map((listItem,i)=>{
return(
    <div className='list-item'>{listItem}</div>
)
    })
        }</>
    )
}

export default Todolist