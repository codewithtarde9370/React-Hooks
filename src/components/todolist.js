import './todolist.css'

function Todolist({task,category,i}) {
    return (
        <>
        <div className='list-item' key={i}>{listItem}</div>
        
    
       </>
    )
}

export default Todolist