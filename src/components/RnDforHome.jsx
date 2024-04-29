
import rnd2 from '../RnDImg/rnd2.jpg'
import { Link } from "react-router-dom"
import staticsbg from '../assets/staticsbg.jpg'

const RnDforHome = () => {
  return (
    <>
     




{/* 
<div className="py-16 bg-green-950 ">
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-4xl text-gray-200 font-bold md:text-5xl">Research and Development</h1>
            <p className="text-lg text-gray-100">Fostering Prosperity Through Innovative Agrochemical Solutions. Cultivating Sustainability, Yielding Success. Bridging Science with Nature, Empowering Farmers for a Greener Tomorrow. Your Partner in Agricultural Excellence and Environmental Stewardship.</p>
            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
              <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-400 shadow-xl hover:bg-gray-600 active:bg-gray-00 focus:bg-gray-600 sm:w-max">
                <span className="block text-black font-semibold">
                  Learn more
                </span>
              </button>
             
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 row-span-4">
              <img src="https://djzw0xesrb3bn.cloudfront.net/vigyanprasar/transcoded_images/5d80bf913866a958050000e7-1603364602-xl_image_16_9/360x203-large-xl_image_16_9.jpg" className="rounded-full" width="640" height="960" alt="shoes" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-2">
              <img src="https://media.licdn.com/dms/image/D4D12AQFhpJWXwt8Tgw/article-cover_image-shrink_600_2000/0/1684298908509?e=2147483647&v=beta&t=BBtfwPGgbEp8GNixtkAxNQmpSTcm5Aax2ZHc_ambSyA" className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-3">
              <img src="https://etimg.etb2bimg.com/photo/107045029.cms" className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div> */}


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
                <span className="block mb-4 text-lg font-semibold text-green-700">
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
                <Link to='/reseachDev'
                  href="javascript:void(0)"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-900 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Learn more
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