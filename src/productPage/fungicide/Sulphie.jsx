import sulfieImg from '../../product_image/sulfieImg.jpg'
import sulfie_title from '../../titleImg/sulfie.png'
const Sulphie = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={sulfieImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={sulfie_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Sulphur is recognized as an effective fungicide / pesticide and
                has been for the last 170 years. It is broad spectrum contact and
                protective fungicide &miticide. It provides Sulphur which is an
                essential plant nutrient. It has triple action as fungicide,
                micronutrient (Sulphur) and miticide.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Grapes, Cowpea, Guar, Pea, Cumin,
                Apple, Mango, Chilli, Cucurbits, Rose etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Powdery Mildew, Scab and all types of Mites.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>Top Dressing: 3-5kg/acre. <br />
                Spray: 500-700gm/acre</p>


            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default Sulphie