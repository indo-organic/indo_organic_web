import '../styles/OurJourney.scss'
import Ourjourney_img from '../assets/slide1.jpg'
const OurJourney = () => {
  return (
    <>
    <div className="ourjourney">
      <div className="ourjourney_1">
        <img src={Ourjourney_img} alt="" />
        <p className='ourjourney_1_about'>About us</p>
      </div>

      <div className="ourjourney_2">
        <p className='wwa'>who we are?</p>
       <p className='wwa_text'>Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer
and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
particularly bio-stimulants, biological solutions, plant nutrients and
fertilizers. We have been serving the farming community through our
high-quality Crop Protection & Crop Nutrition products since many
years.
IOL in technical association with Indogulf cropsciences PTY. LTD.,
Australia has been engaged in developing the best quality bio
stimulants to provide innovative solutions for global agricultural
needs and to develop alternative products that are safer, more
effective, less invasive and more economical than conventional crop
care products.
We are technically advanced organization with a background and
deep understanding of Green Extraction Technology which is based
on discovery and design of extraction processes which will reduce
energy consumption, allows use of alternative solvents and
renewable natural products like biostimulants and bio-protections & fertilizers.
</p>
      </div>


<div className="ourjourney_3">

</div>



    </div>
    </>
  )
}

export default OurJourney