import '../styles/ResearchDev.scss'
// import research_img from '../assets/research_t_img.png'
import research1 from '../assets/research1.jpg'
import research2 from '../assets/research2.jpg'




const ResearchDev = () => {
 
  return (
    <>
         <div className="research_title_box">
          <div className="research_title">
            Research and Developments
          </div>
         </div>
      <div className="research">
        <div className="research_box_content">
          <img src={research1} alt="" />
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