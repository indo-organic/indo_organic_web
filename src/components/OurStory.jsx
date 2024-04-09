// import aboutHome1 from '../AboutImg/aboutHome1.jpg'
import ourStory1 from '../AboutImg/favicon.jpg'
import ourStory2 from '../assets/ourStoryImg.jpg'
import { Link } from 'react-router-dom'
const OurStory = () => {
  return (
    <>




      <div className="bg-gray-200">
        <div className="relative mx-auto  w-[90%]">
          <img className="h-32 w-full object-cover rounded-md object-center" src='https://www.shutterstock.com/image-photo/woman-planting-young-seedling-gardening-260nw-1768851851.jpg' alt="Random image" />
          <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white lg:text-3xl md:xl md:text-center md:m-auto sm:text-[1rem] sm:text-center font-bold uppercase">We leverage our rich heritage to tackle the challenges of the future</h2>
          </div>
        </div>
        <div className=" relative flex items-center justify-center overflow-hidden bg-whitesmoke z-10">
          <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative">
                <div className="absolute top-0  -left-[8.5rem]  z-0 opacity-70">
                  <img src={ourStory1} className="w-28  h-full object-fill fill-y text-y" alt="Placeholder" />
                </div>
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="flex text-sm uppercase text-g1 text-green-900">About Us</p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                    Quality is never by {' '}
                    <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-green-700 ">Chance</span>
                  </h2>
                  <p className="text-base text-gray-700">Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.</p>
                  <div className="mt-10 flex flex-col items-center md:flex-row">
                    <Link to="/aboutUs" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-900 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                      View More
                    </Link>
                    <Link href="researchDev" aria-label="" className="group inline-flex items-center font-semibold text-g1">
                      Learn about R&D
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-green-600 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[1rem] rounded-br-none rounded-tl-none ">
                  <img src={ourStory2} alt="Placeholder" className='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default OurStory




