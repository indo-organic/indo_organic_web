import React from 'react';
import { Link } from 'react-router-dom';

import protectionImg from '../productImgicon/protection.png'
const Products = () => {
  return (
    <>
      <div className="min-h-[100vh] pt-2 pb-5 ">
        <div className="text-center pt-[2rem] ">
          <h1 className="font-[900] text-5xl mb-1 text-green-800">Products We Offer</h1>
        </div>
        <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

          <Link to='/insecticide' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

            <img src='https://i.guim.co.uk/img/media/de2022c9550a0070986a904c3438a3064abe8d70/0_62_2480_1488/master/2480.jpg?width=465&dpr=1&s=none' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Insecticide</p>

            </div>

          </Link>

          <Link to='/fungicide' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy0fyOJ1yNdsfeUkTEUbOoYTcsZJ9x7PzVQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">
             
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Fungicide</p>

            </div>

          </Link>

          <Link to='/herbicide' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src="https://static.scientificamerican.com/sciam/cache/file/F6C02647-4B66-41FD-978DF41814785D05_source.jpg?w=600" alt="Product" className="h-40 w-full  rounded-t-xl" />
            <div className="">
              
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Herbicide</p>

            </div>

          </Link>

          <Link to='/comboB' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoPEuW6TOCrAMpUDaID7M6waBiMGk9hKNv_Ygl58hCA&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">
             
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Adjuvant</p>

            </div>

          </Link>
        </section>

        <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

          <Link to='/soilrevivers' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgN8_TKpT9zXrmnB78YLsgTLSKzfSSpzZXDI1JYrcOog&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">
              
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Soil Revivers</p>

            </div>

          </Link>
          <Link to='/nutrition' className="w-[12rem] h-[12rem]  object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://www.tuftsmedicarepreferred.org/sites/default/files/styles/width_731/public/2021-10/GettyImages-1224317722.jpg?itok=FhWXKpnX' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">
              
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">PGRs/Nutrition</p>

            </div>
          </Link>

          <Link to='/protection' className="w-[12rem] h-[12rem]  object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src={protectionImg} alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">
             
              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Protection</p>
            </div>

          </Link>
        </section>




      </div>


    </>
  );
}

export default Products;
