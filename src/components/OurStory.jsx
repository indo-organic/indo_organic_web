import '../styles/OurStory.scss'
import prodCat from '../assets/prodCat.png'
import image from '../assets/image3.jpg'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from "react-icons/fa";


const OurStory = () => {
  return (
    <>

      <div className="ourStory">
        <div className='ourStory_t_image_soil'>
          <p className='ourstory_p_leverage'> We leverage our rich heritage to tackle the challenges of the future</p>
          <img src={prodCat} alt="" />

        </div>

        {/* <div className="ourstory_content">
          <p className='o_c_about'>about us</p>
          <div className="ourstory_content_box">
            <p className='o_c_b_p'>Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
              particularly bio-stimulants, biological solutions, plant nutrients and
              fertilizers. We have been serving the farming community through our
              high-quality Crop Protection & Crop Nutrition products since many
              years.</p>

            <img src={image} alt="" />



          </div>



          <Link to='/aboutUs' className='our_learn_more'>

            learn more
            <FaAngleDoubleRight />
          </Link>

        </div> */}

        <section class="text-gray-600 body-font bg-rgb(235, 237, 235)">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
              <p class="leading-relaxed mt-4">Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
                particularly bio-stimulants, biological solutions, plant nutrients and
                fertilizers. We have been serving the farming community through our
                high-quality Crop Protection & Crop Nutrition products since many
                years.</p>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={image} />
            </div>



          </div>
          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">

            <Link to='/aboutUs' className='our_learn_more'>

              learn more
              <FaAngleDoubleRight />
            </Link>

          </button>

        </section>

      </div>








    </>
  )
}

export default OurStory