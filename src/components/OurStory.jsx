
import { Link } from 'react-router-dom'
// import homeResearch from '../assets/homeResearchV.mp4'
import homeResearch from '../assets/aboutVid.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className=' h-[38rem] ' >
        <div className=" relative flex items-center justify-center overflow-hidden bg-whitesmoke z-10">
          <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative" data-aos="zoom-out-up">
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="flex  uppercase text-xl text-black font-sans">About Us</p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-black">
                    Quality is never by {' '}
                    <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-blue-900 ">Chance</span>
                  </h2>
                  <p className="text-base  text-black font-serif ">Welcome to Indo Organics, your trusted partner in sustainable agrochemical solutions. Founded with a vision to revolutionize the agricultural industry, Indo Organics is committed to providing eco-friendly and innovative products that enhance crop yield, protect the environment, and support farmers worldwide.

                  </p>
                  <div className="mt-10 flex flex-col items-center md:flex-row">
                    <Link to='/aboutUs' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-900 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-900 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Know more</span>
                    </Link>


                  </div>
                </div>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2 " data-aos="zoom-in">
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[1rem] rounded-br-none rounded-tl-none ">
                  <video src={homeResearch} loop autoPlay muted></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default OurStory













