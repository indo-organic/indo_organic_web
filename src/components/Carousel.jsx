
import caro1 from '../AboutImg/caro1.png'
import caro2 from '../AboutImg/caro2.png'
import caro3 from '../AboutImg/caro3.png'
// import caro4 from '../AboutImg/caro4.png'
// import caro5 from '../AboutImg/caro5.jpg'
// import caro7 from '../AboutImg/caro7.png'
// import caro8 from '../AboutImg/caro8.mp4'


// import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

// const Carousel = () => {
//   return (
//     <MDBCarousel showControls showIndicators className='w-full '>

//       <MDBCarouselItem itemId={1}>
//         <img src={caro1} className='d-block w-100 ' alt='...' />
//       </MDBCarouselItem>

//       <MDBCarouselItem itemId={2}>
//         <img src={caro2} className='d-block w-100 ' alt='...' />
//       </MDBCarouselItem>

//       <MDBCarouselItem itemId={3}>
//         <img src={caro3} className='d-block w-100' alt='...' />
//         {/* <video src={caro8} className='d-block w-100'  autoPlay loop></video> */}
//       </MDBCarouselItem>

//     </MDBCarousel>

//   )
// }

// export default Carousel;








// import homeResearch from '../assets/aboutVid.mp4'
import auntyKey from '../AboutImg/auntyKey.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import React, { useEffect } from 'react';


// const Carousel = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <>
//       <section className="w-[100%] h-[100vh]   flex items-center justify-center drop-shadow-md">
//         <div className="w-[95%] h-[90%] bg-gray-200 rounded-lg flex items-center justify-between  bg-[url('https://t3.ftcdn.net/jpg/01/62/26/58/360_F_162265824_KEzZW8XGSfcc2KCWSwTEUgLsiEQasKg2.jpg')] bg-cover bg-no-repeat ">

//           <div className="w-[50%] h-[70vh]  flex flex-col pl-6 justify-around ">
//             <div className="text-7xl font-serif text-bold pl-5">
//               <h4>Welcome to</h4>
//               <h3>Indo Organics Pvt. Ltd.</h3>
//             </div>


//           </div>
//           <img src={auntyKey} alt="" />


//           {/* <video src={homeResearch} className='h-[100%] w-[100%] object-cover rounded-lg' loop autoPlay ></video> */}


//         </div>

//       </section>
//     </>
//   )
// }

// export default Carousel




import '../styles/Carousel.scss'
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel_box">
        <p className='text-white'>i am here</p>
        <img src={auntyKey} alt="" />
      </div>
    </div>
  )
}

export default Carousel

















// import React, { Component } from 'react';
// // import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const Carousel2 = () => {
//   return (
//     <Carousel className='object-contain' showThumbs='false' showIndicators='false' showStatus='false' >
//       <div>
//         <img src={caro4} />

//       </div>
//       <div>
//         <img src={caro5} />

//       </div>
//       <div>
//         <img src={caro7} />
//         {/* <p className="legend">Legend 3</p> */}
//       </div>
//     </Carousel>
//   )
// }

// export default Carousel2;















