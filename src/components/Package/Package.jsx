import React from 'react'
import "./Package.css"

const Package = ({packageName, packageDescription, packagePrice, services}) => {
  return (
    <div className='package'>
        <h6 className='packageName'>{packageName}</h6>
        <p>{packageDescription}</p>
        <h6 className='packagePrice'>{packagePrice}</h6>
        <ul className='service-list'>
            {services.map((service, index)=>(
                <li key={index} className='service-item' >
                    <img src="" alt="" />
                    {service}
                </li>
            ))}
        </ul>
        

    </div>
  )
}

export default Package