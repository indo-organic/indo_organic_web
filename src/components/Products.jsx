import React from 'react';
import { Link } from 'react-router-dom';
const ProductGrid = () => {
  return (
    <>
    <div className="min-h-[100vh] py-20">
      <div className="text-center pt-[2rem] ">
        <h1 className="font-[900] text-5xl mb-1 text-green-800">Products We Offer</h1>
      </div>

      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        <Link to='/insecticide' className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://i.guim.co.uk/img/media/de2022c9550a0070986a904c3438a3064abe8d70/0_62_2480_1488/master/2480.jpg?width=465&dpr=1&s=none' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Insecticide</p>

            </div>
          </a>
        </Link>
        <Link to='/fungicide' className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://www.reagent.co.uk/wp-content/uploads/2023/02/spraying-a-rose-bush-with-a-fungicide.webp' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Fungicide</p>

            </div>
          </a>
        </Link>

        <Link to='/herbicide' className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwgzIBqIw5cn1-CUw6lLWqFHkuOwHusN-tXO667-07w&s' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Herbicide</p>

            </div>
          </a>
        </Link>

        <Link to='/adjuvant' className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoPEuW6TOCrAMpUDaID7M6waBiMGk9hKNv_Ygl58hCA&s' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Adjuvant</p>

            </div>
          </a>
        </Link>
      </section>



      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        <div className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgN8_TKpT9zXrmnB78YLsgTLSKzfSSpzZXDI1JYrcOog&s' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Soil Revivers</p>

            </div>
          </a>
        </div>
        <div className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://www.tuftsmedicarepreferred.org/sites/default/files/styles/width_731/public/2021-10/GettyImages-1224317722.jpg?itok=FhWXKpnX' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">PGRs/Nutrition</p>

            </div>
          </a>
        </div>

        <div className="w-72 h-[19rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <a href="#">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmepfP2y2LHJvP4gzerAH3gE0GchF13aZK_vbFP8TMf2l70Q8_ZXf-PB5bIG1nO5LIY4o&usqp=CAU' alt="Product" className="h-60 w-full rounded-t-xl" />
            <div className="px-4 py-3  w-72">
              {/* <span className="text-gray-400 mr-3 uppercase text-xs">Agrochemical</span> */}
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Protection</p>
            </div>
          </a>
        </div>
      </section>
      </div>


    </>
  );
}

export default ProductGrid;
