import React from 'react'
import '../styles/Footer.scss'

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

                    <p>Our Journey</p>
                    <p>Vision and Mission</p>
                    <p>Board of directors</p>

                </div>
                <div className="footer_3">
                    <p className='footer_3_quick_links'>Quick Links</p>
                    <p>News</p>
                    <p>Career</p>
                    <p>terms & conditions</p>
                    <p>privacy policy</p>
                    <p>return policy</p>

                </div>
                <div className="footer_4">
                    <p className='footer_4_our_business'>our business</p>
                    <p>R&D</p>
                    <p>Domestic</p>
                    <p>International</p>

                </div>

            </div>



        </>
    )
}

export default Footer