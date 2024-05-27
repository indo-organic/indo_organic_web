import valinoImg from '../../product_image/valino.png'
import valino_title from '../../titleImg/Valino.png'
const Valino = () => {
  return (
    <>


      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={valinoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={valino_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Validamycin is a non-systematic antibiotic and fungicide produced by
                fermentation of Streptomyces hygroscopicus use to control rice
                sheath blight, wheat sheath blight as well as Rhizoctonia disease
                from corn, cotton, vegetables etc</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Rice, Corn, Cotton, Paddy, Coffee,
                Black gram, Ginger, Citrus, etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Sheath blight, Black scurf, Damping
                off, Thread blight, Root rot, Leaf
                blight, Pink disease, Collar rot.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>3-4 ml/ltr.500-600 ml/acre.</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default Valino