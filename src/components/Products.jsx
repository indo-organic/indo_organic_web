import { Link } from "react-router-dom"
// import protection_img from '../assets/research2.jpg'
import supplements_img from '../prod_img/supplements.jpg'
import adjuvants_img from '../prod_img/adjuvantsImg.jpg'
import agrochemical_img from '../prod_img/agrochemicalImg.png'

const Products = () => {
  return (
    <>

      <div className="bg-gray-100 my-[4rem] py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-green-200 ">
          <h1 className="text-lg font-semibold   lg:text-2xl">Product and Service</h1>

          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            <Link to='/agrochemical' className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={agrochemical_img} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative flex flex-col">

                <span className="text-lg font-semibold text-white lg:text-xl">AGROCHEMICAL</span>
              </div>
            </Link>

            <Link to='/adjuvants' className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={adjuvants_img} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative flex flex-col">

                <span className="text-lg font-semibold text-white lg:text-xl">ADJUVANTS</span>
              </div>
            </Link>

            {/* <Link to='/organicRange' className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={protection_img} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative flex flex-col">

                <span className="text-lg font-semibold text-white lg:text-xl">ORGANIC RANGE</span>
              </div>
            </Link> */}

            {/* <Link to='/speciality' className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={supplements_img} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative flex flex-col">

                <span className="text-lg font-semibold text-white lg:text-xl">IOL SPECIALIST</span>
              </div>
            </Link> */}

           

          </div>
        </div>
      </div>




  

    </>
  )
}

export default Products