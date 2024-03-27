import { Link } from "react-router-dom"

import rukkaImg from '../prod_img/rukka.jpg'
import alaskaImg from '../prod_img/alaskaImg.jpg'



import indoPrimeImg from '../prod_img/indoPrimeImg.jpg'
import tangoPlusImg from '../prod_img/tangoplusImg.jpg'
import sulfieImg from '../prod_img/sulfieImg.jpg'



import protoImg from '../prod_img/protoImg.jpg'
import emoImg from '../prod_img/emo10Img.jpg'
import timeupImg from '../prod_img/timeupImg.jpg'
const Agrochemical = () => {
  return (
    < >
          <div classNameName="bg-yellow-100">
      <div classNameName="agrochemical text-3xl text-center  uppercase bg-green-300 p-4 ">
        agrochemical
      </div>

      <p classNameName="text-3xl  capitalize m-auto p-3  text-red-700">Insecticide</p>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


        <div className="w-72 h-90 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/rukka'>
            <img src={rukkaImg}
              alt="Product" className="w-[84%] mt-3 mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Rukka</p>
            </div>
          </Link>
        </div>



        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/alaska'>
            <img src={alaskaImg}
              alt="Product" className="w-[84%] mt-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Alaska</p>
            </div>
          </Link>
        </div>

        <div className="w-72 h-90 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/cyphones'>
            <img src={timeupImg}
              alt="Product" className="w-[89%] mt-3 mb-4 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Cyphones</p>
            </div>
          </Link>
        </div>


        <div classNameName="flex justify-center text-center  w-full">

          <Link to='/insecticide' classNameName="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
        </div>


      </section>

      <p classNameName="text-2xl p-3 capitalize m-auto">fungicide</p>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


        <div className="w-72 h-90 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/IndoPrime'>
            <img src={indoPrimeImg}
              alt="Product" className="w-[95%] mt-2 mb-5 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Generic</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Indo-prime</p>
            </div>
          </Link>
        </div>


        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/tangoPlus'>
            <img src={tangoPlusImg}
              alt="Product" className="w-[40%] mt-2  mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72  bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Generic</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Tango-plus</p>
            </div>
          </Link>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/sulphie'>
            <img src={sulfieImg}
              alt="Product" className="w-[90%] mt-2 mb-4 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Generic</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Sulphie</p>
            </div>
          </Link>
        </div>
        <div classNameName="flex justify-center text-center  w-full">

          <Link to='/fungicide' classNameName="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
        </div>


      </section>

      <p classNameName="text-2xl p-3 capitalize m-auto">Herbicide</p>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/proto50'>
            <img src={protoImg}
              alt="Product" className="w-[38%] mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400" >
              <span className="text-gray-800 mr-3 uppercase text-xs">Weedicide</span>
              <p className="text-lg font-bold text-black truncate block capitalize">PROTO-50</p>
            </div>
          </Link>
        </div>



        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/proto50'>
            <img src={emoImg}
              alt="Product" className="w-[81%] mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Weedicide</span>
              <p className="text-lg font-bold text-black truncate block capitalize">EMO-10</p>
            </div>
          </Link>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/proto50'>
            <img src={timeupImg}
              alt="Product" className="w-[83%] mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Weedicide</span>
              <p className="text-lg font-bold text-black truncate block capitalize">TIme-UP</p>
            </div>
          </Link>
        </div>


        <div classNameName="flex justify-center text-center  w-full">

          <Link to='/herbicide' classNameName="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
        </div>


      </section>

      </div>


    </>
  )
}

export default Agrochemical