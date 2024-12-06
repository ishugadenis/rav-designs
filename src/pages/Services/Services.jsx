import React from 'react'
import HerobannerImage from '../../assets/herobanner.jpg'
import './Services.css'
import Herobanner from '../../components/Herobanner/Herobanner'

const Services = () => {
  return (
    <div>
      <Herobanner 
        title="Which Services do you need?"
        backgroundImage={HerobannerImage}
        height='40vh'
        display="none"
        subtitle="We take pride in the services we offer and do everything ourselves, nothing is ever secretly outsourced or developed overseas (which is all too common these days). We do work with local service providers, 
        such as copywriters and photographers, who compliment our business to provide a total package."
        />
    </div>
  )
}

export default Services