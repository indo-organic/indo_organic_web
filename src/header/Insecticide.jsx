// import { Link } from "react-router-dom"


import rukkaImg from '../prod_img/rukka.jpg'
import alaskaImg from '../prod_img/alaska.jpg'
import indoxamImg from '../prod_img/indoxam.jpg'
import vaidImg from '../prod_img/vaid.jpg'



import indoPrimeImg from '../prod_img/indoPrimeImg.jpg'
// import tangoPlusImg from '../prod_img/tangoplusImg.jpg'
// import sulfieImg from '../prod_img/sulfieImg.jpg'



// import protoImg from '../prod_img/protoImg.jpg'
// import emoImg from '../prod_img/emo10Img.jpg'
// import timeupImg from '../prod_img/timeupImg.jpg'



const ProductCard = ({ category, name, seeMore, imageSrc, imageAlt }) => {
    return (
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg group">
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
                </div>
                <img className="relative w-40" src={imageSrc} alt={imageAlt} />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{category}</span>
                <div className="flex justify-between">
                    <span className="block font-semibold text-xl">{name}</span>
                    <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{seeMore}</span>
                </div>
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



            {/* <p classNameName="text-3xl  capitalize m-auto p-3  text-red-700">Insecticide</p>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


        <div className="w-72 h-90 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/rukka'>
            <img src={rukkaImg}
              alt="Product" className="w-[84%] mt-3 mb-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Rukka</p>
            </div>
          </Link>
        </div>



        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/alaska'>
            <img src={alaskaImg}
              alt="Product" className="w-[84%] mt-3 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Alaska</p>
            </div>
          </Link>
        </div>

        <div className="w-72 h-90 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <Link to='/cyphones'>
            <img src={timeupImg}
              alt="Product" className="w-[89%] mt-3 mb-4 object-cover rounded-t-xl m-auto" />
            <div className="px-4 py-3 w-72 bg-green-400">
              <span className="text-gray-800 mr-3 uppercase text-xs">Service</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Cyphones</p>
            </div>
          </Link>
        </div>




      </section> */}




            <div className="p-1 flex flex-wrap items-center justify-center">
                <ProductCard category="service" name="rukka" seeMore="see more"
                    imageSrc={rukkaImg}
                    imageAlt="rukka" />
                <ProductCard category="service" name="Alaska" seeMore="see more"
                    imageSrc={alaskaImg}
                    imageAlt="alaska" />

                <ProductCard category="Generic" name="indo Prime" seeMore="see more"
                    imageSrc={indoPrimeImg}
                    imageAlt="indoxam" />

                <ProductCard category="generic" name="Vaid" seeMore="see more"
                    imageSrc={vaidImg}
                    imageAlt="vaid" />


            </div>


        </>
    )
}

export default Insecticide