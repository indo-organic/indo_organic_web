import herbokingImg from '../product_image/herboKing.png'
import calcigoldImg from '../product_image/calcigold.png'
import herboKingAdvanceImg from '../product_image/herobokingAdvance.png'
import { Link } from "react-router-dom";
import biostimulantbg from '../assets/biostimulantbg.png'
const BioCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg group">
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
        </div>
        <img className="relative h-[20rem]" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="relative text-black px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl uppercase">{name}</span>
          <span className=" bg-gray-600 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
        </div>
        <span className="opacity-75 -mb-1">{sciName}</span>
      </div>
    </div>
  );
};
const Speciality = () => {
  return (
    <>


      <div className="bg-gray-600 pb-20">


        <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-center" src={biostimulantbg} alt="Random image" />
          <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">BIOSTIMULANT</h2>
          </div>
        </div>

        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">herbicide</p> */}
        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWzbsO48snZBYaB2xfMBdfPSoGUmG7aCM7MAKXUbe_Q&s" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem] ">
            <h2 className="text-white text-3xl font-bold uppercase  m-auto">soil revivers</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/CalciGold'>
            <BioCard category="biostimulant" name="calci-gold" seeMore="see more" sciName='-------------'
              imageSrc={calcigoldImg}
              imageAlt="calci-gold" />
          </Link>
          <Link to='/HerboKing'>
            <BioCard category="biostimulant" name="herbo-king" seeMore="see more" sciName='------------------L'
              imageSrc={herbokingImg}
              imageAlt="herboking" />
          </Link>
          <Link to='/HerboKingAdvance'>
            <BioCard category="biostimulant" name="herbo-king advance" seeMore="see more" sciName='---------------'
              imageSrc={herboKingAdvanceImg}
              imageAlt="herbokingadvance" />
          </Link>

        </div>
    

        <div className="relative mx-auto  w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/soilrevivers' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>






        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWzbsO48snZBYaB2xfMBdfPSoGUmG7aCM7MAKXUbe_Q&s" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem] ">
            <h2 className="text-white text-3xl font-bold uppercase  m-auto">PGRs NUTRITION</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/CalciGold'>
            <BioCard category="biostimulant" name="calci-gold" seeMore="see more" sciName='-------------'
              imageSrc={calcigoldImg}
              imageAlt="calci-gold" />
          </Link>
          <Link to='/HerboKing'>
            <BioCard category="biostimulant" name="herbo-king" seeMore="see more" sciName='------------------L'
              imageSrc={herbokingImg}
              imageAlt="herboking" />
          </Link>
          <Link to='/HerboKingAdvance'>
            <BioCard category="biostimulant" name="herbo-king advance" seeMore="see more" sciName='---------------'
              imageSrc={herboKingAdvanceImg}
              imageAlt="herbokingadvance" />
          </Link>

        </div>
    

        <div className="relative mx-auto  w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://w0.peakpx.com/wallpaper/1010/898/HD-wallpaper-green-leafed-plants-shallow-graphy-dark-theme-dark-theme.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/Nutrition' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>













      </div>



      



    </>
  )
}

export default Speciality