import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <Link className="navbar-brand text-white" to="/">AUTH</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon  "></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/profile">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/feedback">Feedback</Link>
              </li>
            </>
          )}
        </ul>

        <span className="navbar-text text-white">
          {user ? (
            <>
              Hello, {user.firstName} &nbsp;
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            'Default user'
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
