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

  const[task,setTask]=useState([details]);
  const[text,setText]=useState('');

  let addtask=(text)=>{
    const newTask={
      id:Date.now(),
      text,
      completed:false
    }
    setTask([...task,newTask]);
    setTask('');


  }
  return (
    <div>
      <h1>todo list</h1>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <button onClick={()=>addtask}>Add</button>
    </div>
  )
}

export default Todolist
