import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  let nav = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!passwordRegex.test(form.password)) {
      setError('Password must be at least 6 characters,contains lettes and numbers.');
      return;
    }
    const users = getFromStorage('users') || [];
    const found = users.find(u => u.email === form.email);
    if (found) {
      setError("Email already exists.");
      return;
    }
    users.push({ ...form });
    saveToStorage('users', users);
    console.log(localStorage.getItem('users'));
    nav('/login');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {error && <div className="text-red-500">{error}</div>}
      {['firstName','lastName','email','phone','password','confirmPassword'].map(field => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block">{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            id={field}
            type={field.includes('password') ? 'password' : 'text'}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
            required
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;
