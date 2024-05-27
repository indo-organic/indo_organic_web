import herboKingImg from '../../product_image/herboKing.png'
import herboKing_title from '../../titleImg/herboking.png'
const HerboKing = () => {
  return (
    <>


      <div className="relative mx-auto w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">Soil Revivers</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={herboKingImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={herboKing_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Herbo King is a Natural Bio Stimulant Granules and Plant
                Growth Promoter, derived from fermentation of Seaweed
                (Sargassum wightii). It also provides amino acid of vegetal
                origin which facilitates protein synthesis within the plant
                providing it with free amino acids, enabling energy saving.
                Its application improves soil structure, helps the plant cope
                with stressful situations. The end result is increased
                production and enhanced crop quality.
              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Increases fertility and productivity of soil. <br />
                Increases yield. <br />
                Increases resistance to disease and
                environmental stress. <br />
                Improves the photosynthesis rate. <br />
                Enhances nutrient uptake from the soil. <br />
                Acts as a natural chelator for micro
                elements in alkaline soil and increase
                their availability for plants.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Provides Bioenergy required for crops and contains all biologically derived micro and
                macro nutrients, betains, amino acids and many bioactive substances that provide
                bioenergy to plants.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Oilseeds, Fibre,
                Sugar, Forage Crops, Plantation Crops,
                Vegetables, Fruits, Spices, Flowers,
                Medicinal Crops, Aromatic Crops,
                Orchards and Ornamentals
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Top dressing or mix with fertilizers at any stage of crop
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3"> DOSAGE</h3>
              <p className='leading-relaxed m-4'>10-15 kg per acre.
</p>


            </div>


          </div>


        </div>
      </section>





    </>
  )
}

export default HerboKing