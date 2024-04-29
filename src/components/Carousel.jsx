
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'
import bgImg from '../assets/bgimg.jpg'

import prodCat from '../assets/prodCat.png'
import about from '../AboutImg/about4.jpg'
import caro from '../assets/carouselImg.mp4'

import welcometoindo from '../AboutImg/welcometoindo.png'
import imaa from '../AboutImg/imaa.jpg'
// style={{ backgroundImage: `url(${bgImg})` }}

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Carousel = () => {



  return (
    <>


      {/* 
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
      </MDBCarousel> */}

<div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={welcometoindo} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imaa} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </>

  );
};

export default Carousel;















