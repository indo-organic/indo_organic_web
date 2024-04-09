import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import '../styles/Socia.scss'

const SocialMedia = () => {
    return (
        <>
           
        
            <div className="fixed top-[40%] right-0 h-full  p-4 z-50 ">
                <ul className="flex flex-col space-y-4 text-4xl">
                    <li>
                        <a href="https://youtube.com/@indoorganics?si=Rs0ayidzuF5wt_cH" target="_blank" className="hover:text-gray-900 text-red-700">
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/company/indo-organics-pvt-ltd_find_us_here/" target="_blank" className="hover:text-gray-900 text-blue-600">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/iolindia/" target="_blank" className="hover:text-gray-900 text-blue-600">
                            <FaFacebookSquare />
                        </a>
                    </li>
                    {/* Add more social media icons as needed */}
                    <li>
                    <a href="mailto:info@indoorganics.in" target="_blank" className="hover:text-gray-900 text-green-500">
                            <MdOutlineMail />
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default SocialMedia;


