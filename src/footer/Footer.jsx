
import '../styles/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_1">
                    <div className="footer_address">
                        <p className='f_a'>Address</p>
                        <p>M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033</p>
                    </div>
                    <div className="footer_email">
                        <p className='f_e'>email</p>
                        <p> info@indoorganics.in</p>
                    </div>
                    <div className="footer_phone">
                        <p className='f_p'>phone</p>
                        <p>+ 011-49059099/45500067</p>
                    </div>
                </div>
                <div className="footer_2">
                    <p className='footer_2_about'> about Us</p>

                    <Link to='/journey' className='footer_links_tag'>Our journey</Link>
                    <Link to='/visionNMission' className='footer_links_tag'>Vision and Mission</Link>
                    <Link to='/BoardOfDirector' className='footer_links_tag'>Board of directors</Link>

                </div>
                <div className="footer_3">
                    <p className='footer_3_quick_links'>Quick Links</p>
                    <Link to='/news' className='footer_links_tag'>news</Link>
                    <Link to='/career' className='footer_links_tag'>career</Link>
                    <Link to='/termsCondition' className='footer_links_tag'>terms $ conditions</Link>
                    <Link to='/privacyPolicy' className='footer_links_tag'>privacy policy</Link>
                    <Link to='/returnPolicy' className='footer_links_tag'>return policy</Link>


                </div>
                <div className="footer_4">
                    <p className='footer_4_our_business'>our business</p>
                    <Link to='/researchDev' className='footer_links_tag'>R & D</Link>
                    <Link to='/Domestic' className='footer_links_tag'>Domestic</Link>
                    <Link to='/International' className='footer_links_tag'>International</Link>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="f_b_l">
                    Copyright ©2016. Indo Organics Pvt. Ltd. All Rights Reserved
                </div>
                <div className="f_b_r">
                    <p>FAQ'S</p>
                </div>

            </div>



        </>
    )
}

export default Footer