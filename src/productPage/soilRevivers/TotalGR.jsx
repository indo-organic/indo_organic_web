import totalgrImg from '../../product_image/totalgr.png'
import totalgr_title from '../../titleImg/totalgr.png'

const TotalGR = () => {
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
              <img className="w-full h-full object-cover" src={totalgrImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={totalgr_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Total-Gr is a unique biostimulant granule based on bioactive humic
                and fulvic substances derived from seaweed. It helps in retention of
                flowers, activates soil bacteria, specially rhizosphere bacteria which
                are responsible for better growth of root system. It comprises mixture
                of bioactive substances extracted from many types of herbs and
                organic compounds.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>Increases the rate of photosynthesis. <br />
                Enhances uptake and utilisation of
                major, secondary and micro nutrients
                by acting as natural chelating agent. <br />
                It has strong anti stress function, help
                plant to resist against drought cold &
                hot temperature, transplanting stress
                etc. <br />
                Prevents plant from harmful effects of
                pesticides. <br />
                Supplies amino & peptides to plant. <br />
                Induces better flowering and reduces
                flower dropping. <br />
                Helps better grain formation, better
                fruiting and yield.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Act as a natural chelating agent which enhances
                uptake and utilization of major nutrients.
                Promotes enzymatic activity and enhances
                protein synthesis.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals Crops, Millets Crops, Pulses Crops, Oilseeds Crops, Fibre Crops, Sugar Crops, Forage
                Crops, Plantation crops, Vegetables, Fruits, Spices, Flowers, Medicinal crops, Aromatic Crops,
                Orchards and Ornamentals.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Top dressing once in every 25 days after 15
                days of sowing.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3"> DOSAGE</h3>
              <p className='leading-relaxed m-4'>6-10 Kg per acre for sowing or 4-6 Kg
                per acre on standing crops.
              </p>


            </div>


          </div>


        </div>
      </section>











    </>
  )
}

export default TotalGR