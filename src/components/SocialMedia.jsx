import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../styles/Socia.scss'

const SocialMedia = () => {
  return (
    <>
    
    
    <div className="social">
            <div className="social_text">
                Connect with us 
            </div>
            <div className="social_p">
            Follow us on social media for the latest news, updates and stories!


            </div>
            <div className="social_icons">

                <a href="https://youtube.com/@indoorganics?si=Rs0ayidzuF5wt_cH"  target="_blank" className="yt">
                    <FaYoutube/>
                </a>
                  
                  
                <a href="" className="linkedin">
                    <FaLinkedin/>
                </a>

                
                <a href="https://www.facebook.com/iolindia/" target="_blank" className="fb">
                    <FaFacebookSquare/>
                </a>


                <a href="" className="twitter">
                    <FaSquareXTwitter/>
                </a>

            </div>




        </div>
    
    </>
  )
}

export default SocialMedia