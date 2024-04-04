import React from 'react'
import { Link } from "react-router-dom"

import rukkaImg from '../product_image/rukka.png'
import alaskaImg from '../product_image/alaska.png'
import indoxamImg from '../product_image/indoxam.png'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AgroCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
    return (
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-500 rounded-lg max-w-xs shadow-lg group">
      
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
          </div>
          <img className="relative w-40 h-60" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">{category}</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">{name}</span>
            <span className=" bg-white rounded-full text-green-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
          </div>
          <span className="opacity-75 -mb-1">{sciName}</span>
        </div>
      </div>
    );
  };
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
    <div className="bg-gray-200 my-12">

   
    
    <p className="text-3xl  uppercase  text-center  p-3   ">THE BEST-SELLERS</p>
      <div className="p-1 flex flex-wrap items-center justify-center">
        <Link to='/rukka'>
          <AgroCard category="Insecticide" name="RUKKA" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
            imageSrc={rukkaImg}
            imageAlt="RUKKA" />
        </Link>
        <Link to='/alaska'>
          <AgroCard category="Insecticide" name="ALASKA" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={alaskaImg}
            imageAlt="alaska" />
        </Link>
        <Link to='/indoxam'>
          <AgroCard category="Insecticide" name="INDOXAM" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={indoxamImg}
            imageAlt="indoxam" />
        </Link>

      </div>
      <div className="w-ful text-center p-4 ">
        <Link to='/agrochemical' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
          See more
        </Link>

      </div>
      </div>



      <div className="mx-auto max-w-7xl bg-black flex flex-col justify-center pt-20 pb-20">
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[70vh]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3-2OfHGn2z7iPiDyMD9Kxcmm09tZn7L4t8PzTZUdCQ&s" alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold">Card 1</h2>
              <p className="text-gray-700">Content of card 1 goes here.</p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[70vh]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3-2OfHGn2z7iPiDyMD9Kxcmm09tZn7L4t8PzTZUdCQ&s" alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold">Card 2</h2>
              <p className="text-gray-700">Content of card 1 goes here.</p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-[70vh]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3-2OfHGn2z7iPiDyMD9Kxcmm09tZn7L4t8PzTZUdCQ&s" alt="Card 1" className=" h-[40vh] object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold">Card 3</h2>
              <p className="text-gray-700">Content of card 1 goes here.</p>
            </div>
          </div>
        </Slider>
      </div>


      
    </>
  )
}

export default BestSeller

