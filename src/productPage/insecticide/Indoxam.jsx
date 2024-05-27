import indoxamImg from '../../product_image/indoxam.png'
import indoxam_title from '../../titleImg/Indoxam.png'
const Indoxam = () => {
  return (
    <>

      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>

      {/* <h1 className="text-3xl  text-red-700 py-6 px-4">Insecticide</h1> */}
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={indoxamImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={indoxam_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Thiamethoxam is a systemic insecticide in the class of
                neonicotinoids. It has a broad spectrum activity against many types
                of insects. It is a systemic insecticide, which means it is absorbed
                quickly by plants and transported to all of its parts, including pollen,
                where it acts to deter insect feeding.</p>

              <h3 className="text-red-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Rice, Cotton, Soyabean, Brinjal, Coffee,
                Fruits, Tea etc</p>

              <h3 className="text-red-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Stem borer, Gall midge, Leaf folder, Brown
                plant hopper, Green leaf hopper, Jassids,
                DOSAGE Aphids, White fly, Helopeltistheivora.</p>

              <h3 className="text-red-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>40-80gm/acre. <br />
                Mango,Citrus : 4g/15 litre of water (tank)</p>


            </div>


          </div>


        </div>
      </section>

    </>
  )
}

export default Indoxam