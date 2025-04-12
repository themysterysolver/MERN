import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Form = () => {
    useEffect(()=>{
                return(()=>{console.log("Form:only executed when page is chnaged!")})
            },[]);
    useEffect(()=>{
        console.log("Only executed while mounting!");
    },[]);
    
    let [c1,setC1]=useState(0);
    let [c2,setC2]=useState(0);
    useEffect(()=>{
        console.log("I am executed only when c1 is changed!")
    },[c1])
  return (
    <div>
      <form>
        <label>NAME</label><input type="text" placeholder="xxx"/>
      </form>
      <button onClick={()=>{setC1(c1+1)}}>C1:{c1}</button>
      <button onClick={()=>{setC2(c2+1)}}>C2:{c2}</button>
    </div>
  )
}

export default Form
