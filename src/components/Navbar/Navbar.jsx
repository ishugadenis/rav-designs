import React from 'react'
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import "../../App.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();


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
        <Link className={`link ${location.pathname === '/' ? 'active' : ''}` } to="/">Home</Link>
        <Link className={`link ${location.pathname === '/aboutus' ? 'active' : ''}` } to="/aboutus">About</Link>
        <Link className={`link ${location.pathname === '/services' ? 'active' : ''}` } to="/services">What we do</Link>
        <Link className={`link ${location.pathname === '/pricing' ? 'active' : ''}` } to="/pricing">Plans & Pricing</Link>
        <Link className={`link ${location.pathname === '/portfolio' ? 'active' : ''}` } to="/portfolio">Portfolio</Link>
        <Link className={`link ${location.pathname === '/contact' ? 'active' : ''}` } to="/contact">Contact</Link>
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