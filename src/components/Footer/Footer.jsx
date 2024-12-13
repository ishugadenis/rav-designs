
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className='flashscreen'>
         <div className="flashscreen-defination">
            <h6>Get the best deal today!</h6>
            <p>We offer you invaluable advice for your business helping you grow with quality Web Design, Branding, 
            Graphic Design or digital strategy. We’re looking forward to hearing from you.</p>  
        </div>
        <div className="flashscreen-buttons">
           <Link to="/aboutus" className="deals-button button">Know Us</Link>
           <Link to="/contact" className="deals-button button">Contact Us</Link>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="links">
        <div className="links-column">
            <h6>Get Started</h6>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className="links-column">
            <h6>Products</h6>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <a href="#affiiates">Affiliates</a>
            <a href="#buk">Bulk Orders</a>
        </div>
        <div className="links-column">
            <h6>Quick Links</h6>
            <a href="#portfolio">FAQ</a>
            <a href="#services">Blog</a>
            <a href="#affiiates">Carreer</a>
            <a href="#buk">Submit Ticket</a>
        </div><div className="links-column">
            <h6>Products</h6>
            <a href="#portfolio">Shiping & Funds</a>
            <a href="#services">Terms & Conditions</a>
            <a href="#affiiates">Privacy policy</a>
            <a href="#buk">Disclaimer</a>
        </div>

      </div>

    </section>
  )
}

export default Footer