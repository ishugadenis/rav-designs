import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <a
        href="tel:+254799768112"
        className="phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        +254 (0)799 768 112 | E: ravtech@gmail.com
      </a>
      <div className="social-media-links">
        <a
          href="https://web.facebook.com/denis.rav.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/ravdesigns254?utm_source=qr&igsh=dXgwa2psdmo1aTlyer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/denis-ishuga-900b45226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
