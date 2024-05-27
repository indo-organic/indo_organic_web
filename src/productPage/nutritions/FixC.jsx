import fixcImg from '../../product_image/fixC.png'
import fixc_title from '../../titleImg/fixC.png'
const FixC = () => {
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
              <img className="w-full h-full object-cover" src={fixcImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={fixc_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is an organic yield enhancer fortified with
                polysaccharides, glomalin, hydrolyzed proteins and
                organic minerals. These compounds together act as
                a natural chelator. It also contains more than 50%
                carbon which is a primary food source for beneficial
                soil biota (nitrogen fixing and friendly bacteria,
                earthworms etc)


              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Stimulates superior yields.
                Makes plant greener and fresh. <br />
                Increases the growth rate by increasing the rate of
                photosynthesis. <br />
                Plays a key role in soil health through biological,
                physical and chemical functions. <br />
                Corrects the deficiency of nitrogen, potassium and
                phosphorous in the plant. <br />
                Helps in mitigating climate change and global
                warming as it will sequester the atmospheric carbon
                and store it in the soil as organic carbon .

              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Organic chelators present in Fix-C
                sequesters CO2 present in the
                atmosphere and fixes it in the leaves of
                the plant as well as in the soil there by
                improving the rate of photosynthesis
                which further helps in increasing the
                yield and health of the crop and
                consequently lowering the amount of
                CO2 in the atmosphere

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Fix-C can be used in all field crops, horticulture and ornamental crops.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION </h3>
              <p className='leading-relaxed m-4'> Foliar spray

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">DOSAGE </h3>
              <p className='leading-relaxed m-4'> 500-700 ml/ acre.

              </p>



            </div>


          </div>


        </div>
      </section>


    </>
  )
}

export default FixC