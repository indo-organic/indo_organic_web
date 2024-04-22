import { Link } from "react-router-dom"
import protection_img from '../assets/research2.jpg'
import supplements_img from '../assets/research2.jpg'
import adjuvants_img from '../prod_img/adjuvantsImg.jpg'
import agrochemical_img from '../prod_img/agrochemicalImg.png'
import agro from '../productImgicon/agr.png'
import bio from '../productImgicon/bio.png'
import adju from '../productImgicon/adjuvant.png'
import seed from '../productImgicon/seed.png'
import staticsbg from '../assets/staticsbg.jpg'

function Card({ imageUrl, title, date, }) {
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




      <div className="bg-green-900"
      >



        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 py-20 ">
          <p className="text-center pb-8 lg:text-7xl font-semibold text-white md:text-3xl">Products we offer</p>
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




// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ imageUrl, productName }) => {
//   return (
//     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//       <a href="#">
//         <img src={imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//         <div className="px-4 py-3 w-72">
//           <p className="text-lg font-bold text-black truncate block capitalize">{productName}</p>

//         </div>
//       </a>
//     </div>
//   );
// }

// const ResponsiveProductGrid = () => {
//   return (
//     <>



//       <div className="text-center p-10 bg-yellow-900">
//         <h1 className="font-bold text-4xl mb-4 text-white">Products </h1>
//         <section id="Projects"
//           className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


//           <ProductCard
//             imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJWUV4Ew8HMdDDd5sHkiD6eaBaPZloKJ-OpXVUA8xxA&s"
//             productName="AGROCHEMICAL"

//           />

//           <ProductCard
//             imageUrl="https://www.crodapharma.com/mediaassets/images/health-care/health-care-new-website/png/adjuvant-systems-visual-nav.jpg?la=en-GB"

//             productName="ADJUVANT"
//           />


//           <ProductCard
//             imageUrl={supplements_img}

//             productName="BIOSTIMULANT"
//           />

//         </section>

//         <div className="relative mx-auto  mb-10 w-[70%]">
//           <img className="h-16 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
//           <div className="absolute inset-0 bg-green-900 opacity-50 rounded-md"></div>
//           <div className="absolute inset-0 flex items-center  justify-center">
//             <Link to='/agrochemical' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
//           </div>
//         </div>
//       </div>




//     </>



//   );
// }

// export default ResponsiveProductGrid;


