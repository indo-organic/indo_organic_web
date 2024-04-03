import thypoImg from '../../product_image/thypo.png'
import thypo_title from '../../titleImg/Thypo.png'

const Thypo = () => {
  return (
    <>



      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={thypoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={thypo_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a systemic seed treatment insecticide. It provides control over
                wide range of early season sucking and chewing, leaf-feeding and
                soil-dwelling insect pests, such as aphids, wireworms, flea beetles,
                and leaf miners. It has good retention on seed and soil.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>It is used to treat the seeds of corn, cotton, sugar beets, oil
seed rape, canola, wheat, barley, soybeans, sorghum and
other field crops.
              </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Aphid, whiteflies, Jassids, etc.</p>


              <h3 className="text-blue-600 text-xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Seed treatment. Foliar Spray.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>2 ml/Kg seed. 200-250 ml/acre</p>


            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default Thypo