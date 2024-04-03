import { Link } from "react-router-dom"
import rukkaImg from '../product_image/rukka.png'
import alaskaImg from '../product_image/alaska.png'
import indoxamImg from '../product_image/indoxam.png'
import vaidImg from '../product_image/vaid.png'
import fiprosixImg from '../product_image/fiprosix.png'
import dhamaalImg from '../product_image/dhamaal.png'
import emanateImg from '../product_image/emanate.png'
import thypoImg from '../product_image/thypo.png'
import grit40Img from '../product_image/grit40.png'
import tropizImg from '../product_image/tropiz.png'

const InsectCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-700 rounded-lg max-w-xs shadow-lg group">
      
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
const Insecticide = () => {
  return (
    <>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <p classNameName="text-2xl p-3 capitalize">insecticide</p>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img  className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div classNameName="flex justify-evenly">

                <h2 className="text-gray-900 title-font text-lg font-medium">Rukka</h2>
                <Link to='/rukka'className="mt-1">
                Learn more
                </Link>
                </div>
              
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div classNameName="flex justify-around">
                <h2 className="text-gray-900 title-font text-lg font-medium">Alaska</h2>

                <Link to='/alaska'className="mt-1">
                 Learn more
                </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Cyphones</h2>
                <Link to='/cyphones'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Indoxam</h2>
                <Link to='/indoxam'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Vaid</h2>
                <Link to='/vaid'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Firposix</h2>
                <Link to='/fiprosix'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Dhamaal</h2>
                <Link to='/dhamaal'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Emanate</h2>
                <Link to='/emanate'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Thypo</h2>
                <Link to='/thypo'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Grid40</h2>
                <Link to='/grid40'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Tropiz</h2>
                <Link to='/tropiz'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Peak</h2>
                <Link to='/peak'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">vaid-L</h2>
                <Link to='/vaid_l'className="mt-1">
                 Learn more
                </Link>
              </div>
            </div>



          </div>
        </div>
      </section> */}





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
          <InsectCard category="Insecticide" name="CYPHORUS" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            // imageSrc={rukkaImg}
            imageAlt="cyphorus" />
        </Link>
        <Link to='/indoxam'>
          <InsectCard category="Generic" name="INDOXAM" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={indoxamImg}
            imageAlt="indoxam" />
        </Link>

        <Link to='/vaid'>
          <InsectCard category="Generic" name="VAID" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
            imageSrc={vaidImg}
            imageAlt="vaid" />
        </Link>
        <Link to='/fiprosix'>
          <InsectCard category="Generic" name="FIPROSIX" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={fiprosixImg}
            imageAlt="fiprosix" />
        </Link>
        <Link to='/dhamaal'>
          <InsectCard category="Generic" name="DHAMAAL" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={dhamaalImg}
            imageAlt="dhamaal" />
        </Link>

        <Link to='/emanate'>
          <InsectCard category="Generic" name="EMANATE" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
            imageSrc={emanateImg}
            imageAlt="emanate" />
        </Link>
        <Link to='/thypo'>
          <InsectCard category="Generic" name="THYPO" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={thypoImg}
            imageAlt="thypo" />
        </Link>
        <Link to='/grit40'>
          <InsectCard category="Generic" name="GRIT-40" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={grit40Img}
            imageAlt="grit-40" />
        </Link>
        <Link to='/tropiz'>
          <InsectCard category="Generic" name="TROPIZ" seeMore="see more" sciName='ACTIVE INGREDIENT: Cartap Hydrochloride 4% GR'
            imageSrc={tropizImg}
            imageAlt="tropiz" />
        </Link>
        <Link to='/peak'>
          <InsectCard category="Generic" name="PEAK" seeMore="see more" sciName='Profenofos 40% EC + Cypermethrin 4% EC'
            imageSrc={rukkaImg}
            imageAlt="peak" />
        </Link>
        <Link to='/vaidL'>
          <InsectCard category="Generic" name="VAID-L" seeMore="see more" sciName='ACTIVE INGREDIENT: Thiamethoxam 25% WG'
            imageSrc={rukkaImg}
            imageAlt="vaid-L" />
        </Link>
      



      </div>


    </>
  )
}

export default Insecticide