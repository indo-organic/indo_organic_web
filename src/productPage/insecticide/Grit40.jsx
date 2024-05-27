import grit40Img from '../../product_image/grit40.png'
import grit40_title from '../../titleImg/grit40.png'
const Grit40 = () => {
  return (
    <>



      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={grit40Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={grit40_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">GRIT-40 is used for the management of chronic problems of
                white grub in sugarcane. It has a longer persistence with
                excellent control. It helps in plant growth enhancement which
                Leads to higher yield with better root growth and greener </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Sugarcane
              </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests</h3>
              <p className='leading-relaxed m-4'>White grub
              </p>

              <h3 className="text-blue-600 text-xl title-font font-medium m-3">Method of application</h3>
              <p className='leading-relaxed m-4'>Foliar spray
              </p>
              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>120 gm/acre</p>


            </div>


          </div>


        </div>
      </section>





    </>
  )
}

export default Grit40