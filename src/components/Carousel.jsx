// // components/Carousel.js
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../styles/Carousel.scss'

// Import your images
// import image1 from '../assets/dam2.png';
// import image2 from '../assets/slide2.jpg';
// import image3 from '../assets/dam.png';



// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const slides = [image1, image2, image3];

//   const settings = {
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 2000,
//     autoplay: true,
//     loop: true,
//   }

//   return (

//       <div className="carousel-container">
//         <div className="nav_carousel">

//         </div>
//       <Slider {...settings} slickGoTo={currentSlide}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide">
//             <img src={slide} alt={`Slide ${index + 1}`} />

//           </div>
//         ))}
//       </Slider>
//     </div>
    

//   );
// };

// export default Carousel;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="w-[10%%] h-[70vh]">
            <Slider {...settings}>
                <div>
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Image 1" className="h-[70vh] w-[100%] object-cover" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Image 1" className="h-[70vh] w-[100%]  object-cover" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Image 1" className="h-[70vh] w-[100%] object-cover" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Carousel;
