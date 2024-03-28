import { Link } from "react-router-dom"
const Home_vision_mission = () => {
  return (
    <>


      <section className="text-gray-800 body-font bg-green-200 ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 lg:w-[35%] md:w-full">
              <div className="shadow-lg shadow-indigo-500/40 flex border-2 rounded-lg border-gray-500 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-[2rem] title-font font-medium mb-3">Vision</h2>
                  <p className="leading-relaxed text-base">"Our commitment: Sustainable growth for all stakeholders. Responsible practices, collaboration, ensuring long-term prosperity, and community well-being."</p>
                  <Link to='/vision' className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[35%] md:w-full ">
              <div className="shadow-lg shadow-indigo-500/40 flex border-2 rounded-lg border-gray-800 border-opacity-50 p-8 sm:flex-row flex-col">

                <div className="flex-grow">
                  <h2 className="text-gray-900 text-[2rem] title-font font-medium mb-3">Mission</h2>
                  <p className="leading-relaxed text-base">"Our aspiration: Leading with ethics and professionalism, creating growth opportunities. Commitment to integrity, excellence, and fostering a culture of respect."</p>
                  <Link to='/mission' className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        
      {/* <div className="relative flex h-[80vh]  justify-center overflow-hidden bg-gray-500 py-6 sm:py-12 ">

        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h2 className="text-gray-900 text-[2rem] title-font font-medium mb-3">Vision</h2>

              <p>"Our commitment: Sustainable growth for all stakeholders. Responsible practices, collaboration, ensuring long-term prosperity, and community well-being."</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <Link to='/vision' className="text-green-500 transition-all duration-300 group-hover:text-white">Read the docs &rarr;</Link>
              </p>
            </div>
          </div>
        </div>

      </div> */}







    </>
  )
}

export default Home_vision_mission


