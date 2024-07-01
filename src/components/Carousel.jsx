
import caro1 from '../AboutImg/caro1.png'
import caro2 from '../AboutImg/caro2.png'
import caro3 from '../AboutImg/caro3.png'
// import caro4 from '../AboutImg/caro4.png'
// import caro5 from '../AboutImg/caro5.jpg'
// import caro7 from '../AboutImg/caro7.png'
// import caro8 from '../AboutImg/caro8.mp4'



import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <MDBCarousel  className='w-full '>

      <MDBCarouselItem itemId={1}>
        <img src={caro1} className='d-block w-100 ' alt='...' />
      

      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={caro2} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={caro3} className='d-block w-100' alt='...' />
        {/* <video src={caro8} className='d-block w-100'  autoPlay loop></video> */}
      </MDBCarouselItem>

    </MDBCarousel>

  )
}

export default Carousel;




























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















