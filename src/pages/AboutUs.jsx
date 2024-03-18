import '../styles/AboutUs.scss'
import about_img from '../assets/slide3.jpg'
import about_img2 from '../assets/slide1.jpg'
const AboutUs = () => {
  return (
    <>
      <div className="aboutus">

        <div className="about_1">
          <img src={about_img} alt="" />
          <p className='about_title'>About us</p>

        </div>
        <div className="about_2">

          <div className="about_2img">
         


            <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg" alt="" className='about_img_position' />
          </div>

          <div className="about_2_box">
            <div className="about_2_title">
              who are we?
            </div>
            <div className="about_2_text">
              <p>Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer
                and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
                particularly bio-stimulants, biological solutions, plant nutrients and
                fertilizers. We have been serving the farming community through our
                high-quality Crop Protection & Crop Nutrition products since many
                years</p>
              <br />

              <p>IOL in technical association with Indogulf cropsciences PTY. LTD.,
                Australia has been engaged in developing the best quality bio
                stimulants to provide innovative solutions for global agricultural
                needs and to develop alternative products that are safer, more
                effective, less invasive and more economical than conventional crop
                care products.</p>
              <br />


              <p>We are technically advanced organization with a background and
                deep understanding of Green Extraction Technology which is based
                on discovery and design of extraction processes which will reduce
                energy consumption, allows use of alternative solvents and
                renewable natural products like biostimulants and bio-protections &
                fertilizers</p>
            </div>
          </div>

        </div>

        <div className="about_3">
          <div className="our_commitment">
            <div className="our_c_title">
              our commitment
            </div>
            <div className="our_commitment_content">
              <p>To deliver quality organic and natural products to support
                sustainability in food production</p>
              <br />
              <p> To develop solutions that help preserve the ecosystem.</p>
              <br />
              <p>Improving the quality of life of the communities we serve.</p>
            </div>
          </div>


          <div className="about_3_box">

            <div className="about_3_box_2part">

              <div className="about_philosophy">
                <div className="philosophy_title">
                  Philosophy
                </div>
                <div className="philosophy_text">
                  <p>KEY-A SYMBOL OF OUR PROMISE</p>
                  <p>Our mascot is small key which we believe is Key to Success.
                    For us Key is nothing but attitude, which is embedded in all
                    its positivity among our team members and our way of doing
                    business. The attitude to create possibilities of success and
                    growth for all associated with our company. This is the Key
                    to growth which will be the differentiator.</p>
                </div>
              </div>
              <div className="about_vision">
                <p className='a_v_title'>Vision</p>
                <p>Sustainable growth of all who are
                  associated with us.</p>
              </div>
              <div className="about_mission">
                <p className='a_m_title'>Mission</p>
                <p>To be the most respected Organization in
                  the industry by creating opportunities
                  for growth ethically and professionally</p>
              </div>




            </div>

            <div className="about_3img">
              <img src={about_img2} alt="" />
            </div>



          </div>




        </div>




      </div>
    </>
  )
}

export default AboutUs