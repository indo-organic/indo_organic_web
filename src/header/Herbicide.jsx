import { Link } from "react-router-dom"

import proto50Img from '../product_image/proto50.png'
import emo10Img from '../product_image/emo10.png'
import timeupImg from '../product_image/timeup.png'
import nirolImg from '../product_image/nirol.png'
import cutnipImg from '../product_image/cutnip.png'
import auto32Img from '../product_image/auto32.png'


const HerbiCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg group">

      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
          style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>
        <img className="relative h-[17rem]" src={imageSrc} alt={imageAlt} />
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
const Herbicide = () => {
  return (
    <>
      <div className="bg-gray-600">


        {/* <h1 class="text-3xl font-bold mb-4 text-center  uppercase   bg-gr
      ay-800  text-white p-16">Herbicide</h1> */}
        <div class="relative mx-auto mt-10 w-full">
          <img class="h-64 w-full object-cover rounded-md object-bottom" src="https://assets.corteva.com/is/image/Corteva/Enlist-Herbicides-hero-desktop?$herol1_desktop$" alt="Random image" />
          <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-3xl font-bold">HERBICIDE </h2>
          </div>
        </div>

        <div className="p-1 flex flex-wrap items-center justify-center">
          <Link to='/proto50'>
            <HerbiCard category="Service" name="PROTO-50" seeMore="see more" sciName='ACTIVE INGREDIENT: Pretilachlor 50% EC
'
              imageSrc={proto50Img}
              imageAlt="PROTO-50" />
          </Link>

          <Link to='/emo10'>
            <HerbiCard category="Service" name="EMO-10" seeMore="see more" sciName=' ACTIVE INGREDIENT: Imazethapyr 10% SL
'
              imageSrc={emo10Img}
              imageAlt="emo10" />
          </Link>

          <Link to='/timeup'>
            <HerbiCard category="Service" name="TIME-UP" seeMore="see more" sciName='ACTIVE INGREDIENT: Ammonium Salt of Glyphosate 71% SG
'
              imageSrc={timeupImg}
              imageAlt="timeup" />
          </Link>

          <Link to='/nirol'>
            <HerbiCard category="Service" name="NIROL" seeMore="see more" sciName='ACTIVE INGREDIENT: Clodinafop + Propargyl 15% WP'
              imageSrc={nirolImg}
              imageAlt="nirol" />
          </Link>

          <Link to='/cutnip'>
            <HerbiCard category="Service" name="CUTNIP" seeMore="see more" sciName='ACTIVE INGREDIENT: 2-4 D Amine salt 58% SL
'
              imageSrc={cutnipImg}
              imageAlt="cutnip" />
          </Link>

          <Link to='/auto32'>
            <HerbiCard category="Service" name="AUTO-32" seeMore="see more" sciName='Pendimethalin 30% + Imazethapyr 2% EC
'
              imageSrc={auto32Img}
              imageAlt="AUTO32" />
          </Link>

          <Link to='/pitkit'>
            <HerbiCard category="Service" name="PIT-KIT" seeMore="see more" sciName='
'
              // imageSrc={emo10Img}
              imageAlt="PITKIT" />
          </Link>






        </div>

      </div>


    </>
  )
}

export default Herbicide