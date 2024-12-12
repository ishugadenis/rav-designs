import React from 'react'
import './Designportfolio.css'
import data from '../../constants/data.js'

const Designportfolio = () => {
  return (
    <div className='design-portfolio'>
     {
      data.graphics.map((graphic, index)=>(
        <div key={index} className='graphic'>
          <img src={graphic.image} alt="" />
        </div>
      ))
     }
    </div>
  )
}

export default Designportfolio