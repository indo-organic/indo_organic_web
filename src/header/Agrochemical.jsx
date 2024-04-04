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

      <div className="bg-gray-600 pb-20">


        <div class="relative mx-auto mt-10 w-full">
          <img class="h-64 w-full object-cover rounded-md object-center" src={agrochemicalImg} alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-3xl font-bold">Agrochemical</h2>
          </div>
        </div>



        {/* <p className="text-3xl  uppercase  text-center  p-3 
         text-red-700 ">Insecticide</p> */}
        <div class="relative mx-auto mt-5 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-bottom" src="https://www.thespruce.com/thmb/P_RO3BhitUHl1tIsb9EuIsxl6CM=/3000x2000/filters:no_upscale()/pyrethrin-insecticide-definition-1902891_Hero1-386797349e94413b8133a93e8008a582.jpg" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center pl-[3rem]">"
            <h2 class="text-white text-3xl font-bold">Insecticide</h2>
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
        <div class="relative mx-auto mt-5 mb-10 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center  justify-center">
            <Link to='/insecticide' class="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        <hr className="w-[80%] h-[1vh] bg-black  m-auto " />


        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">fungicide</p> */}
        <div class="relative mx-auto mt-5 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-bottom" src="https://c4.wallpaperflare.com/wallpaper/226/453/125/nature-moss-bokeh-macro-wallpaper-preview.jpg" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center pl-[3rem]">
            <h2 class="text-white text-3xl font-bold uppercase">fungicide</h2>
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
          <Link to='/fungicide' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See all products
          </Link>

        </div> */}

        <div class="relative mx-auto mt-5 mb-10 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-bottom" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center  justify-center">
            <Link to='/fungicide' class="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        <hr className="w-[80%] h-[1vh] bg-black  m-auto " />




        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">herbicide</p> */}
        <div class="relative mx-auto mt-5 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWzbsO48snZBYaB2xfMBdfPSoGUmG7aCM7MAKXUbe_Q&s" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center pl-[3rem]">
            <h2 class="text-white text-3xl font-bold uppercase">herbicide</h2>
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
          <Link to='/herbicide' class="bg-transparent  text-xl hover:bg-green-500 text-green-700 font-semibold hover:text-black py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See all products
          </Link>

        </div> */}

        <div class="relative mx-auto mt-5 mb-10 w-[70%]">
          <img class="h-32 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center  justify-center">
            <Link to='/herbicide' class="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Agrochemical