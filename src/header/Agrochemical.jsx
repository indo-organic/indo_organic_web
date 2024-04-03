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

const AgroCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-700 rounded-lg max-w-xs shadow-lg group">
      {/* <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
      </svg> */}
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>
        <img className="relative w-40 h-60" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{name}</span>
          <span className=" bg-white rounded-full text-green-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
        </div>
        <span className="opacity-75 -mb-1">{sciName}</span>
      </div>
    </div>
  );
};
const Agrochemical = () => {
  return (
    < >

      <div class="relative mx-auto mt-10 w-full">
        <img class="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-white text-3xl font-bold">Agrochemical</h2>
        </div>
      </div>




      <p className="text-3xl  uppercase  text-center  p-3  text-red-700 ">Insecticide</p>
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
      <div className="w-ful text-center p-4 ">
        <Link to='/insecticide' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
          See all products
        </Link>

      </div>


      <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">fungicide</p>
      <div className="p-1 flex flex-wrap items-center justify-center ">
        <Link to='/rukka'>
          <AgroCard category="Fungicide" name="INDO-PRIME" seeMore="see more" sciName='ACTIVE INGREDIENT: Carbendazim 12% + Mancozeb 63% WP'
            imageSrc={indoPrimeImg}
            imageAlt="indoprime" />
        </Link>
        <Link to='/alaska'>
          <AgroCard category="Fungicide" name="TANGO-PLUS" seeMore="see more" sciName='ACTIVE INGREDIENT: Hexaconazole 5% SC'
            imageSrc={tangoPlusImg}
            imageAlt="tangoplus" />
        </Link>
        <Link to='/indoxam'>
          <AgroCard category="Fungicide" name="SULPHIE" seeMore="see more" sciName='ACTIVE INGREDIENT: Sulphur 80% WDG'
            imageSrc={sulfieImg}
            imageAlt="sulphie" />
        </Link>

      </div>
      <div className="w-ful text-center p-4 ">
        <Link to='/fungicide' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
          See all products
        </Link>

      </div>


      <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">herbicide</p>
      <div className="p-1 flex flex-wrap items-center justify-center ">
        <Link to='/rukka'>
          <AgroCard category="Herbicide" name="PROTO-50" seeMore="see more" sciName='ACTIVE INGREDIENT: Pretilachlor 50% EC'
            imageSrc={protoImg}
            imageAlt="proto" />
        </Link>
        <Link to='/alaska'>
          <AgroCard category="Herbicide" name="EMO-10" seeMore="see more" sciName='ACTIVE INGREDIENT: Imazethapyr 10% SL'
            imageSrc={emoImg}
            imageAlt="emo" />
        </Link>
        <Link to='/indoxam'>
          <AgroCard category="Herbicide" name="TIME-UP" seeMore="see more" sciName='ACTIVE INGREDIENT: Ammonium Salt of Glyphosate 71% SG'
            imageSrc={timeupImg}
            imageAlt="timeup" />
        </Link>

      </div>
      <div className="w-ful text-center p-4 ">
        <Link to='/fungicide' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
          See all products
        </Link>

      </div>


    </>
  )
}

export default Agrochemical