import '../styles/IntroVid.scss'
import { Link } from 'react-router-dom'
import video from '../assets/introVideo.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const IntroVid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>


      {/* <div className="relative bg-gradient-to-r flex items-center justify-center from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0 w-[95%]">
   

    <video src={video} autoPlay muted loop className='object-cover object-center w-full h-full'></video>
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Thank you for visiting our website. </h1>
    <p className="text-lg text-gray-300 mb-8">To know more About us you can </p>
    <Link to='/contact' className="bg-blue-400 text-white hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">contact us</Link>
  </div>
</div> */}


      <div className='w-[100%] h-[100vh]  flex items-center justify-center 'data-aos="zoom-in">
        <video src={video} autoPlay muted loop className='object-cover object-center w-[95%] h-full rounded-lg'></video>



      </div>

    </>
  )
}

export default IntroVid
