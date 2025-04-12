import React, { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';


const Home = () => {
    useEffect(()=>{
            return(()=>{console.log("HOME:only executed when page is chnaged!")})
        },[]);
  let [count,setCount]=useState(0); 
  const nav=useNavigate();
  let move=()=>{
    nav('/form');
  }
  return (
    <div>
      <h1>Welcome home!</h1>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
      <button onClick={move}>Move to form page!</button>
    </div>
  )
}

export default Home
