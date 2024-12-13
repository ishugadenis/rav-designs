import React from 'react'
import './Pricing.css'
import heroBg from '../../assets/aboutus-hero.jpg'
import Herobanner from '../../components/Herobanner/Herobanner'
import data from '../../constants/data.js'


const Pricing = () => {


  return (
    <div className='pricing'>
       <Herobanner
      title="Choose Your Pricing Plan"
      backgroundImage={heroBg}
      height='40vh'
      display="none"
      overlay='rgba(232, 232, 232, 0.64)'
      />
      <section >
      <div className = 'section'>
        {data.pricing.map((item, index) => (
          <li className= 'section-package' key={index}> 
          <div className="section-package-title">
          <h5>{item.title}</h5>
          </div>
            {/* <h5 className='section-package-subtitle'>{item.subTitle}</h5> */}
            <h5 className='section-package-pay'>{item.pay}</h5>
            <ul className='services'>
              {item.service.map((service, index)=> (
                <li key={index}>{service}
                <hr></hr>
                </li>

              ))}
            </ul>
          </li>
        ))}
      </div>
      </section>
      
    </div>

    
  )
}

export default Pricing