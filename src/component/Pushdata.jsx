import React, { useState } from 'react'

const Pushdata = () => {
    let details=['eight','academy']
    const[data,setData]=useState([details])
    const[input,setInput]=useState('')
    const handler=()=>{
        setData(current=>[...current,input])
    }
  return (
    <div>
       
      <input type="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      <button onClick={handler}>click</button>
      {
        data.map((element,index)=>{
            return (
                <div key={index}><h1>{element}</h1></div>
            )
        })
        }
     
    </div>
  )
}

export default Pushdata
