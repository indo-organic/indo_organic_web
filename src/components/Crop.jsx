// import React from "react";
// import '../styles/crop.scss'
// import { Link } from "react-router-dom";

// const crops = [
//   {
//     title: "Vegetables",
//     cropsName: '/wheat',
//     description: "demo text here",
//     imageUrl: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
//   },
//   {
//     title: "fruits",
//     cropsName: '/',
//     description: "lorem10 demo text",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3hizBuSvPUyEHHLmOX0qX7Ha3JKHjYsUbw&s"
//   },

//   {
//     title: "Flowers",
//     cropsName: '/agrochemical',
//     description: "lorem10 demo text",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl32FH0ypWnPMveAFhA5GKYL8uk37vz9vEQ&s"
//   },

//   {
//     title: "Wheat",
//     cropsName: '/agrochemical',
//     description: "lorem10 demo text",
//     imageUrl: "https://images.cnbctv18.com/hindicnbctv18/2023/06/wheat-2-1024x576.jpg"
//   },
//   {

//     title: "cotton",
//     cropsName: '/agrochemical',
//     description: "lorem10 demo text",
//     imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/034/900/294/small_2x/delicate-cotton-fields-ready-to-be-gathered-generative-ai-photo.jpg"
//   },
// ];

// const Crop = () => {
//   return (
//     <div className="container-crops">
//       <h2 className="title">target Crops</h2>
//       <p className="description">
//       Indo Organics provides a diverse array of products designed for different crops.
//       </p>
//       <div className="crops-slider">
//         <div className="slider-wrapper">
//           {crops.map((crops, index) => (
//             <div className="slide" key={index}>
//               <Link to={crops.cropsName}>

//               <div className="img-container">

//                 <img src={crops.imageUrl} alt={crops.title} className="crops-image" />
//                 <div className="crops-info">

//                   <div className="crops-title">{crops.title}</div>
//                   {/* <div className="crops-description">{crops.description}</div> */}
//                 </div>
//               </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Crop;





import demoImg from '../assets/dam.png'
import { Link } from 'react-router-dom';

import protectionImg from '../productImgicon/protection.png'
const Crop = () => {
  return (
    <>


      <div className="min-h-[100vh] pt-2 pb-5 ">
        <div className="text-center pt-[2rem] ">
          <h1 className="font-[900] text-5xl mb-1 text-green-800">Crops</h1>

        </div>


                <div  className="flex flex-col  gap-4 w-[100%] min-h-[50rem] bg-cover bg-fixed bg-center justify-center items-center m-auto "
          style={{ backgroundImage: 'url(https://media.istockphoto.com/id/133543924/photo/wheat-seed-heads-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=jBW7OB4Y5TxNk5zKMzT2JYCIT_2U1m4CyXCYlJlAbpU=)' }}>

                

        <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

          <Link to='/wheat' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01ctyaT5nl-FEx3MpwXdYnNMAF6nqjm9Vw&s' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Wheat</p>

            </div>

          </Link>

          <Link to='/sugarcane' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src='https://www.credihealth.com/media/pegi9rtpzubq7uvau9295hdvkpbx/sugarcane-witn-leaf-on-wood-table' alt="Product" className="h-40 w-full rounded-t-xl" />
            <div className="">

              <p className="text-lg font-bold text-black truncate block capitalize text-center ">Sugarcane</p>

            </div>

          </Link>

          <Link to='/soyabean' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src="https://m.media-amazon.com/images/I/51eSM8s4r5L._AC_UF1000,1000_QL80_.jpg" alt="Product" className="h-40 w-full  rounded-t-xl" />
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


      </div>





    </>
  )
}

export default Crop



