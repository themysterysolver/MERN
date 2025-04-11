import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [count, setCount] = useState(0)
  const [name,setName]= useState(0);
  console.log(name);
  let [Data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData(){
        let dataa=await axios.get("https://67f8e30c094de2fe6e9f90ea.mockapi.io/user");
        setData(dataa.data);
        console.log(dataa);
    }
  return (
    <>
      <form action="">
        <label htmlFor="">NAME:</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      </form>
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </div>
      <div>
        <ol>
          {Data.map((el)=>{
              return <>
                  <li>{el.name}</li>
              </>
          })}
        </ol>
      </div>
    </>
      
  )
}

export default App
