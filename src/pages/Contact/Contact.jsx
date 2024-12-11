import React from 'react'
import './Contact.css'
import Herobanner from '../../components/Herobanner/Herobanner'


const Contact = () => {

  return (
    <div className='contact'>
       <Herobanner
      title="Talk To Us:"
      // backgroundImage={HerobannerImage}
      height='40vh'
      display="none"
      subtitle="Talk To Us: Use the form below when your ready to talk about your next project."
      />
      <section>
        <div className="contact-section">
          <div className="contact-form">
              <input className='input name-input' type="text"  placeholder='Your name'/>
              <input className='input email-input' type="email"  placeholder='Email'/>
              <input type="text" className='input message-input'  placeholder='Type your message'/>
          </div>
         
        <div className="contact-map">
          <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1994.9069783903683!2d34.72178653838727!3d0.08473868218737951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDUnMDUuMSJOIDM0wrA0MycyMy4xIkU!5e0!3m2!1sen!2ske!4v1733937063671!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                // nonce="e8A0O_wD7lw47Ed5rHMrug"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Contact