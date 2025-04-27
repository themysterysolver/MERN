import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {registerUser} from '../utils/localStorageUtils'
const Sigin = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const nav=useNavigate();
  const [error,SetError]=useState('')

  const handleSignin=()=>{
    SetError(''); 
    if(registerUser(username,password,email)){
      nav('/login')
    }else{
      SetError('username alreay exist')
    }
  }
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Signin</h2>
      <div className="form-group mb-3">
        <input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary w-100" onClick={handleSignin}>Signin</button>
    </div>
  )
}

export default Sigin
