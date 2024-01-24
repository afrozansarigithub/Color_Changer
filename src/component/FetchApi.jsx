import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then((data1)=>setData(data1));
    },[])
  return (
    <div>
      {
        data.map((first)=>(
        <div key={first.userId}>

       

            <h1>{first.title}</h1>
           <h2>{first.id}</h2>
           <h2>{first.body}</h2>
        </div>
         
          )  )
      }
    </div>
  )
}

export default FetchApi
