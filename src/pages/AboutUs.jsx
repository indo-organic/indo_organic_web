
import aboutImg4 from '../AboutImg/about4.jpg'
import AboutImg from '../AboutImg/aboutImg3.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>

      

      <div className="flex  gap-4 w-[100%] h-[15rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
        style={{ backgroundImage: `url(${AboutImg})` }} data-aos="zoom-in">

        <div className=" flex flex-col items-center justify-center ">
          <h2 className="text-white text-3xl font-bold uppercase">about</h2>
          <h2 className="flex gap-4 text-white py-2">
            <Link to='/' className="hover:text-white">Home  &#9702;</Link>
            
            <p>Our story &#9702;</p>
          </h2>

        </div>

      </div>



      <div className='flex  justify-center w-[100%] py-10    text-black'>
        <div className="w-[30%] bg-green-100  flex items-center justify-center " data-aos="fade-right">
          <img src={aboutImg4} alt="" />
        </div>
        <div className='w-[60%] bg-transparent'>
          <div className='p-4 py-[3rem]' data-aos="fade-down-left">
            <p className='py-2 text-3xl text-green-500 font-bold'>WHO WE ARE ?
            </p>
            <p className='py-1 ' >&#9702; Established in 2010 in association with Indogulf Cropsciences PTY, LTD, Australia.</p>
            <p className='pt-3' >&#9702; One of the leading players in the Indian crop industry. We are pioneers in Biostimulants and safe agricultural inputs</p>
            <p className='pt-3  ' >&#9702; Focuses on manufacturing and marketing of Green Technology based Plant health and Nutritional Products.</p>
            <p className='pt-3 ' >&#9702; Has introduced a mix of organic products range including plant nutrients, Biostimulants, crop boosters and
              energizers.</p>
            <p className='pt-3 ' >&#9702; Has developed Product matrix as per the stage of the crop focusing on the farmers to get a better yield of a quality
              product.</p>

          </div>

          <div className='p-4 py-[3rem]' data-aos="fade-left">
            <p className='py-2 text-3xl text-green-500 font-bold'>PHILOSOPHY
            </p>
            <p className='text-l  font-bold'>Key- A Symbol of Our Promise</p>
            <p className='py-1 '>&#9702; Our mascot is small Key which we believe is Key to Success</p>
            <p className='pt-3'>&#9702; For us Key is nothing but attitude, which is embedded in all its positivity among our team members and our way of doing business</p>
            <p className='pt-3 ' >&#9702; The attitude to create possibilities of success and growth for all associated with our company.
            </p>
            <p className='pt-3 ' >&#9702; This is the Key to growth which will be the differentiation.</p>
          </div>
        </div>
      </div>

     


    </>
  )
}

export default AboutUs


