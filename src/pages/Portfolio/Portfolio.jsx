import React from 'react';
import './Portfolio.css';
import Herobanner from '../../components/Herobanner/Herobanner';
import Webportfolio from '../../components/Webportfolio/Webportfolio';
import Designportfolio from '../../components/Designportfolio/Designportfolio';
import heroBg from '../../assets/contact-hero.jpg'


const Portfolio = () => {
  return (
    <div>
       <Herobanner
      title="Case Studies"
      backgroundImage={heroBg}
      height='40vh'
      display="none"
      subtitle="At Ravtech Designs, we help businesses big and small achieve success with their online marketing. We specialize in creating logos and building websites that make it easy for people to engage and do business with you, while ensuring your brand is easy to find online.
      Based in Nairobi, we proudly provide design solutions for the entire region of Kenya and beyond"
      />
      <section className='portfolio'>
        <h3>Some Of Our Recent Projects</h3>
        <div className="web-portfolio">
          <div className="web-portfolio-header">
            <hr />
            <i className="bi bi-briefcase-fill"></i>
            <hr />
          </div>
          <div className="web-portfolio-title">
            <h4>Web Design & Development</h4>
          </div>
          <Webportfolio />
          
        </div>
        <div className="web-portfolio">
          <div className="web-portfolio-header">
            <hr />
            <i className="bi bi-briefcase-fill"></i>
            <hr />
          </div>
          <div className="web-portfolio-title">
            <h4>Graphic Design</h4>
          </div>
          <Designportfolio />
        </div>
      </section>
    </div>
  )
}

export default Portfolio