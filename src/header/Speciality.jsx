import herbokingImg from '../product_image/herboKing.png'
import calcigoldImg from '../product_image/calcigold.png'
// import herboKingAdvanceImg from '../product_image/herobokingAdvance.png'
import totalgrImg from '../product_image/totalgr.png'
import amigoImg from '../product_image/amigo.png'
import  allinImg from '../product_image/allin.png'
import fungi7Img from '../product_image/fungi7.png'
import fungiexImg from '../product_image/fungiEXs.png'
import indomagicImg from '../product_image/indomagic.png'
import  helperLImg from '../product_image/helperL.png'
import { Link } from "react-router-dom";
// import biostimulantbg from '../assets/biostimulantbg.png'
const BioCard = ({ category, name, seeMore, imageSrc, imageAlt, sciName }) => {
  return (
    <div className="bg-gray-200">

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
  );
};
const Speciality = () => {
  return (
    <>


      <div className="bg-white pb-20">


        <div className="relative mx-auto  w-full">
          {/* <img className="h-64 w-full object-cover rounded-md object-center" src={biostimulantbg} alt="Random image" /> */}
          <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">BIOSTIMULANT</h2>
          </div>
        </div>

        {/* <p className="text-3xl  uppercase  text-center p-3  text-red-700 ">herbicide</p> */}
        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem] ">
            <h2 className="text-white text-3xl font-bold uppercase">soil revivers</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center  ">
          <Link to='/CalciGold'>
            <BioCard category="biostimulant" name="calci-gold" seeMore="see more" sciName='Organic Calcium Based Granules
'
              imageSrc={calcigoldImg}
              imageAlt="calci-gold" />
          </Link>
          <Link to='/HerboKing'>
            <BioCard category="biostimulant" name="herbo-king" seeMore="see more" sciName='Organically Derived Plant Vitalizer'
              imageSrc={herbokingImg}
              imageAlt="herboking" />
          </Link>
          <Link to='/Totalgr'>
            <BioCard category="biostimulant" name="total-gr" seeMore="see more" sciName='Root Growth Accelerator & Yield Enhancer'
              imageSrc={totalgrImg}
              imageAlt="totalgr" />
          </Link>

        </div>
    

        <div className="relative mx-auto mb-10  w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/soilrevivers' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>


        
                   



        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem] ">
            <h2 className="text-white text-3xl font-bold uppercase"> NUTRITION</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/Amigo'>
            <BioCard category="biostimulant" name="amigo" seeMore="see more" sciName='Amino Rich Bio-Stimulator'
              imageSrc={amigoImg}
              imageAlt="amigo" />
          </Link>
          <Link to='/IndoMagic'>
            <BioCard category="biostimulant" name="Indo-magic" seeMore="see more" sciName='Phyto-Extruded Plant Augmenter and Yield Enhancer'
              imageSrc={indomagicImg}
              imageAlt="indo-magic" />
          </Link>
          <Link to='/HelperL'>
            <BioCard category="biostimulant" name="helper-L" seeMore="see more" sciName='Premium Sargassum Enriched Liquid Energizer'
              imageSrc={helperLImg}
              imageAlt="helperL" />
          </Link>

        </div>
    

        <div className="relative mx-auto  mb-10 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/Nutrition' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>



    
             


        <div className="relative mx-auto mt-5 w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center pl-[3rem] ">
            <h2 className="text-white text-3xl font-bold uppercase  ">PROTECTION</h2>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center ">
          <Link to='/AllIn'>
            <BioCard category="biostimulant" name="All-in" seeMore="see more" sciName=' Immunity Booster and Defence Activator'
              imageSrc={allinImg}
              imageAlt="All-in" />
          </Link>
          <Link to='/Fungi7'>
            <BioCard category="biostimulant" name="fungi-7" seeMore="see more" sciName='Fungal Growth Inhibitor '
              imageSrc={fungi7Img}
              imageAlt="fungi-7" />
          </Link>
          <Link to='/Fungiex'>
            <BioCard category="biostimulant" name="fungi-ex" seeMore="see more" sciName='Soil Borne Fungal Retardant'
              imageSrc={fungiexImg}
              imageAlt="fungi-ex" />
          </Link>

        </div>
    

        <div className="relative mx-auto  w-[70%]">
          <img className="h-16 w-full object-cover rounded-md object-center" src="https://media.istockphoto.com/id/1523130039/photo/green-rustic-texture-high-quality-texture-in-extremely-high-resolution-dark-green-grunge.webp?b=1&s=170667a&w=0&k=20&c=hajEuftZDwIPT6PnIANZGjS7MWgiWGOlvYxqNaM3Z9g=" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <Link to='/Protection' className="text-white text-3xl font-bold hover:text-gray-900 hover:text-[2rem]">see all products</Link>
          </div>
        </div>




      </div>
    </>
  )
}

export default Speciality