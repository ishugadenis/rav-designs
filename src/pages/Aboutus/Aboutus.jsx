import React from 'react'
import heroBg from '../../assets/aboutus-hero.jpg'
import Bulb from '../../constants/images'
import './Aboutus.css'
import Herobanner from '../../components/Herobanner/Herobanner'
import Ourteam from '../../components/Ourteam/Ourteam'


const Aboutus = () => {
  return (
    <div className='about'>
      <Herobanner
      title="Who We Are"
      backgroundImage={heroBg}
      height='40vh'
      display="none"
      subtitle="We lead with a commitment to quality and consistency across our global network, bringing a passion for 
      client success and a purpose to serve and improve the communities in which companies operate."
      overlay='rgba(232, 232, 232, 0.64)'
      />
      <section className="about-explanation">
        <div className="about-explanation-img"></div>
         <div className="about-explanation-words">
          <p>Ravtech Designs is a dedicated Graphic Design, Branding, Web Design, and Development studio based in Kenya, East Africa. It is focused on servicing businesses from Kenya and beyond. Ravtech Designs provides stunning, memorable brands and beautifully intuitive websites that are not only mobile-friendly but that rank on major search engines.</p>
          <p>Whilst being based in Kenya and focused on local clients, we service clients in every corner of the globe. Even though many of our long-term returning clients are thousands of kilometers away, spread out across the world, we are willing to travel when it’s needed to start and deliver a project. With careful planning and good, open communication, working remotely (with the use of email, Skype, and phone calls) runs the same as any project where businesses are literally around the corner.</p>
         </div>
      </section>
      <section className="about-craftsmen">
        <div className="about-craftsmen-explanation">
          <img src={Bulb.bulb} alt="Bulb" />
          <h6>We are artisans and craftsmen of beautiful<br/> brands and bespoke solutions.</h6>
          <div className="horizontal-line"></div>
          <p>We get to understand the needs of our clients so that we can tailor solutions to their exact needs, 
            and deliver high-value results that transform their businesses.</p>
        </div>
        <div className="about-craftsmen-img"></div>
      </section>
      <section className="philosophy">
        <div className="philosophy-title">
          <h6>Our Philosopy</h6>
        </div>
        <div className="philosophy-all">
          <div className="philosophy-container">
            <h6>Relatability</h6>
            <div className="horizontal-line"></div>
            <p>To relate is to understand, make connections, and identify with. We strive to understand our clients 
              unique stories and visions so that we can successfully relate that to their customers, staff, and key stakeholders.</p>
          </div>
          <div className="philosophy-container">
            <h6>Simplicity</h6>
            <div className="horizontal-line"></div>
            <p>To make something simple is not always easy, as it requires a complete understanding. We endeavour to combine our experience 
              and creativity to produce simple, seamless and enjoyable experiences.</p>
          </div>
          <div className="philosophy-container">
            <h6>Your Story</h6>
            <div className="horizontal-line"></div>
            <p>Every story is unique, and we’re interested in understanding and telling yours. We combine wisdom and 
              technology, experience and creativity, in order to realize your vision and tell your unique story.</p>
          </div>
        </div>
      </section>
      <Ourteam />
    </div>
  )
}

export default Aboutus