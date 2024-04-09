import { Link } from "react-router-dom"
// import protection_img from '../assets/research2.jpg'
import supplements_img from '../assets/research2.jpg'
import adjuvants_img from '../prod_img/adjuvantsImg.jpg'
import agrochemical_img from '../prod_img/agrochemicalImg.png'


function Card({ imageUrl, title, date,  }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <a href="#"></a>
      <div className="relative ">
        <a href="#">
          <img className="w-full h-[40vh]" src={imageUrl} alt="" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-green-600 px-4 py-2 text-white text-sm hover:bg-black hover:text-green-600 transition duration-500 ease-in-out">
            Services
          </div>
        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-green-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-black hover:text-green-600 transition duration-500 ease-in-out">
            <span className="font-bold">{date}</span>
          </div>
        </a>
      </div>
      <div className="px-6 py-2 text-center bg-gray-300">
        <a href="#" className="font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out">
          {title}
        </a>
      </div>
    
    </div>
  );
}

const Products = () => {
  return (
    <>

      {/* <div className="bg-gray-200 my-[4rem] py-6 sm:py-8 lg:py-12  ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8  ">
          <p className="text-center pb-8 lg:text-7xl font-semibold text-green-700 md:text-3xl">Products we offer</p>
          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-green-400">
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



            <Link to='/speciality' className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={supplements_img} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative flex flex-col">

                <span className="text-lg font-semibold text-white lg:text-xl">IOL SPECIALIST</span>
              </div>
            </Link>



          </div>
        </div>
      </div> */}


         
               <div className="bg-gray-200">

               

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 py-20 ">
        <p className="text-center pb-8 lg:text-7xl font-semibold text-green-700 md:text-3xl">Products we offer</p>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <Link to='/agrochemical'>


            <Card
              imageUrl={agrochemical_img}
              title="Agrochemical"

              date="40"

            />
          </Link>

          <Link to='/adjuvants'>


            <Card
              imageUrl={adjuvants_img}
              title="Adjuvants"
              date="1"

            />
          </Link>
          <Link to='/speciality'>


            <Card
              imageUrl={supplements_img}
              title="IOL specialist"
              date="15"

            />
          </Link>
        </div>
      </div>



      </div>


    </>
  )
}

export default Products




