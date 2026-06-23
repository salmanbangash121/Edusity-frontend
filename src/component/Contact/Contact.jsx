import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States</li>
        </ul>

      </div>
      <div className='contact-col'>
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="text" name='name' placeholder='Enter Your Mobile Number' required />
          <label>Your Email</label>
          <input type="text" name='name' placeholder='Enter Your Email id' required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
        </form>
        <button type='submit' className='btn dark-btn'>Submit Now</button>
      </div>
      
    </div>
    
  )
}

export default Contact
