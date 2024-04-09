import '../styles/AboutUs.scss'
import aboutImg1 from '../AboutImg/aboutImg1.jpg'
import aboutImg2 from '../AboutImg/aboutImg2.jpg'
import aboutImg3 from '../AboutImg/aboutImg3.jpg'
import aboutImg4 from '../AboutImg/about4.jpg'
// import video from '../assets/caro.mp4'
import AboutImg from '../AboutImg/aboutImg3.jpg'


const AboutUs = () => {
  return (
    <>

       <div  className="flex flex-col w-full bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{
          backgroundImage: 'url(https://marketplace.canva.com/EAFnfGcKtiM/1/0/1600w/canva-green-illustrative-organic-plant-zoom-virtual-background-fpJFOduK3w4.jpg)',
        }} >


        {/* <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-center" src={AboutImg} alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">About us</h2>
          </div>
        </div> */}
            <h2 className="text-white text-3xl font-bold">About us</h2>



        <div className="flex flex-wrap items-center mt-20  text-center text-white ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
            <img src={aboutImg1} alt="gem" className="w-[50%] inline-block rounded shadow-lg border border-merino-400 " />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <p className="sm:text-lg mt-6">
              Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer
              and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
              particularly bio-stimulants, biological solutions, plant nutrients and
              fertilizers. We have been serving the farming community through our
              high-quality Crop Protection & Crop Nutrition products since many
              years.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20  text-center text-white">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={aboutImg2} alt="project members" className="w-[50%] inline-block rounded shadow-lg border border-merino-400" />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <p className="sm:text-lg mt-6">
              IOL in technical association with Indogulf cropsciences PTY. LTD.,
              Australia has been engaged in developing the best quality bio
              stimulants to provide innovative solutions for global agricultural
              needs and to develop alternative products that are safer, more
              effective, less invasive and more economical than conventional crop
              care products.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20   text-center text-white">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={aboutImg3} alt="editor" className="w-[50%] inline-block rounded shadow-lg border border-merino-400" />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <p className="sm:text-lg mt-6">
              We are technically advanced organization with a background and
              deep understanding of Green Extraction Technology which is based
              on discovery and design of extraction processes which will reduce
              energy consumption, allows use of alternative solvents and
              renewable natural products like biostimulants and bio-protections &
              fertilizers.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20  text-center text-white ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={aboutImg4} alt="bulk editing" className="w-[50%] inline-block rounded shadow-lg border border-merino-400" />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              KEY-A SYMBOL OF OUR PROMISE

            </h3>
            <p className="sm:text-lg mt-6">
              Our mascot is small key which we believe is Key to Success.
              For us Key is nothing but attitude, which is embedded in all
              its positivity among our team members and our way of doing
              business. The attitude to create possibilities of success and
              growth for all associated with our company. This is the Key
              to growth which will be the differentiator.
            </p>
          </div>
        </div>
      </div> 

    </>
  )
}

export default AboutUs