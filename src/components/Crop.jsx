
// import demoImg from '../assets/dam.png'
import { Link } from 'react-router-dom';
import cropImg from '../AboutImg/cropImg.png'
// import protectionImg from '../productImgicon/protection.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Crop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* <div className="flex flex-col  gap-4 w-[100%] min-h-[50rem] bg-cover bg-fixed bg-center justify-center items-center m-auto "
        style={{ backgroundImage: `url(${cropImg})` }}>

        <div className="text-center pt-[2rem] ">
          <h1 className="font-[400] text-5xl mb-1 ">Category-specific Products</h1>

        </div>

        <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

          <Link to='/wheat' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01ctyaT5nl-FEx3MpwXdYnNMAF6nqjm9Vw&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Wheat</p>

            </div>

          </Link>

          <Link to='/sugarcane' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJzpo81lfSabh0tdoUeD0NYMPd0XJbxS5zg&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Sugarcane</p>

            </div>

          </Link>

          <Link to='/soyabean' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src="https://rukminim2.flixcart.com/image/850/1000/kj7gwi80-0/plant-seed/x/z/i/100-hs272-shop-360-garden-original-imafyt4reuhczmsh.jpeg?q=20&crop=false" alt="Product" className="h-40 w-full  rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Soyabean</p>

            </div>

          </Link>

          <Link to='/paddy' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://5.imimg.com/data5/SELLER/Default/2023/5/307051034/PZ/UQ/XL/152664826/paddy.jpg' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Paddy</p>

            </div>

          </Link>


        </section>

        <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">
          <Link to='/flowers' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl32FH0ypWnPMveAFhA5GKYL8uk37vz9vEQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Flowers</p>

            </div>

          </Link>

          <Link to='/fruits' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OmNs6wkFVYdKn8B08pGZJ1io9jVPDCQxQUU0hmuRVneALyJ0MGecuB8zHkiO8onxSQg&usqp=CAU' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Fruits</p>

            </div>

          </Link>


          <Link to='/vegetables' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src="https://www.kuvingsusa.com/cdn/shop/articles/077931d29bfc10af2a246d30f51907d7.jpg?v=1656108581" alt="Product" className="h-40 w-full  rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Vegetables</p>

            </div>

          </Link>

          <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://d1g9yur4m4naub.cloudfront.net/images/Article_Images/ImageForArticle_712_16449323718033258.jpg' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Pulses</p>

            </div>

          </Link>
        </section>
      </div> */}








      <section className="w-[100%] h-[40vh]  flex flex-col  items-center justify-center ">

        <div className="w-[95%] h-[90%] flex rounded-lg  flex-col " data-aos="flip-up">

          <div className=" w-[100%] h-[50%]  flex">
            <div className="w-[50%] h-[100%] flex flex-col items-start mt-8">
              <p className="pl-3 text-3xl">Our Products </p>
              <h2 className="p-3 text-6xl text-bold">product by category</h2>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod praesentium nesciunt, nihil molestiae corrupti doloribus officia? Explicabo sapiente veritatis cupiditate!</p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col" data-aos="fade-right">
            <Link to='/wheat' className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01ctyaT5nl-FEx3MpwXdYnNMAF6nqjm9Vw&s" alt="" classname="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Wheat</h3>
            </Link>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"  data-aos="flip-up">
            <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJzpo81lfSabh0tdoUeD0NYMPd0XJbxS5zg&s" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Sugarcane</h3>
            </a>
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src="https://rukminim2.flixcart.com/image/850/1000/kj7gwi80-0/plant-seed/x/z/i/100-hs272-shop-360-garden-original-imafyt4reuhczmsh.jpeg?q=90&crop=false" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Soyabean</h3>
              </a>
              <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl32FH0ypWnPMveAFhA5GKYL8uk37vz9vEQ&s" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Flowers
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col" data-aos="fade-left">
            <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src="https://rukminim2.flixcart.com/image/850/1000/jv2p6kw0/plant-seed/m/n/d/6-pusa-basmati-1718-variety-paddy-rice-6-kg-seeds-green-world-original-imafg2b5v8zyva2f.jpeg?q=20&crop=false" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Paddy</h3>
            </a>
          </div>
        </div>
      </div>




      <div className=" dark:bg-gray-800  h-[67%] py-6 sm:py-8 lg:py-1 mb-5">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 items-center justify-center flex">


          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-4 xl:gap-4 w-[97%]">

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80" data-aos="zoom-in-right">

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OmNs6wkFVYdKn8B08pGZJ1io9jVPDCQxQUU0hmuRVneALyJ0MGecuB8zHkiO8onxSQg&usqp=CAU" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-5xl">Fruits</span>

            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80" data-aos="zoom-in-left">
              <img src="https://www.kuvingsusa.com/cdn/shop/articles/077931d29bfc10af2a246d30f51907d7.jpg?v=1656108581" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-5xl">Vegetables</span>
            </a>

            {/* <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
        
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a> */}

          </div>
        </div>
      </div>



    </>
  )
}

export default Crop



