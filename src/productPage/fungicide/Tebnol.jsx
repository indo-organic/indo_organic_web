import tebnolImg from '../../product_image/tebnol.png'
import tebnol_title from '../../titleImg/Tebnol.png'
const Tebnol = () => {
  return (
    <>


      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center ">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={tebnolImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={tebnol_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a broad spectrum systemic fungicide which controls many fungal
                diseases.Tebnol with its dual mode of action works at multiple stages of
                fungal development. It has preventive, antisporulant and early curative
                action with leaf disease control for up to 6 weeks. It has a good phytotonic
                effect like more green leaves, less flower and fruit drop, increased yield etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Chilly, Tomato, Potato, Apple,
                Citrus, Onion, Rice, Grape,
                Wheat.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Fruit rot, Powdery mildew, Dieback,
                Purple blotch, Early Blight etc.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">method of Application</h3>
              <p className='leading-relaxed m-4'>Foliar spray
                Best results when applied to actively
                growing crops in fine weather at least 48
                hours before rain.
                Ensure through coverage of leaves and
                stems. Apply at first sign of disease or as
                a protectant when disease risk is high.</p>


              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>300 ml/acre</p>

            </div>

          </div>

        </div>
      </section>


    </>
  )
}

export default Tebnol