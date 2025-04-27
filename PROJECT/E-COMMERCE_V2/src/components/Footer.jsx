import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <Link className="text-decoration-none mx-2" to="/aboutus">About Us</Link> | 
        <Link className="text-decoration-none mx-2" to="/faq">FAQ</Link> | 
        <Link className="text-decoration-none mx-2" to="/privacypolicy">Privacy Policy</Link> | 
        <Link className="text-decoration-none mx-2" to="/termscondition">Terms & Conditions</Link>
      </div>
    </footer>
  );
}

export default Footer;
