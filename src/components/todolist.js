import './todolist.css'

function Todolist({listItem,i}) {
    return (
        <>
        <div className='list-item' key={i}>{listItem}</div>
        
    
       </>
    )
}

export default Todolist