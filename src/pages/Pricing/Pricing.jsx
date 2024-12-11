import React from 'react'
import './Pricing.css'
import HerobannerImage from '../../assets/herobanner.jpg'
import Herobanner from '../../components/Herobanner/Herobanner'
import packages from '../../constants/data.js'


const Pricing = () => {



console.log(packages[0].pay);





  return (
    <div className='pricing'>
       <Herobanner
      title="Choose Your Pricing Plan"
      backgroundImage={HerobannerImage}
      height='40vh'
      display="none"
      />
      <section>
      <ul className = 'section'>
        {packages.map((item, index) => (
          <li className= 'section-package' key={index}> 
          <div className="section-package-title">
          <h4>{item.title}</h4>
          </div>
            <h5 className='section-package-subtitle'>{item.subTitle}</h5>
            <h4 className='section-package-pay'>{item.pay}</h4>
            <ul className='services'>
              {item.service.map((service, index)=> (
                <li key={index}>{service}
                <hr></hr>
                </li>

              ))}
            </ul>
          </li>
        ))}
      </ul>
      </section>
      
    </div>

    
  )
}

export default Pricing