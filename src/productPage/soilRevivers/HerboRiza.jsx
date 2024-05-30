import herborizaImg from '../../product_image/herboRiza.png'
import herboriza_title from '../../titleImg/herboriza.png'
const HerboRiza = () => {
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
              <img className="w-full h-full object-cover" src={herborizaImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={herboriza_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Herbo-Riza is a combination of bioactive substances, organic matter
                and chelators that helps plant reach, breakup and mobilize
                otherwise unavailable soil nutrients. It has a significant impact on
                nutrient cycle as the chelators present in each granule are able to
                activity absorb the nutrients from the rhizosphere and make it
                available to the plant.
              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>Improves root growth and development.
                • Improves the uptake and mobilization of essential nutrients in all crops.
                • Increases and facilitates nutrient and translocation from the rhizosphere to the
                plants.
                • Effective in overcoming the stress condition like drought, disease incidence
                and deficiency of nutrients.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>The chelating agents which are present in Herbo-Riza bonds with nutrients
                in order to provide the best nutrition possible. This process provides many added
                benefits such as increased nutrient mobility, nutrient precipitation prevention,
                and the avoidance of nutrient leaching.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET CROPS</h3>
              <p className='leading-relaxed m-4'>It can be used in all types of crops
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>Soil Application : Herbo Riza@ 4Kg/acre in 50 Kg of well
                Decomposed FYM/ Compost/ Vermicompost, Field Soil
                and incorporate in the soil before sowing/transplant. <br /> <br />
                Standing Crops: Broadcast, the above mixture 25-30
                days after sowing</p>
            </div>


          </div>


        </div>
      </section>








    </>
  )
}

export default HerboRiza