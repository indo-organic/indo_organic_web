import curevImg from '../../product_image/curev.png'
import curev_title from '../../titleImg/curev.png'
const curev = () => {
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

            <div className="h-[450px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={curevImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={curev_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Cure-V is an effective antiviral solution/virucide based on newly
                refined technology which is a combination of diverse essential
                herbal extracts that are known to have antimicrobial properties.
                It can protect the plants from almost all types of viral diseases. It
                can also serve good control over some fungal diseases.


              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Highly effective on target diseases. <br />
                Elicitate active defense response in crops
                Made from diverse range of herbal extracts, hence no
                toxicity to human and environment.
                Gives fresh growth and yield
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Interferes with the synthesis of nucleic acid and limit viral replication.
                • Acts as an immuno modulator
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET DISEASES</h3>
              <p className='leading-relaxed m-4'>Almost all kind of viral diseases and some fungal
                diseases as well.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>Foliar Spray. 300 ml/acre


              </p>



            </div>


          </div>


        </div>
      </section>


    </>
  )
}

export default curev