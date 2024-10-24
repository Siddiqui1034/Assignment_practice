import React, { useState , useRef} from 'react'

const ToDoList = () => {

    const [addTask, setAddTask] = useState([])
    const taskInputRef = useRef()


    const handleClick = () =>{
        // const task = (taskInputRef.current.value)
        setAddTask([...addTask, taskInputRef.current.value])
                }

    const deleteTask = (ind) =>{
        const fdata = [...addTask]
        fdata.splice(ind, 1)
        setAddTask(fdata)
    }
  return (
    <div className='text-center'>
      To Do List
      <p>
      <input ref={taskInputRef} type="text" placeholder='Enter Task'/>
      <button onClick={handleClick}>Add Task</button>
      </p>
    <ul>
    {
addTask?.map((task, ind)=>{
  // console.log(task)
  return <div id={ind}>
  <li>{task}</li>
  <button id={ind} onClick={()=>deleteTask(ind)}>Delete</button>
  </div>

} 
)
    }
        
      
    </ul>
      
    </div>
  )
}

export default ToDoList
