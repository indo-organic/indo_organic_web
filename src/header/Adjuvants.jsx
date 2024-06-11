import React from 'react'
import { Link } from "react-router-dom"
import comboBImg from '../productPage/adjuvants/comboImg.jpg'

const AgroCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="h-[18rem] w-[15rem] flex-shrink-0 m-6 relative overflow-hidden bg-green-800 rounded-lg max-w-xs shadow-lg group">

    <div className="relative pt-12 px-12  flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>

        <img className="relative  h-[10rem]" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="relative text-black px-6 pb-10 mt-6">

        <div className="flex justify-center items-center">

            <span className="opacity-75 uppercase  text-white ">{name}</span>
        </div>
    </div>
</div>
  );
};
const Adjuvants = () => {
  return (
    <>

      <div className="relative mx-auto  w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.creative-biolabs.com/vaccine/images/Adjuvant-Emulsions-1.jpg" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">ADJUVANTS</h2>
        </div>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-center bg-gray-600 h-[70vh]">
        <Link to='/comboB'>
          <AgroCard category="Adjuvant" name="COMBO-B" seeMore="see more" sciName='Organosilicone Based Spray Adjuvant'
            imageSrc={comboBImg}
            imageAlt="combob" />
        </Link>

      </div>


    </>
  )
}

export default Adjuvants