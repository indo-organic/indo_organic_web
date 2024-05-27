import indomagicImg from '../../product_image/indomagic.png'
import indomagic_title from '../../titleImg/indomagic.png'
const IndoMagic = () => {
  return (
    <>

      <div className="relative mx-auto w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">Nutrition</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={indomagicImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={indomagic_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Indo-Magic is 100% natural water-soluble and is in the form
                of noodles. It is formulated from soluble Seaweed extract
                derived from the Ascophyilum nodosum. It contains
                sufficient amount of oceanic bio-active matter and other
                molecules such as Phy cocol loid, Mannitol,
                Oligosaccharide, Polyphenol, Trehalase, Cytokinin,
                Betaine, Lignin etc which are essential for improving
                germination, root development, leaf quality, general plant
                vigor and resistance to pathogens. which in turn stimulate
                the growth of the plant root system as well as boost soil
                microbial activity.


              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Increases crop yield and quality.
                Corrects the imbalance of all nutrients in Crops. <br />
                Improves the uptake of nutrients. <br />
                Improves blossom and fruit set. <br />
                Improves root structure and development. <br />
                Prevents disease and heat stress. <br />
                Helps plant to endure environmental stress. <br />
                It accelerates the growth rate of plants and
                improves disease resistance.
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Stimulates the growth of the plant root system. <br />
                Boosts Soil microbial activity

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Oilseeds, Fibre, Sugar,
                Forage Crops, Plantation Crops, Vegetables,
                Fruits, Spices, Flowers, Medicinal Crops, Aromatic
                Crops, Orchards and Ornamentals.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'> Spray after 20-25 days of sowing or transplanted crops.
                150 gm per acre to be diluted with 150-200 ltr of water.

              </p>



            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default IndoMagic