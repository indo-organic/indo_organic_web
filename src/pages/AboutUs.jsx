import '../styles/AboutUs.scss'
import about_logo from '../assets/slide1.jpg'
const AboutUs = () => {
  return (
    <>
      <div className="about">

        <div className="about_1">
          <img src={about_logo} alt="" />

          <div className="about_title">
            About us
          </div>
        </div>
        <div className="about_2">
          <div className="about_2_title">
            Who we are?
          </div>
          <div className="about_2_content">
            <img src={about_logo} alt="" />
            <div className="about_2_text">

              <p >Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer
                and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
                particularly bio-stimulants, biological solutions, plant nutrients and
                fertilizers. We have been serving the farming community through our
                high-quality Crop Protection & Crop Nutrition products since many
                years. </p>
              <p>IOL in technical association with Indogulf cropsciences PTY. LTD.,
                Australia has been engaged in developing the best quality bio
                stimulants to provide innovative solutions for global agricultural
                needs and to develop alternative products that are safer, more
                effective, less invasive and more economical than conventional crop
                care products.
              </p>
              <p>We are technically advanced organization with a background and
                deep understanding of Green Extraction Technology which is based
                on discovery and design of extraction processes which will reduce
                energy consumption, allows use of alternative solvents and
                renewable natural products like biostimulants and bio-protections &
                fertilizers.</p>
            </div>
          </div>
        </div>
        <div className="about_3">
          <div className="about_3_title">
            our commitments
          </div>

          <div className="about_3_text">
            <p>To deliver quality organic and natural products to support
              sustainability in food production.</p>

            <p>To develop solutions that help preserve the ecosystem.</p>

            <p>Improving the quality of life of the communities we serve.</p>
          </div>


        </div>
        <div className="about_4">
          <div className="philosophy">
            <div className="p_title">
              philosophy
            </div>
            <div className="p_key">
              KEY-A SYMBOL OF OUR PROMISE

            </div>
            <div className="p_text">
              Our mascot is small key which we believe is Key to Success.
              For us Key is nothing but attitude, which is embedded in all
              its positivity among our team members and our way of doing
              business. The attitude to create possibilities of success and
              growth for all associated with our company. This is the Key
              to growth which will be the differentiator.
            </div>
          </div>
          
          <div className="v_m">



            <div className="vision">
              <div className="v_title">
                vision
              </div>
              <div className="v_text">
                Sustainable growth of all who are
                associated with us.
              </div>
            </div>
            <div className="mission">
              <div className="m_title">
                mission
              </div>
              <div className="m_text">
                To be the most respected Organization in
                the industry by creating opportunities
                for growth ethically and professionally
              </div>
            </div>
          </div>


        </div>

      </div>




    </>
  )
}

export default AboutUs