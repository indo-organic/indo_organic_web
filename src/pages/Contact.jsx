
import { CiLocationOn } from "react-icons/ci";
import { MdCallEnd } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import contactImg from '../productImgicon/contactImg.jpg'



const Contact = () => {
  return (
    <>
      <div className="flex  gap-4 w-[100%] h-[25rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
        style={{ backgroundImage: `url(${contactImg})` }}>

        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h2 className="text-white text-3xl font-bold uppercase">contact us</h2>
          <h2 className="flex gap-4 text-white py-2">
            <Link to='/' className="hover:text-white">Home  &#9702;</Link>
            <p>Company  &#9702;</p>
            <p>Location  &#9702;</p>
          </h2>

        </div>

      </div>

      <div className="lg:flex md:text-center md:h-[90vh]  gap-4 w-[100%] lg:h-[50vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background-theme_23-2148827269.jpg)' }}>

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-gray-200 ">
          <div className="flex flex-col gap-3 items-center ">
            <CiLocationOn className="text-6xl text-green-500" />
            <p className="text-xl uppercase">address</p>
          </div>

          <div>
            <p className="p-4 text-xl ">
              M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
            </p>
          </div>

        </div>

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-gray-200 ">
          <div className="flex flex-col gap-3 items-center ">
            <MdCallEnd
              className="text-6xl text-green-500" />
            <p className="text-xl uppercase">contact</p>
          </div>

          <div>
            <p className="pt-4 text-xl ">
              tel: + 011-49059099/
            </p>
            <p className="px-4 text-xl ">
              45500067
            </p>
          </div>

        </div>

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-gray-200 ">
          <div className="flex flex-col gap-3 items-center ">
            <AiOutlineMail
              className="text-6xl text-green-500" />
            <p className="text-xl uppercase">email</p>
          </div>

          <div>
            <p className="p-4 text-xl ">
              info@indoorganics.in
            </p>
          </div>

        </div>

      </div>

     

      <iframe className='w-full h-[80vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin" ></iframe>


    </>
  )
}

export default Contact