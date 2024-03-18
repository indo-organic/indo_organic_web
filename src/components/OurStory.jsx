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

        <div className="ourstory_content">
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

        </div>

      </div>








    </>
  )
}

export default OurStory