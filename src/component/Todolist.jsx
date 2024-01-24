import React, { useState } from 'react'

const Todolist = () => {
  const details=[
    {
      id:1,
      text:'eight Academy',
      completed:true
    },
    {
      id:2,
      text:'computer education',
      completed:false
    },
    {
      id:3,
      text:'school management',
      completed:true
    },
  ];
  let addtask=()=>{
    
  }
  const[task,setTask]=useState([details])
  return (
    <div>
      <h1>todo list</h1>
      <button onClick={()=>addtask}>Add</button>
    </div>
  )
}

export default Todolist
