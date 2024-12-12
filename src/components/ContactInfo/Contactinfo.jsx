import React from 'react';
import './Contactinfo.css';

const Contactinfo = () => {
  return (
    <section>
      <div className='contactinfo'>
        <div className="contactinfo-title">
          <h6>Telephone</h6>
          <hr></hr>
          <p>+254(0)799 768 112</p>
        </div>
        <div className="contactinfo-title">
          <h6>Email Address</h6>
          <hr></hr>
          <p>ravtech@gmail.com</p>
        </div>
        <div className="contactinfo-title">
          <h6>Opening Hours</h6>
          <hr></hr>
          <ul>
            <li>Monday – Friday: 8:30 am – 7:00 pm​​</li>
            <li>Saturday: 8:30 am – 6:00 pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>  
      </div>
    </section>
  )
}

export default Contactinfo