// import aboutHome1 from '../AboutImg/aboutHome1.jpg'
import ourStory1 from '../AboutImg/favicon.jpg'
import ourStory2 from '../assets/ourStoryImg.jpg'
import imagee from '../assets/bbb.jpg'
import { Link } from 'react-router-dom'
const OurStory = () => {
  return (
    <>




      <div className='bg-green-900' >
        
        <div className=" relative flex items-center justify-center overflow-hidden bg-whitesmoke z-10">
          <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative">
                <div className="absolute top-0  -left-[8.5rem]  z-0 opacity-70">
                  {/* <img src={ourStory1} className="w-28  h-full object-fill fill-y text-y" alt="Placeholder" /> */}
                </div>
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="flex  uppercase text-xl text-white">About Us</p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-white">
                    Quality is never by {' '}
                    <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-green-300 ">Chance</span>
                  </h2>
                  <p className="text-base text-white">Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.</p>
                  <div className="mt-10 flex flex-col items-center md:flex-row">
                    <Link to="/aboutUs" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-900 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                      View More
                    </Link>
                    <Link href="researchDev" aria-label="" className="group inline-flex items-center font-semibold text-g1 text-white">
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












      <div className="bg-gray-700 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-100">
            <path fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"></path>
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">How we work?</h2>
          <p className="text-gray-300">We follow our process to get you started as quickly as possible</p>
        </div>
        <div
          className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                </path>
                <path d="M10 10l2 -2v8"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
                <p className="text-gray-300">We will have discussions on the requirements to ensure your MVP (Minimum Viable
                  Product) is ready for the initial launch</p>
              </div>
            </div>
          </div>
          {/* Add similar divs for other steps */}
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                </path>
                <path d="M10 10l2 -2v8"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
                <p className="text-gray-300">We will have discussions on the requirements to ensure your MVP (Minimum Viable
                  Product) is ready for the initial launch</p>
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




