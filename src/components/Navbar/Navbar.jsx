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
    console.log(isOpen);
};


return (
<nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src="/assets/logo.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div className={`navbar-links ${ isOpen ? "active" : ""}`}>
        <Link className={`link ${location.pathname === '/' ? 'active' : ''}` } to="/" onClick={toggleMenu}>Home</Link>
        <hr />
        <Link className={`link ${location.pathname === '/aboutus' ? 'active' : ''}` } to="/aboutus" onClick={toggleMenu}>About us</Link>
        <hr />
        <Link className={`link ${location.pathname === '/services' ? 'active' : ''}` } to="/services" onClick={toggleMenu}>What we do</Link>
        <hr />
        <Link className={`link ${location.pathname === '/pricing' ? 'active' : ''}` } to="/pricing" onClick={toggleMenu}>Plans & Pricing</Link>
        <hr />
        <Link className={`link ${location.pathname === '/portfolio' ? 'active' : ''}` } to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <hr />
        <Link className={`link ${location.pathname === '/contact' ? 'active' : ''}` } to="/contact" onClick={toggleMenu}>Contact</Link>
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