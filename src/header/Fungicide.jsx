import { Link } from "react-router-dom"
import IndoPrimeImg from '../product_image/indoprime.png'
import tangoplusImg from '../product_image/tangoplus.png'
import sulphieImg from '../product_image/sulfieImg.jpg'
import valinoImg from '../product_image/valino.png'
import tebnolImg from '../product_image/tebnol.png'
import tringoImg from '../product_image/tringo.png'
import demo70Img from '../product_image/demo70.png'

const FungiCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="h-[18rem] w-[15rem] flex-shrink-0 m-6 relative overflow-hidden bg-green-200 rounded-lg max-w-xs shadow-lg group">

    <div className="relative pt-12 px-12  flex items-center justify-center group-hover:scale-110 transition-transform">
      <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
        style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
      </div>

      <img className="relative  h-[10rem]" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="relative text-black px-6 pb-10 mt-6">

      <div className="flex justify-center items-center">

        <span className="opacity-75 uppercase font-bold text-black ">{name}</span>
      </div>
    </div>
  </div>
  );
};
const Fungicide = () => {
  return (
    <>





      {/* <h1 className="text-3xl font-bold mb-4 text-center  uppercase   bg-gray-800  text-white p-16">Fungicide</h1> */}
      <div className="bg-gray-200">


        <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.toddsmariettatreeservices.com/wp-content/uploads/lichens-on-tree-trunk.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">FUNGICIDE </h2>
          </div>
        </div>

        <div className="p-1 flex flex-wrap items-center justify-center">
          <Link to='/IndoPrime'>
            <FungiCard category="Generic" name="INDO-PRIME" seeMore="see more" sciName='ACTIVE INGREDIENT: Carbendazim 12% + Mancozeb 63% WP
'
              imageSrc={IndoPrimeImg}
              imageAlt="indo-prime" />
          </Link>

          <Link to='/tangoPlus'>
            <FungiCard category="Generic" name="TANGO-PLUS" seeMore="see more" sciName='ACTIVE INGREDIENT: Hexaconazole 5% SC'
              imageSrc={tangoplusImg}
              imageAlt="tangoPlus" />
          </Link>
          <Link to='/sulphie'>
            <FungiCard category="Generic" name="SULPHIE" seeMore="see more" sciName='ACTIVE INGREDIENT: Sulphur 80% WDG'
              imageSrc={sulphieImg}
              imageAlt="SULPHIE" />
          </Link>
          <Link to='/valino'>
            <FungiCard category="Generic" name="VALINO" seeMore="see more" sciName='ACTIVE INGREDIENT: Validamycin 3% L'
              imageSrc={valinoImg}
              imageAlt="VALINO" />
          </Link>
          <Link to='/tebnol'>
            <FungiCard category="Generic" name="TEBNOL" seeMore="see more" sciName='Azoxystrobin 11% + Tebuconazole 18.3% SC'
              imageSrc={tebnolImg}
              imageAlt="TEBNOL" />
          </Link>
          <Link to='/tringo'>
            <FungiCard category="Generic" name="TRINGO" seeMore="see more" sciName='Sulphur 65 % + Tebuconazole 10% WDG '
              imageSrc={tringoImg}
              imageAlt="TRINGO" />
          </Link>
          <Link to='/demo70'>
            <FungiCard category="Generic" name="DEMO-70" seeMore="see more" sciName='Thiophanate Methyl 70% WP'
              imageSrc={demo70Img}
              imageAlt="DEMO-70" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Fungicide