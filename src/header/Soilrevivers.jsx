import herbokingImg from '../product_image/herboKing.png'
import calcigoldImg from '../product_image/calcigold.png'
import herboKingAdvanceImg from '../product_image/herobokingAdvance.png'
import TotalGRImg from '../product_image/totalgr.png'
import totolgrAdvance from '../product_image/totolgrAdvance.png'
import herboRiza from '../product_image/herboRiza.png'
import humimax from '../product_image/humimax.png'
import { Link } from "react-router-dom";

const SoilReviverCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
    return (
        <div className="h-[18rem] w-[15rem] flex-shrink-0 m-6 relative overflow-hidden bg-green-800 rounded-lg max-w-xs shadow-lg group">

        <div className="relative pt-12 px-12  flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="block absolute w-52 h-48  bottom-0 left-0 -mb-24 ml-3"
                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
            </div>
    
            <img className="relative  h-[10rem]" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="relative text-black px-6 pb-10 mt-6">
    
            <div className="flex justify-center items-center">
    
                <span className="opacity-75 uppercase  text-white ">{name}</span>
            </div>
        </div>
    </div>
    );
};
const Soilrevivers = () => {
    return (
        <>

            <div className="bg-white">


                {/* <h1 className="text-3xl font-bold mb-4 text-center  uppercase   bg-gray-800  text-white p-16">insecticide</h1> */}
                <div className="relative mx-auto  w-full">
                    <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://daisysgarden.com.au/web/image/595180-3bc6db29/jpg%20revive%20vs%20mushroom.jpg" alt="Random image" />
                    <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-3xl font-bold">SOIL REVIVERS </h2>
                    </div>
                </div>

                <div className="p-1 flex flex-wrap items-center justify-center">
                    <Link to='/CalciGold'>
                        <SoilReviverCard category="GENERIC" name="calci-gold" seeMore="see more" sciName='Organic Calcium Based Granules
'
                            imageSrc={calcigoldImg}
                            imageAlt="calci-gold" />
                    </Link>
                    <Link to='/HerboKing'>
                        <SoilReviverCard category="GENERIC" name="herbo-king" seeMore="see more" sciName='Organically Derived Plant Vitalizer'
                            imageSrc={herbokingImg}
                            imageAlt="herboking" />
                    </Link>
                    <Link to='/HerboKingAdvance'>
                        <SoilReviverCard category="FOCUS" name="herbo-king advance" seeMore="see more" sciName='Naturally Derived Plant Energizer'
                            imageSrc={herboKingAdvanceImg}
                            imageAlt="herbokingadvance" />
                    </Link>


                    <Link to='/TotalGR'>
                        <SoilReviverCard category="FOCUS" name="total-gr" seeMore="see more" sciName='Root Growth Accelerator & Yield Enhancer'
                            imageSrc={TotalGRImg}
                            imageAlt="total-gr" />
                    </Link>


                    {/* <Link to='/CalciGoldPlus'>
                        <SoilReviverCard category="FOCUS" name="calci-gold (+)" seeMore="see more" sciName='---------------'
                            imageSrc={TotalGRImg}
                            imageAlt="calcigoldplus" />
                    </Link> */}


                    <Link to='/TotalGRAdvance'>
                        <SoilReviverCard category="key" name="total-gr advance" seeMore="see more" sciName='Plant Growth Accelerator & Yield Enhancer'
                            imageSrc={totolgrAdvance}
                            imageAlt="totalgrAdvance" />
                    </Link>


                    <Link to='/Humimax'>
                        <SoilReviverCard category="KEY" name="humi-max" seeMore="see more" sciName='Humic Enriched Soil Reviver'
                            imageSrc={humimax}
                            imageAlt="humixam" />
                    </Link>

                    <Link to='/HerboRize'>
                        <SoilReviverCard category="KEY" name="herbo-riza" seeMore="see more" sciName='Root Zone Nutrient Chelator & Plant Nurturer'
                            imageSrc={herboRiza}
                            imageAlt="herboriza" />
                    </Link>



                </div>
            </div>












        </>
    )
}

export default Soilrevivers