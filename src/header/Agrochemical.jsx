import { Link } from "react-router-dom"
import '../styles/Agrochemical.scss'
import rukkaImg from '../product_image/rukka.png'
import alaskaImg from '../product_image/alaska.png'
import indoxamImg from '../product_image/indoxam.png'


import indoPrimeImg from '../product_image/indoprime.png'

import tangoPlusImg from '../product_image/tangoplus.png'
import sulfieImg from '../product_image/sulfieImg.jpg'

import protoImg from '../product_image/proto50.png'
import emoImg from '../product_image/emo10.png'
import timeupImg from '../product_image/timeup.png'

import agrochemicalImg from '../AboutImg/aboutImg3.jpg'

const AgroCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg group">
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>
        <img className="relative h-[18rem]" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="relative text-black px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{name}</span>
          <span className=" bg-gray-600 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
        </div>
        <span className="opacity-75 -mb-1">{sciName}</span>
      </div>
    </div>
  );
};
const Agrochemical = () => {
  return (
    < >
      <div  className="flex flex-col w-[100%]  bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{
          backgroundImage: 'url(https://www.icolorpalette.com/download/solidcolorimage/43464b_solid_color_background_icolorpalette.png)',
        }}>


        <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-center" src={agrochemicalImg} alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Agrochemical</h2>
          </div>
        </div>



        {/* <p className="text-3xl  uppercase  text-center  p-3 
         text-red-700 ">Insecticide</p> */}
        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-bottom" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem]">"
            <h2 className="text-white text-3xl font-bold">INSECTICIDE</h2>
          </div>
        </div>

        <div className="p-1 flex flex-wrap items-center justify-center">
          <Link to='/rukka'>
            <AgroCard category="Insecticide" name="RUKKA" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
              imageSrc={rukkaImg}
              imageAlt="RUKKA" />
          </Link>
          <Link to='/alaska'>
            <AgroCard category="Insecticide" name="ALASKA" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
              imageSrc={alaskaImg}
              imageAlt="alaska" />
          </Link>
          <Link to='/indoxam'>
            <AgroCard category="Insecticide" name="INDOXAM" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
              imageSrc={indoxamImg}
              imageAlt="indoxam" />
          </Link>

        </div>
        <div className="relative mx-auto  mb-10 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/insecticide' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        <hr className="w-[80%] h-[1vh] bg-black  m-auto " />


        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">fungicide</p> */}
        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-bottom" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem]">
            <h2 className="text-white text-3xl font-bold uppercase">fungicide</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/indoprime'>
            <AgroCard category="Fungicide" name="INDO-PRIME" seeMore="see more" sciName='ACTIVE INGREDIENT: Carbendazim 12% + Mancozeb 63% WP'
              imageSrc={indoPrimeImg}
              imageAlt="indoprime" />
          </Link>
          <Link to='/tangoplus'>
            <AgroCard category="Fungicide" name="TANGO-PLUS" seeMore="see more" sciName='ACTIVE INGREDIENT: Hexaconazole 5% SC'
              imageSrc={tangoPlusImg}
              imageAlt="tangoplus" />
          </Link>
          <Link to='/sulphie'>
            <AgroCard category="Fungicide" name="SULPHIE" seeMore="see more" sciName='ACTIVE INGREDIENT: Sulphur 80% WDG'
              imageSrc={sulfieImg}
              imageAlt="sulphie" />
          </Link>

        </div>
        {/* <div className="w-ful text-center p-4 ">
          <Link to='/fungicide' className="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See all products
          </Link>

        </div> */}

        <div className="relative mx-auto  mb-10 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-bottom" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/fungicide' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        <hr className="w-[80%] h-[1vh] bg-black  m-auto " />




        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">herbicide</p> */}
        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem]">
            <h2 className="text-white text-3xl font-bold uppercase">herbicide</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/proto'>
            <AgroCard category="Herbicide" name="PROTO-50" seeMore="see more" sciName='ACTIVE INGREDIENT: Pretilachlor 50% EC'
              imageSrc={protoImg}
              imageAlt="proto" />
          </Link>
          <Link to='/emo'>
            <AgroCard category="Herbicide" name="EMO-10" seeMore="see more" sciName='ACTIVE INGREDIENT: Imazethapyr 10% SL'
              imageSrc={emoImg}
              imageAlt="emo" />
          </Link>
          <Link to='/timeup'>
            <AgroCard category="Herbicide" name="TIME-UP" seeMore="see more" sciName='ACTIVE INGREDIENT: Ammonium Salt of Glyphosate 71% SG'
              imageSrc={timeupImg}
              imageAlt="timeup" />
          </Link>

        </div>
        {/* <div className="w-ful text-center p-4 ">
          <Link to='/herbicide' className="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See all products
          </Link>

        </div> */}

        <div className="relative mx-auto mb-10 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/herbicide' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Agrochemical









// import React, { useState } from "react";

// const Portfolio = () => {
//   const [showCard, setShowCard] = useState("all");

//   const handleProject = (category) => {
//     setShowCard(category);
//   };

//   return (
//     <>
//       <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                 <span className="text-primary mb-2 block text-lg font-semibold">
//                   Our Portfolio
//                 </span>
//                 <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
//                   Our Recent Projects
//                 </h2>
//                 <p className="text-body-color text-base dark:text-dark-6">
//                   There are many variations of passages of Lorem Ipsum available
//                   but the majority have suffered alteration in some form.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full flex flex-wrap justify-center -mx-4">
//             <div className="w-full px-4">
//               <ul className="flex flex-wrap justify-center mb-12 space-x-1">
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("all")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "all"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     All Projects
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("branding")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "branding"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Branding
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("design")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "design"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Design
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("marketing")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "marketing"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Marketing
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("development")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "development"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Development
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-4">
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
//               category="Branding"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
//               category="marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
//               category="marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
//               category="Development"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
//               category="Design"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
//               category="Marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

// const PortfolioCard = ({
//   showCard,
//   category,
//   ImageHref,
//   title,
//   button,
//   buttonHref,
// }) => {
//   return (
//     <>
//       <div
//         className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
//           showCard === "all" || showCard === category.toLowerCase()
//             ? "block"
//             : "hidden"
//         }`}
//       >
//         <div className="relative mb-12">
//           <div className="overflow-hidden rounded-[10px]">
//             <img src={ImageHref} alt="portfolio" className="w-full" />
//           </div>
//           <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
//             <span className="text-primary mb-2 block text-sm font-medium">
//               {category}
//             </span>
//             <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
//             <a
//               href={buttonHref}
//               className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
//             >
//               {button}
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
