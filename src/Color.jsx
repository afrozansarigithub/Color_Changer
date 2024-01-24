import React from "react";
import { useState } from "react";
const Color = () => {
    const[color,setColor]=useState('cyan');
    return (
        <div style={{backgroundColor:color,width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          
        <button onClick={()=>setColor('red')} style={{padding:'2px 30px',margin:'50px',backgroundColor:'red',color:'white',border:'1px solid white',}}>red</button>    
        <button onClick={()=>setColor('blue')} style={{padding:'2px 30px',margin:'50px',backgroundColor:'blue',color:'white',border:'1px solid white'}}>blue</button>    
        <button onClick={()=>setColor('orange')} style={{padding:'2px 30px',margin:'50px',backgroundColor:'orange',color:'white',border:'1px solid white'}}>orange</button>    
        <button onClick={()=>setColor('purple')} style={{padding:'2px 30px',margin:'50px',backgroundColor:'purple',color:'white',border:'1px solid white'}}>purple</button>    
            
      </div>
    )
}
export default Color;