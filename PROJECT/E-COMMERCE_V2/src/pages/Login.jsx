import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {loginUser} from '../utils/localStorageUtils'
import {Link } from 'react-router-dom';
const Login = () => {
  const nav=useNavigate()
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [error,SetError]=useState('')

  const handleLogin=()=>{
    SetError('')
    if(loginUser(username,password)){
      nav('/')
    }
    else{
      SetError('Invalid credential')
    }
  }
  return (
    <>
        <div className="container my-4">
          <h2 className="text-center mb-4">Signin</h2>
          <div className="form-group mb-3">
            <input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group mb-3">
            <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button className="btn btn-primary w-100" onClick={handleLogin}>Signin</button>
          <div className="text-end mt-2">
            <Link className="nav-link text-primary text-decoration-underline" to="/forgotpassword">Forgot password</Link>
          </div>
        </div>
        
    </>
  )
}

export default Login
