
// import demoImg from '../assets/dam.png'
import { Link } from 'react-router-dom';
import cropImg from '../AboutImg/cropImg.png'
// import protectionImg from '../productImgicon/protection.png'
const Crop = () => {
  return (
    <>
      <div className="flex flex-col  gap-4 w-[100%] min-h-[50rem] bg-cover bg-fixed bg-center justify-center items-center m-auto "
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
      </div>




      {/* <section className='className="w-[100%] h-[150%]  mt-10  flex items-center justify-center drop-shadow-md'>

        <div className="w-[95%] h-[130%]  flex flex-col items-center gap-4 ">
          <div className='w-[100%] h-[60vh]  rounded-lg'>
            <div className='w-[100%] h-[30vh]  text-3xl pl-3 font-sans flex items-center'>Category-specific Products</div>
            <div className='w-[100%] h-[50vh] flex items-center justify-end gap-5' >
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01ctyaT5nl-FEx3MpwXdYnNMAF6nqjm9Vw&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Wheat</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307051034/PZ/UQ/XL/152664826/paddy.jpg" className='h-[45vh] rounded-lg' alt="" />
                <p>Paddy</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJzpo81lfSabh0tdoUeD0NYMPd0XJbxS5zg&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Sugarcane</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ur45AY0N_VT40CoMMZ9mKuQ9YorJPVlXTA&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Soyabean</p>
              </div>
            </div>

          </div>



          <div className='w-[100%] h-[60vh]  '>
          <div className='w-[100%] h-[50vh] flex  justify-start gap-5' >
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01ctyaT5nl-FEx3MpwXdYnNMAF6nqjm9Vw&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Wheat</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307051034/PZ/UQ/XL/152664826/paddy.jpg" className='h-[45vh] rounded-lg' alt="" />
                <p>Paddy</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJzpo81lfSabh0tdoUeD0NYMPd0XJbxS5zg&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Sugarcane</p>
              </div>
              <div className='w-[15%] h-[35vh] bg-gray-200 rounded-lg flex flex-col  items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ur45AY0N_VT40CoMMZ9mKuQ9YorJPVlXTA&s" className='h-[45vh] rounded-lg' alt="" />
                <p>Soyabean</p>
              </div>
            </div>
             </div>


        </div>



      </section> */}



     






    </>
  )
}

export default Crop



