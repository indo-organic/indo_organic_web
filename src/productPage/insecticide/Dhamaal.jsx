import DhamaalImg from '../../product_image/testDhamaal.jpg'
import Dhamaal_title from '../../titleImg/Dhamaal.png'
const Dhamaal = () => {
  return (
    <>
<h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={DhamaalImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={Dhamaal_title} alt="" className='w-72 my-4' />
              </h2>
              {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">ACTIVE INGREDIENT: LAMBDA CYHALOTHRIN 4.90% CS</h1> */}
              <p className="leading-relaxed">Lambda-cyhalothrin belongs to a group of chemicals called pyrethroids.
                Pyrethroids are man-made chemicals that are similar to the natural
                insecticides pyrethrins. Scientists developed pyrethroid insecticides to
                have properties better than those of the pyrethrins. It is a stomach and
                contact insecticide to control Boll worm, Leaf roller, Stem borer, Pod
                borer, Shoot & Fruit Borer, Thrips in rice, cotton, brinjal, okra, tomato.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Rice, Cotton, Brinjal, Okra,
                Tomato, Chilli etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Bollworm, Leaf folder, Stem borer,
                Fruit borer, Thrips, pod borer.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>2 ml/ltr. 250-300ml/acre.</p>

             
            </div>


          </div>


        </div>
      </section>


    </>
  )
}

export default Dhamaal