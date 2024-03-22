import '../styles/OurStory.scss'
// import prodCat from '../assets/prodCat.png'
import ourStoryImg from '../assets/ourStoryImg.jpg'
// import image from '../assets/image3.jpg'
import { Link } from 'react-router-dom'
// import { FaAngleDoubleRight } from "react-icons/fa";


const OurStory = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container px-5 py-[4%] mx-auto">
          <div class="lg:w-2/3 flex  text-center flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-3xl font-medium title-font "> We leverage our rich heritage to tackle the challenges of the future</h1>
          </div>
        </div>
      </section>
     

      {/* <div class="bg-custom-F4F2F2 py-6 sm:py-8 lg:py-12">
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
      </div> */}
     
     <section class="">
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="lg:text-center">
                <h2
                    class="font-heading mb-4 bg-orange-100  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    About us
                </h2>
              
                <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.
                </p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">R and D certified</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                        R&D Certification is a trusted accreditation agency specializing in recognizing and validating research and development initiatives across various industries. With a rigorous evaluation process, we certify organizations for their commitment to innovation, quality, and scientific advancement. Our certifications serve as a mark of excellence, providing credibility and recognition to entities investing in cutting-edge research and technological advancements.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Area we target
                                
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> We target agricultural regions globally, focusing on sustainable farming practices. Our agrochemical solutions cater to diverse climates and crop varieties, ensuring optimal growth and yield for farmers worldwide.
                        </dd>
                    </div>
                  
                </dl>
            </div>

        </div>
    </div>
</section>



    </>
  )
}

export default OurStory