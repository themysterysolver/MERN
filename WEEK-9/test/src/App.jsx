import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import FeedbackForm from './components/FeedbackForm';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getFromStorage, saveToStorage } from './utils/storage';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const current = getFromStorage('currentUser');
    if (current) setUser(current);
  }, []);

  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/profile" element={<Profile />}/>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
