
// import caro1 from '../carouselImg/welcomeCaro.png'
// import caro2 from '../carouselImg/midCaro.png'
// // import caro3 from '../carouselImg/image3.png'
// // import caro3 from '../carouselImg/image3.mp4'
// import caro4 from '../carouselImg/researchCaro.png'


// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
// const Carousel = () => {
//   return (
//     <MDBCarousel showControls showIndicators>
//     <MDBCarouselItem itemId={1}>
//       <img src={caro1} className='d-block w-100 ' alt='...' />
//       <MDBCarouselCaption>
//         <h5>First slide label</h5>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </MDBCarouselCaption>
//     </MDBCarouselItem>
//     <MDBCarouselItem itemId={2}>
//       <img src={caro2} className='d-block w-100' alt='...' />

//       <MDBCarouselCaption>
//         {/* <h5>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//       </MDBCarouselCaption>
//     </MDBCarouselItem>


//     <MDBCarouselItem itemId={3}>
//       <img src={caro4} className='d-block w-100' alt='...' />

//       <MDBCarouselCaption>
//         {/* <h5>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//       </MDBCarouselCaption>
//     </MDBCarouselItem>
//   </MDBCarousel>
//   )
// }

// export default Carousel







import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default Carousel