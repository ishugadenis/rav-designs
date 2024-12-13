
import React from 'react';
import './Herobanner.css'
import { Link } from 'react-router-dom';

const Herobanner = ({title, subtitle, backgroundImage, display, height, color, overlay}) => {
 
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:`${height}`,
    color:`${color}`
    
  };

  const buttonStyle ={
    display: `${display}`
  }

  const bannerOverlay ={
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%", // Adjust the height of the overlay
    background: `${overlay}` //"rgba(255, 255, 255, 0.6)",  White with 60% opacity
  }

  return (
    <div className='herobanner' style={bannerStyle}>
      <div className="herobanner-overlay" style={bannerOverlay}>
      <div className="hero-content">
         <h1>{title}</h1>
         <div className="horizontal-line" style={{backgroundColor:"#f16929"}}></div>
         <p>{subtitle}</p>
         <Link className='cta-button button' style={buttonStyle} to="/portfolio">Explore Our Work</Link>
      </div>
      </div>
      

    </div>
  )
}

export default Herobanner