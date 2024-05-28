
// import rnd2 from '../RnDImg/rnd2.jpg'
import { Link } from "react-router-dom"
// import staticsbg from '../assets/staticsbg.jpg'

const RnDforHome = () => {
  return (
    <>

      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-100 min-h-[70vh]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://bsmedia.business-standard.com/_media/bs/img/article/2016-03/02/full/1456935798-4925.jpg?im=FeatureCrop,size=(826,465)"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://cdn.givingcompass.org/wp-content/uploads/2019/02/11172049/8-Women-Breaking-Ground-in-Science-Agriculture.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://www.tata.com/content/dam/tata/images/newsroom/community/desktop/sustainable_farming_tata_trusts_secondary3_desktop_753.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-black">
                  Indo organics
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Research and Development
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Fostering Prosperity Through Innovative Agrochemical Solutions. Cultivating Sustainability, Yielding Success. Bridging Science with Nature, Empowering Farmers for a Greener Tomorrow.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Your Partner in Agricultural Excellence and Environmental Stewardship.
                </p>
                {/* <Link to='/reseachDev'
                  href="javascript:void(0)"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-900 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Learn more
                </Link> */}
                <Link to='/researchDev' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span classNmae="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-900 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}

export default RnDforHome