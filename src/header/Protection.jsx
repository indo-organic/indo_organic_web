import { Link } from "react-router-dom";
import allinImg from '../product_image/allin.png'
import fungi7Img from '../product_image/fungi7.png'
import fungiexImg from '../product_image/fungiEXs.png'
import curevImg from  '../product_image/curev.png'
import urbanImg from '../product_image/urban3.png'
const ProtCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="h-[29rem] w-[30rem] flex-shrink-0 m-6 relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg group">

      <div className="relative pt-12 px-12  flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
          style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>

        <img className="relative  h-[17rem]" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="relative text-black px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl uppercase" >{name}</span>
          <span className=" bg-gray-600 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
        </div>
        <span className="opacity-75 -mb-1">{sciName}</span>
      </div>
    </div>
  );
};
const Protection = () => {
  return (
    <>




      <div className="bg-gray-600">


        {/* <h1 className="text-3xl font-bold mb-4 text-center  uppercase   bg-gray-800  text-white p-16">insecticide</h1> */}
        <div className="relative mx-auto mt-10 w-full">
          <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://daisysgarden.com.au/web/image/595180-3bc6db29/jpg%20revive%20vs%20mushroom.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">PROTECTION</h2>
          </div>
        </div>

        <div className="p-1 flex flex-wrap items-center justify-center">
          <Link to='/Allin'>
            <ProtCard category="FOCUS" name="all-in" seeMore="see more" sciName=' Immunity Booster and Defence Activator'
              imageSrc={allinImg}
              imageAlt="allin" />
          </Link>

          <Link to='/Fungi7'>
            <ProtCard category="FOCUS" name="fungi-7" seeMore="see more" sciName='Fungal Growth Inhibitor '
              imageSrc={fungi7Img}
              imageAlt="fungi7" />
          </Link>

           
          <Link to='/FungiEX'>
            <ProtCard category="FOCUS" name="fungi-ex" seeMore="see more" sciName='Soil Borne Fungal Retardant'
              imageSrc={fungiexImg}
              imageAlt="fungiex" />
          </Link>

          <Link to='/Urban3'>
            <ProtCard category="FOCUS" name="urban-3" seeMore="see more" sciName='Botanical Insecticide For Sucking Pests'
              imageSrc={urbanImg}
              imageAlt="urban-3" />
          </Link>

          <Link to='/CureV'>
            <ProtCard category="FOCUS" name="cure-v" seeMore="see more" sciName='Herbal Virus Eradicator & Immunity Escalator'
              imageSrc={curevImg}
              imageAlt="curev" />
          </Link>






        </div>
      </div>












    </>
  )
}

export default Protection