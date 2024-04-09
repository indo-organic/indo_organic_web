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
   

  
      <div className="relative mx-auto  w-[70%] mt-5 mb-1">
          <img className="h-16 w-full object-cover rounded-md object-bottom " src="https://www.thespruce.com/thmb/P_RO3BhitUHl1tIsb9EuIsxl6CM=/3000x2000/filters:no_upscale()/pyrethrin-insecticide-definition-1902891_Hero1-386797349e94413b8133a93e8008a582.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  ">"
            <h2 className="text-white text-3xl font-bold m-auto ">BEST SELLERS</h2>
          </div>
        </div>
          

      <div className="mx-auto max-w-7xl  flex flex-col justify-center pt-1 pb-8">
        <Slider {...settings}>
          <Link to='/indomagic' className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[60vh] text-center">
              <img src={indomagicImg} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
              <h2 className="text-lg font-semibold">INDO-MAGIC</h2>
              <p className="text-gray-700">Phyto-Extruded Plant Augmenter and Yield Enhancer</p>
            </div>
          </Link>
          <Link to='/HelperL' className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[60vh] text-center">
              <img src={helperLImg} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
              <h2 className="text-lg font-semibold">HELPER-L</h2>
              <p className="text-gray-700">Premium Sargassum Enriched Liquid Energizer</p>
            </div>
          </Link>
          <Link to='/fungi7' className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[60vh] text-center">
              <img src={fungi7Img} alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg m-auto" />
              <h2 className="text-lg font-semibold">FUNGI-7</h2>
              <p className="text-gray-700">Fungal Growth Inhibitor</p>
            </div>
          </Link>
        </Slider>
      </div>
      <div className="relative mx-auto  mb-10 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/agrochemical' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        <hr className="w-[80%] h-[1vh] bg-black  m-auto " />

        
    </>
  )
}

export default BestSeller

