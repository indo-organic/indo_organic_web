
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'
import bgImg from '../assets/bgimg.jpg'

import prodCat from '../assets/prodCat.png'
import about from '../AboutImg/about4.jpg'
import caro from '../assets/carouselImg.mp4'

// style={{ backgroundImage: `url(${bgImg})` }}

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Carousel = () => {



  return (
    <>



      <MDBCarousel showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src='https://media.licdn.com/dms/image/D5612AQFSr0q7ITJpig/article-cover_image-shrink_720_1280/0/1665482566081?e=2147483647&v=beta&t=A_Zg-PUOLJ-4Qv6YyMEPgjfxiQUXUTWfXS1Y-Ocm4S8' className='d-block w-100 h-[80vh] object-cover object-center' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/agri2.jpeg' className='d-block w-100 h-[80vh] object-cover object-top' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLKEgdXtXULkP8VSaQVWQzU6WZidlNa09HfpPclj90R0j85RWdhCrVEkCABTH2mvtp3Y&usqp=CAU' className='d-block w-100 h-[80vh] object-cover' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>




    </>

  );
};

export default Carousel;















