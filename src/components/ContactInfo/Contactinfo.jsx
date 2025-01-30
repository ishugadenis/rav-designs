import React from "react";
import "./Contactinfo.css";

const Contactinfo = () => {
  return (
    <section>
      <div className="contactinfo">
        <div className="contactinfo-title">
          <h6>Telephone</h6>
          <hr></hr>
          <a href="tel:+254799768112" target="_blank" rel="noopener noreferrer">
            +254(0)799 768 112
          </a>
        </div>
        <div className="contactinfo-title">
          <h6>Email Address</h6>
          <hr></hr>
          <a
            href="mailto:denisishuga@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ravtech@gmail.com
          </a>
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
  );
};

export default Contactinfo;
