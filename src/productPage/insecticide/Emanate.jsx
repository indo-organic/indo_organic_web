import emanateImg from '../../product_image/emanate.png'
import emanate_title from '../../titleImg/Emanate.png'
const Emanate = () => {
  return (
    <>



      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={emanateImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={emanate_title} alt="" className='w-72 my-4' />
              </h2>
              {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">ACTIVE INGREDIENT: Emamectin Benzoate 5% SG</h1> */}
              <p className="leading-relaxed">Emamectin is the 4”-deoxy-4”-methylamino derivative of abamectin, a 16-
                membered macrocyclic lactone produced by the fermentation of the soil
                actinomycete Streptomyces avermitilis. It is derived from avermectin B1,
                also known as abamectin, a mixture of the natural avermectin B1a and B1b.
                Emamectin benzoate is a multipurpose world renowned soluble granular
                insecticide which gives effective control of caterpillars by its contact and
                stomach poison action</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Cotton, Okra, Tomato, Chilli, Onion,
                Soyabean, Cauliflower etc</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Foliar spray.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>80- 100 gm/ acre</p>

             
            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default Emanate