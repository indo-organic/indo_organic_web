// components/Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'

// Import your images
import image1 from '../assets/dam2.png';
import image2 from '../assets/slide2.jpg';
import image3 from '../assets/dam.png';



const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [image1, image2, image3];

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true, 
    loop:true,
  }

  return (

      <div className="carousel-container">
        <div className="nav_carousel">

        </div>
      <Slider {...settings} slickGoTo={currentSlide}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} />

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


