import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // import correctly
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav('/')
      alert('Login successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in:', user.email);
    } else {
      console.log('User is logged out');
    }
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
