import emo10Img from '../../product_image/emo10.png'

import emo10_title from '../../titleImg/emo10.png'
const emo10 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={emo10Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={emo10_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a broad spectrum systemic herbicide for control of broad leaf weeds and
grasses. Based on the active ingredient Imazethapyr, it is taken up by the
weeds through roots and the leaves. It is absorbed by the roots and foliage
with translocation in the xylem and phloem.It has sufficient residual effect to
give weed control not only in the early stages but also in subsequent flushes.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Soyabean, Ground nut, Potato,
Wheat, Sugarcane, Cotton, Maize
etc.

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>Cyperusdifformis, Echinochloacrusgalli,
Euphorbia hirta, Croton variegatum,
Digeraarvensis, Commelinabenghalensis,
Trianthemaportulacastrum, Eragrostispilosa.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>2 -2.5 ml/ltr.400 ml/acre.</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default emo10