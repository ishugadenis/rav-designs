import React from 'react'
import './Homebody.css'
import heroBg from '../../assets/home-hero.jpg'
import bulb from '../../assets/bulb.png'
import monitor from '../../assets/monitor.png'
import pen from '../../assets/pen-tool.png'
import model from '../../assets/model.jpg'
import Herobanner from '../Herobanner/Herobanner'


const Homebody = () => {
  return (
    <div className='homebody'>
        <Herobanner 
        title="Empowering Your Business with a Strong Brand Identity"
        backgroundImage={heroBg}
        // height='80vh'
        display="auto"
        subtitle="We create innovative logos, brand strategies, and marketing materials that set your brand apart."
        color='white'
        />
        <section className="homebody-services">
            <div className="homebody-services-container">
                <div className="homebody-services-title">
                   <img src={monitor} alt="" />
                   <h6>Website Design & Development</h6>
                </div>
                <p>Your website is one of the first experiences your audience
                     has with your business. Make sure that the experience is a
                      great one by creating a meaningful
                     and user-friendly reflection of your brand 
                     that assists in achieving your online goals.</p>
            </div>
            <div className="homebody-services-container">
               <div className="homebody-services-title">
                   <img src={pen} alt="" />
                   <h6>Graphics Design & Logo Creation</h6>
                </div>
               <p>Graphic design is a powerful and complicated communication tool. We see all design as a chance to market your brand and deliver a clear message. 
                Great design is about being effective, and looking beautiful is just a bonus</p>
            </div>
            <div className="homebody-services-container">
                <div className="homebody-services-title">
                   <img src={bulb} alt="" />
                   <h6>Brand Identity & Architecture</h6>
                </div>
               <p>Your brand is the voice of your business that delivers a strategic 
                message directly to your audience. We understand your brand isn’t just a logo or another small part of your marketing, 
                it’s what sets you apart from any of your competitors.</p>
            </div>
            
        
        </section>
        <section className="homebody-signal">
            <div className="home-signal-explanation">
                    <h6>Our complementary skill sets strike a balance between structure and creativity.</h6>
                    <p>Our multi award-winning graphic design company is dedicated to providing exceptional design services and has been recognized for our creative excellence by industry experts. We love to work with business’s who have problems that we can solve. 
                        We’ve been branding businesses from our local creative studio in Kenya and we can’t wait to work with you</p>
                    <p>Find out how we can help you achieve the goals, get in touch today.</p>  
            </div>
            <div className="homebodysignal-img"></div>  
        </section>
    </div>
  )
}

export default Homebody