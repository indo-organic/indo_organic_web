import auto32Img from '../../product_image/auto32.png'
// import auto32_title from '../../titleImg/Nirol.png'
const Auto32 = () => {
  return (
    <>

      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={auto32Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={auto32_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">AUTO-32 is a Selective - Systemic pre-emergence Herbicide, absorbed
                by roots and leaves. Pendimethalin is absorbed by the roots and leaves.
                Affected plants die shortly after germination or following emergence from
                the soil. Imazethapyr is absorbed by the roots and foliage, with trans
                location in the xylem and phloem, and accumulation in the meristematic
                regions.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Soyabean
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>arget weeds : Echinochloa crusgalli, Digera
                arvensis, Commelina benghalensis,
                Amaranthus viridis, Portulaca oleracea.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>1 litre/acre.</p>


            </div>


   

          </div>


        </div>
      </section>




    </>
  )
}

export default Auto32