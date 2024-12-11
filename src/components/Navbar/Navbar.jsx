import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import "../../App.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

return (
<nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src="/assets/logo.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/aboutus">About</Link>
        <Link className='link' to="/services">What we do</Link>
        <Link className='link' to="/pricing">Plans & Pricing</Link>
        <Link className='link' to="/portfolio">Portfolio</Link>
        <Link className='link' to="/contact">Contact</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
);
}

export default Navbar;