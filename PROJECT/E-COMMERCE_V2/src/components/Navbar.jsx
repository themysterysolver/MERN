import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {getCurrentUser,logoutUser} from '../utils/localStorageUtils';
const Navbar = () => {
  const navigate=useNavigate();
  const user=getCurrentUser();
  const handleLogOut=()=>{
    logoutUser();
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Shopify</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="navbar-text me-3">Hello, {user.username}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogOut}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Signin</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
