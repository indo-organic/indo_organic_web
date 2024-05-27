import amigoImg from '../../product_image/amigo.png'
import amigo_title from '../../titleImg/Amigo.png'

const Amigo = () => {
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
              <img className="w-full h-full object-cover" src={amigoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={amigo_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Amigo is an organic biostimulator containing all essential
                amino acids and peptides. It enables amino acids to be
                supplied to the crop that are essential for good crop
                development.
                It builds blocks of proteins which are abundantly required for
                crop growth. It helps in providing macro and micro nutrients
                available in the soil.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Increases plant resistance to stress. <br />
                Promotes enzymatic activities as it contains
                natural stimulants. <br />
                Increases yields and quality because of better
                protein assimilation.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Increases humus contents, efficiently
                chelates metal ion, enhances soil
                phosphate availability ,enhances plant
                root uptake of P, K, Fe, Cu, Zn and CaProtein synthesis :
                Provides ready made amino acids for protein
                synthesis.
                Promotes enzymatic activity by acting as a natural
                stimulant.

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Fibre, Sugar, Plantation crops, Forage crops,
                vegetables, fruits, Orchards etc
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'> 350-500 ml per acre.

              </p>



            </div>


          </div>


        </div>
      </section>






    </>
  )
}

export default Amigo