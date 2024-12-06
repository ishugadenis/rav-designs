import React from 'react'
import "./Ourteam.css"

const Ourteam = () => {
  return (
    <div className='ourteam'>
       <div className="ourteam-title">
         <h6>Our Team</h6>
       </div>
       <div className="horizontal-line"></div>
       <p>Our team is your team. When your mission is to be better, faster and smarter, you need the best people driving your vision forward.</p>
       <div className="ourteam-container">
          <div className="ourteam-individual-container">
            <div className="circle-container">
                <img src="" alt="" className='circle-image' />  
            </div>
            <h6>Mr. Denis Ishuga</h6>
            <p>Cheif Executive Officer</p>
          </div>
          <div className="ourteam-individual-container">
            <div className="circle-container">
                <img src="" alt="" className='circle-image' />
            </div>
            <h6>Mr. Tevin Ishuga</h6>
            <p>Graphic Designer</p>
          </div>
          <div className="ourteam-individual-container">
            <div className="circle-container">
                <img src="" alt="" className='circle-image' />
            </div>
            <h6>Mr. Bright Kalwale</h6>
            <p>Head Marketing Team</p>
          </div>
       </div>
       
    </div>
  )
}

export default Ourteam