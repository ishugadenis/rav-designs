
import React from 'react';
import './Herobanner.css'
import { Link } from 'react-router-dom';

const Herobanner = ({title, subtitle, backgroundImage, display, height, color}) => {
 
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

  return (
    <div className='herobanner' style={bannerStyle}>
      <div className="hero-content">
         <h1>{title}</h1>
         <div className="horizontal-line" style={{backgroundColor:"#f16929"}}></div>
         <p>{subtitle}</p>
         <Link className='cta-button button' style={buttonStyle} to="/">Explore Our Work</Link>
      </div>
      
      

    </div>
  )
}

export default Herobanner

// const Herobanner = () => {
//   return (
//     <div className='hero-section'>
//         <div className="hero-content">
//              <h1>Empowering Your Business<br/> with a Strong Brand<br/> Identity</h1>
//              <p>We create innovative logos, brand strategies, and marketing<br/>materials that set your brand apart.</p>
//              <a href="/portfolio" className="cta-button button">Explore Our Work</a>
//         </div>
//     </div>
    
//   )
// }

// export default Herobanner