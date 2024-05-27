import proto50Img from '../../product_image/proto50.png'

import proto50_title from '../../titleImg/proto50.png'
const Proto50 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={proto50Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={proto50_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Pretilachlor belongs to chemical class, chloroacetanilide. It is a
                selective pre-emergence herbicide (Containing Pretilachlor) for control
                of grasses, sedges and some broad leaf weeds in transplanted Rice. It
                provides excellent selectively on all known varieties of Rice</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>It is a selective pre emergence
                broad spectrum herbicide with
                excellent results in rice crop.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>Echinochloa sp., Fimbristylismiliacea, Cyperusiria,
                leptochloachinensis, CyperusDifformis, Eleusineindica,
                Ecliptaalba, Panicumrepens, Monochoriavaginalis.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>600 ml/acre.</p>


            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default Proto50