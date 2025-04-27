import { useState } from 'react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user,setUser]=useState('');

  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  let nav=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log('I got in!')
    const users = getFromStorage('users') || [];
    console.log(users);
    const found = users.find(u => u.email === email && u.password === password);
    console.log(found,email,password);
    if (found) {
      setUser(found);
      saveToStorage('currentUser', found);
      console.log(localStorage.getItem('currentUser'));
      nav('/profile');
    } else {
      setError('Invalid email or password.');
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        {error && <div>{error}</div>}
        <label>EMAIL:</label>
        <input type="email" placeholder='abc@gmail.com' value={email} className="border p-2" onChange={e => setEmail(e.target.value)}  required />
        <br />
        <label>PASSWORD:</label>
        <input type="password" placeholder="Password" value={password}  className="border p-2" onChange={e => setPassword(e.target.value)} required />
        <br />
        <button type="submit" class="btn btn-primary m-2">Login </button><button class="btn btn-primary m-2" onClick={()=>nav('/forgot-password')}>Forgot password</button>
      </form>
    </div>
  )
}

export default Login
