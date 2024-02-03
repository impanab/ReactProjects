import React, { useState } from 'react'
import "./TodoList.css"
export const TodoList = () => {
let [task,setTask]=useState("")
let [taskList,setTaskList]=useState([])
let updateTask=(e)=>{
 
    setTask(e.target.value)
    console.log(e.target.value);
}
let updateTaskList=()=> {
    setTaskList([...taskList,task])
   
}
let deleteTask=(id)=>{

taskList.splice(id,1)
setTaskList([...taskList])
}
  return (
    <div className="to-do-list">
        <div className='input-sec'>
          <label>TO DO LIST</label><br></br>
            <input type="text" placeholder='Enter Task' onChange={updateTask}/>
            <button onClick={updateTaskList}>ADD</button>
        </div>
         <div className='del'>
            <ol>{taskList.map((e,i)=>{
               return <li key={i}>{e}<button onClick={()=>{deleteTask(i)}}>Delete</button></li>
            })}
              </ol>
        </div>
    </div>
  )
}
