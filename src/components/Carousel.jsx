
import caro1 from '../carouselImg/image1.png'
import caro2 from '../carouselImg/image2.png'
import caro3 from '../carouselImg/image3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <>
      <div className=" w-full ">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={10}>
          <div>
            <img src={caro1} />

          </div>

          <div>
            <img src={caro2} />

          </div>
          <div>
            <img src={caro3} />

          </div>



        </Carousel>



      </div>

    </>
  )
}

export default Hero