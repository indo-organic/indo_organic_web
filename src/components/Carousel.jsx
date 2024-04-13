
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'
import bgImg from '../assets/bgimg.jpg'

import prodCat from '../assets/prodCat.png'
import about from '../AboutImg/about4.jpg'


// style={{ backgroundImage: `url(${bgImg})` }}

const Carousel = () => {


  return (
    <>
      <div className="flex flex-col w-[100%] h-[100vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQFSr0q7ITJpig/article-cover_image-shrink_720_1280/0/1665482566081?e=2147483647&v=beta&t=A_Zg-PUOLJ-4Qv6YyMEPgjfxiQUXUTWfXS1Y-Ocm4S8)' }}></div>

      <header className="relative flex items-center justify-center h-[80vh]  overflow-hidden bg-green-900 ">
        {/* <div className="relative p-5 text-6xl font-bold text-white bg-opacity-50 rounded-xl uppercase bg-green-500 z-20">
          Welcome to Indo-<span className='text-[4rem]  '>Organics</span>
        </div> */}
        {/* <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="https://media.licdn.com/dms/image/D5612AQFSr0q7ITJpig/article-cover_image-shrink_720_1280/0/1665482566081?e=2147483647&v=beta&t=A_Zg-PUOLJ-4Qv6YyMEPgjfxiQUXUTWfXS1Y-Ocm4S8" type="video/mp4" />

        </video> */}
        {/* <img className="absolute z-10 w-auto min-w-full min-h-full max-w-none" src={prodCat} alt="" /> */}
        <img className="object-contain  w-[20%]" src={about} alt="" />
      </header>



      {/* <header className="relative flex items-center justify-center h-[80vh] mb-12 overflow-hidden">
      
        <img src={bgImg} alt="" className='absolute z-10 w-auto min-w-full h-[80vh] max-w-none'/>

      </header>  */}







      {/* 
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

    </>




  );
};

export default Carousel;






