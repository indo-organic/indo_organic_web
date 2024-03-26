// components/Carousel.js
import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'

// Import your images
import image1 from '../assets/dam2.png';
import image2 from '../assets/slide2.jpg';
import image3 from '../assets/dam.png';



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
 <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    
    </>

    //   <div className="carousel-container">
    //     <div className="nav_carousel">

    //     </div>
    //   <Slider {...settings} slickGoTo={currentSlide}>
    //     {slides.map((slide, index) => (
    //       <div key={index} className="slide">
    //         <img src={slide} alt={`Slide ${index + 1}`} />

    //       </div>
    //     ))}
    //   </Slider>
    // </div>



    
    

  );
};

export default Carousel;




