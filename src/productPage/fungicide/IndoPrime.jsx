import IndoPrimeImg from '../../product_image/indoprime.png'
import indoprime_title from '../../titleImg/indoprime.png'


const IndoPrime = () => {
  return (
    <>

      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={IndoPrimeImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={indoprime_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a broad spectrum, contact and systemic mixture fungicide,
                with preventive and curative action. It is effective against many
                diseases on large number of crops, as seed treatment, nursery
                / soil drenching, fruit/ rhizome/ tuber dip and foliar sprays. It
                Provides Manganese and Zinc nutrition to crops, there by
                keeps plant greener and healthy. It Stimulates plant growth,
                vigour, enhance flowering and ultimately increase yield.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Rice, Cotton, Ground nut, Potato, Tomato,
                Okra, Onion, Garlic, Mango, Pomegranate,
                Chilli, etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Brown leaf spot, Anthracnose, Alternaria
                leaf spot, Helminthosporium leaf spot,
                Rust, Late blight, Early blight, Septoria
                leaf spot, Powdery mildew, Cercospora
                leaf spot, Purple blotch. </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>2-3 gm/ltr.250-300 gm/acre.</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default IndoPrime