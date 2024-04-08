
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.scss'
const Carousel = () => {
 

  return (
    <>




      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-6xl font-bold text-white bg-opacity-50 rounded-xl uppercase bg-green-500 ">
          Welcome to Indo-<span className='text-[4rem]  '>Organics</span>
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />

        </video>
      </header>



     
      

    </>




  );
};

export default Carousel;

