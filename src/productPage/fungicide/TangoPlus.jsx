import tangoplusImg from '../../product_image/tangoplus.png'
import tangoplus_title from '../../titleImg/tangoplus.png'
const TangoPlus = () => {
  return (
    <>

      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={tangoplusImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={tangoplus_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a Broad-spectrum systemic triazole fungicide used for the control of
                many fungi. It has both protective as well as curative action. It is quickly
                absorbed and translocated within the leaf and plant system resulting in
                quick and effective disease control. It has Triple action: Protective, Curative
                and Eradicative (Prevents spore formation).It gives phytotonic effect and
                improves the plant visible characteristics yield & quality of the produce. It
                works within and provides long lasting effect.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Apples, Vines, Coffee, Peanuts,
                Bananas, Cucurbits, Peppers
                and other crops.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Powdery mildew, Apple scab.Grape
                black rot, Uncinulanecator, Coffee
                leaf rust, Leaf spot.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>250-400ml/acre.</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default TangoPlus