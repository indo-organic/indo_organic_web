// components/Carousel.js
import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'

// Import your images
import image1 from '../assets/game1.jpg';
import image2 from '../assets/game2.jpg';
import image3 from '../assets/game3.jpg';



const Carousel = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // const slides = [image1, image2, image3];

  // const settings = {
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 2000,
  //   autoplay: true,
  //   loop: true,
  // }

  return (
    <>




      {/* <div className="carousel-container">
        <div className="nav_carousel">

        </div>
        <Slider {...settings} slickGoTo={currentSlide}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />

            </div>
          ))}
        </Slider>
      </div> */}






      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="relative z-30 p-5 text-6xl font-bold text-white bg-opacity-50 rounded-xl uppercase">
        Welcome to Indo-<span className='text-[4rem] '>Organics</span>
      </div>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
       
      </video>
    </header>
    </>




  );
};

export default Carousel;




