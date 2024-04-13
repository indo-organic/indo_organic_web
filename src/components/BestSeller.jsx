import React from 'react'
import { Link } from "react-router-dom"

import helperLImg from '../product_image/helperL.png'
import indomagicImg from '../product_image/indomagic.png'
import fungi7Img from '../product_image/fungi7.png'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>


      <div className="flex flex-col w-[100%] py-10 bg-cover bg-fixed bg-center justify-center items-center m-auto"
          style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xS5cK7pJcbDhl-SRS1znNA77u2KpF5EfF2Qxr0jAxw&s)" }}>

        <div className="relative mx-auto  w-[70%] mb-1">
          <img className="h-16 w-full object-cover rounded-md object-bottom " src="https://i.pinimg.com/736x/d9/5e/09/d95e097a046d1971177078b6e40dab28.jpg" alt="Random image" />
          <div className="absolute inset-0  opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  ">"
            <h2 className="text-white text-3xl font-bold m-auto ">BEST SELLERS</h2>
          </div>
        </div>
        <div className="mx-auto max-w-7xl  flex flex-col justify-center pt-10 pb-8 ">
          <Slider {...settings}>
            <Link to='/indomagic' className="px-4">
              <div className="bg-green-500 p-4 rounded-lg shadow-md h-[60vh] text-center">
                <img src={indomagicImg} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
                <h2 className="text-lg font-semibold">INDO-MAGIC</h2>
                <p className="text-gray-700">Phyto-Extruded Plant Augmenter and Yield Enhancer</p>
              </div>
            </Link>
            <Link to='/HelperL' className="px-4">
              <div className="bg-green-200 p-4 rounded-lg shadow-md h-[60vh] text-center">
                <img src={helperLImg} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
                <h2 className="text-lg font-semibold">HELPER-L</h2>
                <p className="text-gray-700">Premium Sargassum Enriched Liquid Energizer</p>
              </div>
            </Link>
            <Link to='/fungi7' className="px-4">
              <div className="bg-green-200 p-4 rounded-lg shadow-md h-[60vh] text-center">
                <img src={fungi7Img} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
                <h2 className="text-lg font-semibold">FUNGI-7</h2>
                <p className="text-gray-700">Fungal Growth Inhibitor</p>
              </div>
            </Link>
          </Slider>
        </div>
      



      </div>




      {/* <div className="w-full h-[50vh] bg-slate-300 flex items-center  justify-center">

        <div className=" bg-yellow-100 flex w-[80%] items-center justify-evenly">
          <div className="w-64 h-64 border border-gray-300  bg-white rounded-full  flex items-center flex-col justify-center">
            <img src={indomagicImg} alt="" className='w-[40%] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' />
            <p>Agrochemical</p>
          </div>

          <div className="w-64 h-64 border border-gray-300  bg-white rounded-full  flex items-center flex-col justify-center">
            <img src={indomagicImg} alt="" className='w-[40%] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' />
            <p>Biostimulunts</p>
          </div>


          <div className="w-64 h-64 border border-gray-300  bg-white rounded-full  flex items-center flex-col justify-center">
            <img src={indomagicImg} alt="" className='w-[40%] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' />
            <p>iol specialist</p>
          </div>


        </div>

      </div> */}


    </>
  )
}

export default BestSeller

