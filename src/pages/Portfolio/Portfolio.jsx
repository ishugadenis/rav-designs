import React from 'react';
import './Portfolio.css';
import Herobanner from '../../components/Herobanner/Herobanner';


const Portfolio = () => {
  return (
    <div>
       <Herobanner
      title="Case Studies"
      // backgroundImage={HerobannerImage}
      height='40vh'
      display="none"
      subtitle="At Ovin Group, we help businesses, big and small achieve success with their online marketing by creating logos and making websites that are easy for people to do business with and by making them easy to find. 
      Based in Eldoret, we provide design solutions for the entire region of Kenya and beyond."
      />
      <section className='portfolio'>
        <h3>Some Of Our Recent Projects</h3>
        <div className="web-portfolio">
          <div className="web-portfolio-header">
            <hr />
            <i class="bi bi-briefcase-fill"></i>
            <hr />
          </div>
          <div className="web-portfolio-title">
            <h4>Web Design & Development</h4>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Portfolio