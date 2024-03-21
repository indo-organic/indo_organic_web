import '../styles/OurStory.scss'
import prodCat from '../assets/prodCat.png'
import ourStoryImg from '../assets/ourStoryImg.jpg'
// import image from '../assets/image3.jpg'
import { Link } from 'react-router-dom'
// import { FaAngleDoubleRight } from "react-icons/fa";


const OurStory = () => {
  return (
    <>

      <div className="ourStory">
        <div className='ourStory_t_image_soil'>
          <p className='ourstory_p_leverage'> We leverage our rich heritage to tackle the challenges of the future</p>
          <img src={prodCat} alt="" />
        </div>
      </div>

      <div class="bg-custom-F4F2F2 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class=" flex text-center justify-center h-[70vh] overflow-hidden rounded-lg  shadow-lg md:h-auto">
                <img src={ourStoryImg} loading="lazy" alt="Photo by Martin Sanchez" class="h-[50vh] w-[70%] object-cotain object-center" />
              </div>
            </div>

            <div class="md:pt-8">
              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">About us</h1>
              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.</p>
                <Link to='/aboutUs' className='border border-gray-300 hover:border-blue-500 p-3'>Learn more</Link>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default OurStory