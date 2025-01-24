import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.css"; // Import the CSS file

const PageNotFound = () => {
  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p className="message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
