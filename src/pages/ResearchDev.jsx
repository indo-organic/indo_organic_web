import '../styles/ResearchDev.scss'
import research_img from '../assets/research_t_img.png'
import research2 from '../assets/research2.jpg'

const ResearchDev = () => {
  return (
    <>
      <div className="research">
        <img src={research_img} alt="" className='research_img' />

        <div className="research_text">
          <p className='rnd'>Research and development</p>
          <p>Research and Development (R&D) has been instrumental in revolutionizing the operations of Indo Organics, serving as a catalyst for future expansion.</p>
        </div>



        <div className="research_box_content">
        <img src={research2} alt="" />
          <div className="research_text_content">
            <p>Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p>We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need. </p>

            <p>All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers.</p>
          </div>
          <img src={research2} alt="" />
            

        </div>




      </div>




    </>
  )
}

export default ResearchDev