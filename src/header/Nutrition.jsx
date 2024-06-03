import { Link } from "react-router-dom";
import amigoImg from '../product_image/amigo.png'
import indoMagicImg from '../product_image/indomagic.png'
import helperLImg from '../product_image/helperL.png'
import fixCImg from '../product_image/fixC.png'
import autoMotoImg from '../product_image/autoMoto.png'
const NutritionCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
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

const Nutrition = () => {
    return (
        <>
            <div className="bg-gray-100">

                <div className="relative mx-auto  w-full">
                    <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://dpjh8al9zd3a4.cloudfront.net/image/h:720,w:1800/187279?s=d3fec701" alt="Random image" />
                    <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-3xl font-bold">PGRs/NUTRITION </h2>
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


                    {/* <Link to='/Bloomflower'>
                        <NutritionCard category="FOCUS" name="Bloom-Flower" seeMore="see more" sciName='---------------'
                            // imageSrc={amigoImg}

                            imageAlt="bloom flower" />
                    </Link> */}






                </div>
            </div>


        </>
    )
}

export default Nutrition