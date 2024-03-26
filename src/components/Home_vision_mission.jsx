import { Link } from "react-router-dom"
const Home_vision_mission = () => {
  return (
    <>

      {/* <section className="text-gray-600 body-font bg-custom-F4F2F2 mb-10 h-[50vh] mt-11">
        <div className="container px-4 py-3 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center ">
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font lg:text-3xl font-medium text-gray-900 mt-6 mb-3">Vision</h2>
              <p className="leading-relaxed text-base p-6">"We are committed to fostering sustainable growth for everyone linked to our organization. Through responsible practices and collaboration, we strive to ensure the long-term prosperity and well-being of our community and stakeholders."</p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font lg:text-2xl font-medium text-gray-900 mt-6 mb-3">Mission</h2>
              <p className="leading-relaxed text-base  p-6">"We aspire to become the industry's most respected organization by ethically and professionally creating opportunities for growth. Our commitment lies in fostering a culture of integrity and excellence in all endeavors."</p>

            </div>
          </div>
        </div>
      </section> */}

      <section className="text-gray-800 body-font ">
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


