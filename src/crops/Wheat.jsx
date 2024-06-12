
import { Link } from "react-router-dom";
import amigoImg from '../product_image/amigo.png'
import indoMagicImg from '../product_image/indomagic.png'
import helperLImg from '../product_image/helperL.png'
import fixCImg from '../product_image/fixC.png'
import autoMotoImg from '../product_image/autoMoto.png'
// const NutritionCard = ({ name, imageSrc, imageAlt, }) => {
//     return (
//         <div className="h-[18rem] w-[15rem] flex-shrink-0 m-6 relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg group">

//             <div className="relative pt-12 px-12  flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
//                     style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
//                 </div>

//                 <img className="relative  h-[10rem]" src={imageSrc} alt={imageAlt} />
//             </div>
//             <div className="relative text-black px-6 pb-10 mt-6">

//                 <div className="flex justify-center items-center">

//                     <span className="opacity-75 uppercase  ">{name}</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

const Wheat= () => {
    return (
        <>
            {/* <div className="bg-white h-[50rem]">

                <div className="relative mx-auto  w-full">
                    <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://dpjh8al9zd3a4.cloudfront.net/image/h:720,w:1800/187279?s=d3fec701" alt="Random image" />
                    <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-3xl font-bold">Wheat </h2>
                    </div>
                </div>

                <div className="p-1 flex flex-wrap items-center justify-center">
                    <Link to='/Amigo'>
                        <NutritionCard category="KEY" name="amigo" seeMore="see more" sciName='Amino Rich Bio-Stimulator'
                            imageSrc={amigoImg}
                            imageAlt="amigo" />
                    </Link>
                    <Link to='/IndoMagic'>
                        <NutritionCard category="KEY" name="INDO-MAGIC" seeMore="see more" sciName='Phyto-Extruded Plant Augmenter and Yield Enhancer'
                            imageSrc={indoMagicImg}

                            imageAlt="INDO-MAGIC" />
                    </Link>
                    <Link to='/HelperL'>
                        <NutritionCard category="KEY" name="HelperL" seeMore="see more" sciName='Premium Sargassum Enriched Liquid Energizer'
                            imageSrc={helperLImg}

                            imageAlt="helperL" />
                    </Link>


                    <Link to='/AutoMoto'>
                        <NutritionCard category="KEY" name="AUTO-MOTO" seeMore="see more" sciName='Plant quality and yield enhancer (With trace elements)'
                            imageSrc={autoMotoImg}

                            imageAlt="AUTO-MOTO" />
                    </Link>


                    <Link to='/FixC'>
                        <NutritionCard category="FOCUS" name="fix-c" seeMore="see more" sciName='Organic carbon sequester and stabilizer'
                            imageSrc={fixCImg}

                            imageAlt="fix-c" />
                    </Link>

                </div>
            </div> */}


            <div className="relative mx-auto  w-full">
                <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhmhR4eel5jA-kEkkiTD0yRkqaj7ShVgjTA&s" alt="Random image" />
                <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">Wheat </h2>
                </div>
            </div>
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

                <Link to='/flowers' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSkYU3RPFcs82FOb5BpbhBnkKyEiq_biNVQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Insecticide</p>

                    </div>

                </Link>

                <Link to='/fruits' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8idzHtNwohGJx-OCjUjVr3h7MhyIlI0hxhQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Fungicide</p>

                    </div>

                </Link>

                <Link to='/vegetables' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdCv6T-wHcmva1lSny2HBmGWsgrj9hW4oPg3QRsxsNg2QJJw1RZLlMU-sLiVGdeA8bU&usqp=CAU" alt="Product" className="h-40 w-full  rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Herbicide</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiURP038ZdM16ArCahWa6yNqWCqR8-DWJxkg&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Soil Revivers</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://gard.in/cdn/shop/articles/nutrient-mobility-in-soil-plants-604818.jpg?v=1694540529' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Nutrition</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGzIkmdEkZMY8Ju3wB2S8mXS2gb55pjbjAWNazHsrZPncoC-65pDCOdtcxUQuU7zIPQQ&usqp=CAU' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Protection</p>

                    </div>

                </Link>
            </section>

        </>
    )
}

export default Wheat

