import { Link } from "react-router-dom"
import rukkaImg from '../product_image/rukka.png'
import alaskaImg from '../product_image/alaska.png'
import cyphorusImg  from '../product_image/cyphorus.png'
import indoxamImg from '../product_image/indoxam.png'
import vaidImg from '../product_image/vaid.png'
import fiprosixImg from '../product_image/fiprosix.png'
import dhamaalImg from '../product_image/dhamaal.png'
import emanateImg from '../product_image/emanate.png'
import thypoImg from '../product_image/thypo.png'
import grit40Img from '../product_image/grit40.png'
import tropizImg from '../product_image/tropiz.png'
import vaidLImg from '../product_image/vaidL.png'

const InsectCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-700 rounded-lg max-w-xs shadow-lg group">
      
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
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
const Insecticide = () => {
  return (
    <>
    

<h1 class="text-3xl font-bold mb-4 text-center  uppercase   bg-gray-800  text-white p-16">insecticide</h1>

      <div className="p-1 flex flex-wrap items-center justify-center">
        <Link to='/rukka'>
          <InsectCard category="Service" name="RUKKA" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
            imageSrc={rukkaImg}
            imageAlt="RUKKA" />
        </Link>
        <Link to='/alaska'>
          <InsectCard category="Service" name="ALASKA" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={alaskaImg}
            imageAlt="alaska" />
        </Link>
        <Link to='/cyphorus'>
          <InsectCard category="Insecticide" name="CYPHORUS" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={cyphorusImg}
            imageAlt="cyphorus" />
        </Link>
        <Link to='/indoxam'>
          <InsectCard category="Generic" name="INDOXAM" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={indoxamImg}
            imageAlt="indoxam" />
        </Link>

        <Link to='/vaid'>
          <InsectCard category="Generic" name="VAID" seeMore="see more" sciName='ACTIVE INGREDIENT: Fipronil 0.3% GR'
            imageSrc={vaidImg}
            imageAlt="vaid" />
        </Link>
        <Link to='/fiprosix'>
          <InsectCard category="Generic" name="FIPROSIX" seeMore="see more" sciName='ACTIVE INGREDIENT: Fipronil 0.6% GR'
            imageSrc={fiprosixImg}
            imageAlt="fiprosix" />
        </Link>
        <Link to='/dhamaal'>
          <InsectCard category="Generic" name="DHAMAAL" seeMore="see more" sciName='ACTIVE INGRE: Lambda Cypermethrin 4.9% CS'
            imageSrc={dhamaalImg}
            imageAlt="dhamaal" />
        </Link>

        <Link to='/emanate'>
          <InsectCard category="Generic" name="EMANATE" seeMore="see more" sciName='ACTIVE INGREDIENT: Emamectin Benzonate 5% SG'
            imageSrc={emanateImg}
            imageAlt="emanate" />
        </Link>
        <Link to='/thypo'>
          <InsectCard category="Generic" name="THYPO" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 30% (FS)'
            imageSrc={thypoImg}
            imageAlt="thypo" />
        </Link>
        <Link to='/grit40'>
          <InsectCard category="Generic" name="GRIT-40" seeMore="see more" sciName='fipronil 40% + Imidacloprid 40% WG'
            imageSrc={grit40Img}
            imageAlt="grit-40" />
        </Link>
        <Link to='/tropiz'>
          <InsectCard category="Generic" name="TROPIZ" seeMore="see more" sciName='Thiamethoxam 12.6% + Lambdacyhalothrin 9.5% ZC'
            imageSrc={tropizImg}
            imageAlt="tropiz" />
        </Link>
        <Link to='/peak'>
          <InsectCard category="Generic" name="PEAK" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            // imageSrc={rukkaImg}
            imageAlt="peak" />
        </Link>
        <Link to='/vaidL'>
          <InsectCard category="Generic" name="VAID-L" seeMore="see more" sciName='ACTIVE INGREDIENT: fipronil 5% SC'
            imageSrc={vaidLImg}
            imageAlt="vaid-L" />
        </Link>
      



      </div>


    </>
  )
}

export default Insecticide