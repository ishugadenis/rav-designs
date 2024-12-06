
import React from 'react';
import './Footer.css';

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
           <a href="/portfolio" className="deals-button button">Know Us</a>
           <a href="/portfolio" className="deals-button button">Contact Us</a>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="links">
        <div className="links-column">
            <h6>Get Started</h6>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="links-column">
            <h6>Products</h6>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
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