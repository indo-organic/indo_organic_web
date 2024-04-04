import nirolImg from '../../product_image/nirol.png'
import nirol_title from '../../titleImg/Nirol.png'
const Nirol = () => {
  return (
    <>


      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={nirolImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={nirol_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a post emergence Weedicide for control in most of the important grass
                weeds in Wheat. It has an extremely broad application spectrum and a superior
                crop tolerance which gives control under unfavorable climatic conditions also.
                It has wide window of application for the effective control of advanced weeds
                allowing the grower more flexibility for time of application. It has no limitation for
                crop rotation and therefor offers greater flexibility for follow up crops.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>It is recommended for post emergence application
                i.e, 30-35 days after sowing of wheat crop (when
                Phalaris minor is in 3-4 leaf stage)
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>Phalaris Minor, AvenaFatua.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>160gm/acre</p>


            </div>


          </div>


        </div>
      </section>

















    </>
  )
}

export default Nirol