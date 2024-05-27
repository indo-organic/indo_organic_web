import calcigoldImg from '../../product_image/calcigold.png'
import calcigold_title from '../../titleImg/calcigold.png'
const calcigold = () => {
  return (
    <>

      <div className="relative mx-auto w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">Soil Revivers</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 sm:h-1 object-cover object-center rounded" src={alaskaImg} /> */}
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={calcigoldImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">Alaska<sup>TM</sup></h2> */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={calcigold_title} alt="" className='w-72 my-4' />
              </h2>
              {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Profenofos 40% EC + Cypermethrin 4% EC</h1> */}
              <p className="leading-relaxed">These are granules made up of organic calcium and humic acid and
                is a good source of Calcium, Magnesium and sulfur. It is used for
                direct application on soil, as a soil conditioner or secondary nutrient.
                It plays a vital role in improving the soil structure. It acts as a soil
                softner that allows water as well as nutrients to penetrate and reach
                deeper into the root system of the plant.
              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>It conditions the hard soil by breaking compounds of
                insoluble remains of chemical fertilizers.
                Enhances quality of field.
                Acts as a secondary nutrient.
                Increases water holding capacity in soil.
                Ca is utilized for continuous cell division and
                formation.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Provides Ca ions that can exchange with Na and Mg ions in soil.Thus leading to
                flocculation of soil particles which promotes better overall structural development in
                highly dispersed soil.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Calci Gold is used in almost all the commercial crops i.e. Sugarcane, Potato, Rice, Wheat,
                Cotton, Pea, Flower Crops & Medicinal Crops etc. </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>50 to 100 kg per acre with or without other fertilizers at the time of field Preparation.
                It can also be used as a top dressing in growing crops with the dose of 25 to 50 Kg per acre.</p>


            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default calcigold