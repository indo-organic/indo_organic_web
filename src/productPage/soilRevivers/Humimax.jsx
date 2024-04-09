import humimaxImg from '../../product_image/humimax.png'
import humimax_title from '../../titleImg/humimax.png'

const Humimax = () => {
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

            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={humimaxImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={humimax_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Humi Max contains humic acid and essential organic compound,
                that improves metabolic activity in plant. It improves soil texture,
                soil porosity, aeration etc.
                Humi Max organic liquid concentrate , derived from the finest ,
                richest and purest source of leonardite ore that primarily aids in
                soil fertility

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>Improves drought tolerance ability.
                Increases soil carbon. <br />
                Enhances seedling vigor and root growth. <br />
                Helps in the better development of root and
                shoot which results in maximum growth. <br />
                It stimulates plant enzymes and hormones. <br />
                Improves uptake of nutrients and water by
                plants</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Increases humus contents, efficiently
                chelates metal ion, enhances soil
                phosphate availability ,enhances plant
                root uptake of P, K, Fe, Cu, Zn and Ca
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Fibre, Sugar, Plantation crops, Forage crops, vegetables,
                fruits, Orchards etc.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'> Foliar Spray: Mix 3-5 ml Humi Max in 1 Ltr of water and spray. Spray volume depends on the crop
                canopy. <br />
                Drip Irrigation: Mix 1 Ltr/ acre of Humi Max in drip stream. <br />
                Seed Treatment: Mix 5 ml of Humi Max /Kg as seed dressing. <br />
                Root dip/ Nursery treatment: Mix 5 ml of Humi Max/ Ltr of water and dip seedling in this solution.
                spray on nursery bed.

              </p>



            </div>


          </div>


        </div>
      </section>













    </>
  )
}

export default Humimax