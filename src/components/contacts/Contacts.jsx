
import React from 'react';
import './Contacts.css';


const Contacts = () => {
  return (
    <div className="contacts">
        <a>T: +254 (0)799 768 112 | E: ravtech@gmail.com</a>
        <div className="social-media-links">
            <a href=""><img src="/assets/facebook.png" alt="Facebook" className="facebook"/></a>
            <a href=""><img src="/assets/instagram.png" alt="Instagram" className="facebook"/></a>
            <a href=""><img src="/assets/linkedin.png" alt="Linkedin" className="facebook"/></a>
        </div>
    </div>
  )
}

export default Contacts
