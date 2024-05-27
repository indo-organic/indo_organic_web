import totalgrAdvanceImg from '../../product_image/totolgrAdvance.png'
import totalgradvance_title from '../../titleImg/totalgradvance.png'

const TotalGRAdvance = () => {
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
              <img className="w-full h-full object-cover" src={totalgrAdvanceImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={totalgradvance_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Total Gr advance is based on bioactive organic substances and
                minerals. It comprises mixture of bioactive substances of vegetal
                origin. It contains essential organic substances that improves the
                soil quality and structure. It helps in retention of flowers, activates
                soil bacteria, especially rhizosphere bacteria which are
                responsible for better growth of root system.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>Enhances the uptake and utilization of major secondary and
                micronutrients by acting as natural chelating agent. <br />
                It has strong anti-stress function, helps plant to resist against
                climatic stress, transplanting stress etc. <br />
                Supplies amino and peptides to the plant. <br />
                Induces better flowering and reduces flower dropping. <br />
                Increases the rate of root development. <br />
                Accelerates plant growth and development. <br />
                Enhances crop canopy and yield</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>It activates soil bacteria, specially rhizosphere bacteria which are responsible for better
                growth of root system. It also acts as a natural chelating agent which enhances uptake and
                utilization of major nutrients, promotes enzymatic activity and enhances protein synthesis.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>All types of field crops.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Top dressing once in every 25 days
                after 15 days of sowing.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3"> DOSAGE</h3>
              <p className='leading-relaxed m-4'>6-10 Kg per acre for sowing or 4-6 Kg
                per acre for standing crops.
              </p>


            </div>


          </div>


        </div>
      </section>

    </>
  )
}

export default TotalGRAdvance