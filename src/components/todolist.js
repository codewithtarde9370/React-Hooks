import './todolist.css'
import delImg from "./delete.png"

function Todo({deleteItem,task,category,i}) {
    const EMOJI=
        {
         learning: "📚",
         health :"🩺",
         kitchen:"👨‍🍳",
         food:"🍽",
         office:"💻",
         entertainment:"💃",
         personal:"🔏",
         others:"🅾"

        }
    
    const COLORS=
        {
         learning: "#1679AB",
         health :"#059212",
         kitchen:"#5F0F40",
         food:"#201658",
         office:"#254336",
         entertainment:"#BC5A94",
         personal:"#FF8F00",
         others:"#FFB1B1"

        }
    
   
    return (
        <>
        <div
         className='list-item'
          key={i}
          >
            <img 
            className='del-img'
             src={delImg} 
             alt='delete'
             onClick={()=>{
                deleteItem
             }}
             >
                </img> 
                 {task}
              <span 
              className='cate' 
              style={{backgroundColor:COLORS[category]}}
              > {EMOJI[category]} {category}
              </span>
              </div>
        
        
       </>
    )
}

export default Todo