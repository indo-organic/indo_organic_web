
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'
import bgImg from '../assets/bgimg.jpg'

import prodCat from '../assets/prodCat.png'
import about from '../AboutImg/about4.jpg'
import caro from '../assets/carouselImg.mp4'

// style={{ backgroundImage: `url(${bgImg})` }}



const Carousel = () => {

  

  return (
    <>





 
      {/* <div className="flex flex-col w-[100%] h-[100vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQFSr0q7ITJpig/article-cover_image-shrink_720_1280/0/1665482566081?e=2147483647&v=beta&t=A_Zg-PUOLJ-4Qv6YyMEPgjfxiQUXUTWfXS1Y-Ocm4S8)' }}></div> */}

      <header className="relative flex items-center justify-center h-[90vh] pt-40   w-full overflow-hidden bg-white ">
        {/* <div className="relative p-5 text-6xl font-bold text-white bg-opacity-50 rounded-xl uppercase bg-green-500 z-20">
          Welcome to Indo-<span className='text-[4rem]  '>Organics</span>
        </div> */}
        {/* <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src={caro} type="video/mp4" />

        </video> */}
        {/* <img className="absolute z-10 w-auto min-w-full min-h-full max-w-none" src={prodCat} alt="" /> */}
        {/* <img className="object-contain  w-[20%]" src={about} alt="" /> */}
        <img src="https://media.licdn.com/dms/image/D5612AQFSr0q7ITJpig/article-cover_image-shrink_720_1280/0/1665482566081?e=2147483647&v=beta&t=A_Zg-PUOLJ-4Qv6YyMEPgjfxiQUXUTWfXS1Y-Ocm4S8" className='w-full mt-[2rem] ' alt="" />
      </header>


      
     
    </>

  );
};

export default Carousel;








