import React from 'react'
import {useNavigate} from 'react-router-dom';

const Home = () => {
    let nav=useNavigate();
  return (
    <div>
      <button onClick={()=>nav('/form')}>TO FORM</button>
    </div>
  )
}

export default Home
