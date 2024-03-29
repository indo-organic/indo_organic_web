import { Link } from "react-router-dom"
const Home_vision_mission = () => {
  return (
    <>

 <section className="text-gray-800 body-font bg-slate-200 ">
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

        








    </>
  )
}

export default Home_vision_mission


