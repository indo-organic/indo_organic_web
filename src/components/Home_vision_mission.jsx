import { Link } from "react-router-dom"
import img from '../AboutImg/about4.jpg'
const Home_vision_mission = () => {
  return (
    <>

      {/* <section className="text-gray-800 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 lg:w-[35%] md:w-full ">
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
      </section> */}




              

                
      <div className="flex flex-wrap justify-evenly">
        <Link to='/vision' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
          <div to='/vision' className="bg-gray-600 p-6 rounded-lg shadow-md text-center" >
            <img className=" w-40 h-40 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkxMe3Xzhx7ek2lf2KhngVmgBTc8xqoyIWfcn__bGRvIkWieMY4MnrAojhsIJOsQmOo&usqp=CAU" alt="" />
            <p className="font-bold text-3xl text-white">VISION</p>
        </div>
          </Link>
          <Link to='/mission' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
          <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center" >
            <img className=" w-40 h-40 rounded-full" src="https://media4.manhattan-institute.org/sites/cj/files/economic-growth-is-still-our-best-hope.jpg" alt="" />
            <p className="font-bold text-3xl text-white">MISSION</p>
        </div>
          </Link>
      </div>
      

    </>
  )
}

export default Home_vision_mission


