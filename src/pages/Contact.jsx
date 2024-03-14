
import '../styles/Contact.scss'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_text">
          <div className="contact_p">
            Contact us
          </div>
        </div>
        <div className="contact-us-container">
          <div className="contact_address">
            <FaLocationDot className='contact_icon' />
            <p>M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033</p>
          </div>
          <div className="contact_phone">
            <FaPhone  className='contact_icon'/>
            <p> + 011-49059099/45500067</p>
          </div>
          <div className="contact_email">
            <MdEmail  className='contact_icon' />
            <p>info@indoorganics.in</p>
          </div>


        </div>

        <div className="contact_bottom">
          <div className="contact_b_map">
            <iframe className='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin"

              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>


          </div>

        </div>
      </div>






    </>
  )
}

export default Contact