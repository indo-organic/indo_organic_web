
import rnd2 from '../RnDImg/rnd2.jpg'
import { Link } from "react-router-dom"
const RnDforHome = () => {
  return (
    <>

      {/* <div
        className="relative flex mb-[11rem] flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-full w-full object-cover" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="Winding mountain road" />
        </div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Research and Developments</h2>

            <p>Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p>We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need. </p>

            <p>All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers.</p>

            <div className="mt-10">
              <Link to='/researchDev' className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 p-1 hover:bg-green-800 hover:shadow-md md:w-48">Read More</Link>
            </div>
          </div>

        </div>

      </div>  */}
      

      {/* bg-gray-200 py-24 sm:py-32 */}



    

      <div   className="flex flex-col w-[100%] h-[140vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{
          backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/art-nature-flower-simple-plant-green-powerpoint-background_08d5740328__960_540.jpg)',
        }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src={ rnd2} alt="" />
              <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>
              <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
              </div>
              <figure className="relative isolate">
               
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>"Fostering Prosperity Through Innovative Agrochemical Solutions. Cultivating Sustainability, Yielding Success. Bridging Science with Nature, Empowering Farmers for a Greener Tomorrow. Your Partner in Agricultural Excellence and Environmental Stewardship."</p>
                </blockquote>
               
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Research and Developments</h1>
              <div className="max-w-xl">
                <p className="mt-6">Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
                <p className="mt-8">We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need</p>
                <p className="mt-8">All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers</p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4 ">
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Founded</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">2016</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Employees</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">50+</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">States</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">20</dd>
              </div>
             
            </dl>
            <div className="mt-10 flex">
              <Link to='/researchDev' className="text-base font-semibold leading-7 text-green-500">Learn more about our company <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>



    








    </>
  )
}

export default RnDforHome