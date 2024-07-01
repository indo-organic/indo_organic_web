
import { CiLocationOn } from "react-icons/ci";
import { MdCallEnd } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

// import contactImg from '../productI/mgicon/contactImg.jpg'



const Contact = () => {
  return (
    <>

      {/* `url(${contactImg})` */}
      <div className="flex  gap-4 w-[100%] h-[20rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
        style={{ backgroundImage: 'url("https://ascend.com.sa/wp-content/uploads/2023/01/contact-us.webp")' }}>

        <div className=" flex flex-col items-center justify-center ">
          <h2 className="text-white text-3xl font-bold uppercase">contact us</h2>
          <h2 className="flex gap-4 text-white py-2">
            <Link to='/' className="hover:text-white">Home  &#9702;</Link>
            <p>Company  &#9702;</p>
            <p>Location  &#9702;</p>
          </h2>

        </div>

      </div>

      <div className="lg:flex md:text-center md:h-[90vh]  gap-4 w-[100%] lg:h-[50vh] bg-cover bg-fixed bg-center  cursor-pointer justify-center items-center m-auto"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background-theme_23-2148827269.jpg)' }}>

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-blue-900 hover:text-white rounded-lg ">
          <div className="flex flex-col gap-3 items-center ">
            <CiLocationOn className="text-6xl " />
            <p className="text-xl uppercase">address</p>
          </div>

          <div>
            <p className="p-4 text-xl ">
              M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
            </p>
          </div>

        </div>

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-blue-900 hover:text-white rounded-lg">
          <div className="flex flex-col gap-3 items-center ">
            <MdCallEnd
              className="text-6xl " />
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

        <div className="font-sans w-[30%] flex flex-col items-center text-center  justify-center h-[40vh] border-4 border-black  hover:bg-blue-900 hover:text-white rounded-lg ">
          <div className="flex flex-col gap-3 items-center ">
            <AiOutlineMail
              className="text-6xl " />
            <p className="text-xl uppercase">email</p>
          </div>
          <div>
            <p className="p-4 text-xl ">
              info@indoorganics.in
            </p>
          </div>

        </div>

      </div>



      {/* <div className="p-4 sm:p-8 md:p-16 mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <a href=""
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 text-center hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Address
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
              </span>
            </a>
            <a href=""
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 text-center hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Telephone
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                tel: + 011-49059099/  45500067
              </span>
            </a>
            <a href=""
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 text-center hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Email
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                info@indoorganics.in
              </span>
            </a>

          </div>
        </div>
      </div> */}




      {/* <div className="bg-gray-50">
<div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
  <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <img className="w-28 h-24 mx-auto object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3f2cma8oDVX5BYhTbdeMbQ81F53RWU1BYw&s" alt="" />
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
        <h3 className="text-sm font-medium text-gray-900">Address</h3>
        <p className="mt-2 text-sm text-gray-500">  M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033</p>
      </div>
    </div>

    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <img className="w-28 h-24 mx-auto object-contain" src="https://www.zdnet.com/a/img/resize/8c5bfbb2688b9fa20d162ffee95af9a22af19505/2023/03/02/5175d5f8-6603-4675-a817-c50810dd5de7/2c15b8d1-37b2-46a5-9992-2bc78db6a9f0-1-201-a.jpg?auto=webp&width=1280" alt="" />
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
        <h3 className="text-sm font-medium text-gray-900">contact us</h3>
        <p className="mt-2 text-sm text-gray-500"> tel: + 011-49059099/ 45500067 </p>
      </div>
    </div>

    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <img className="w-28 h-24 mx-auto object-contain" src="https://canarymail.io/blog/wp-content/uploads/2023/09/apple-vs-gmail.jpg" alt="" />
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
        <h3 className="text-sm font-medium text-gray-900">Email</h3>
        <p className="mt-2 text-sm text-gray-500"> info@indoorganics.in</p>
      </div>
    </div>
  </div>
</div>
</div> */}



      <iframe className='w-[100%] h-[60vh] text-center m-auto  rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin" ></iframe>


    </>
  )
}

export default Contact









