import allinImg from '../../product_image/allin.png'
import allin_title from '../../titleImg/allin.png'

const AllIn = () => {
  return (
    <>

      <div className="relative mx-auto mt-10 w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://daisysgarden.com.au/web/image/595180-3bc6db29/jpg%20revive%20vs%20mushroom.jpg" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">PROTECTION</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div className="h-[250px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={allinImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={allin_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">All-In is formulated with seaweed (kelp) along with various
                proteins, vitamins and stimulants. It contains naturally
                occurring PGRs (Auxin, Cytokinin), amino acids, fulvic
                acid, humic acid etc which helps in promoting plant growth
                and development and improves resistance to
                environmental stress. It is designed to provide nutrition
                and protection to the plant.
              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Increases resistance to environmental stress.
                Increases immunity towards bacterial diseases. <br />
                Increase the number of fruitful flowers, yield and
                quality.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>It exhibits a unique mode of action, which mimics the natural
                systemic activated resistance (SAR) response found in most
                plant species.

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Fibre, Sugar, Plantation crops, Forage crops, vegetables, fruits, Orchards etc.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'> Foliar spray after 20-25 days of sowing. 20 gm/60Lof water. (50-60gm/acre)

              </p>



            </div>


          </div>


        </div>
      </section>







    </>
  )
}

export default AllIn