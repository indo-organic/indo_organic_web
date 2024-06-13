
import caro1 from '../AboutImg/caro1.png'
import caro2 from '../AboutImg/caro2.png'
import caro3 from '../AboutImg/caro3.png'


import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators className='w-full '>

      <MDBCarouselItem itemId={1}>
        <img src={caro1} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={caro2} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={caro3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

    </MDBCarousel>

  )
}

export default Carousel
















// Carousel.js
// import React, { useState, useEffect } from 'react';

// const Carousel = ({ images, autoSlide = true, autoSlideInterval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(nextSlide, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, [currentIndex, autoSlide, autoSlideInterval]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <img key={index} src={image} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
//       >
//         &#10095;
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;









