import fiprosixImg from '../../product_image/fiprosix.png'
import vaid_title from '../../titleImg/Vaid.png'

const FiproSix = () => {
  return (
    <>

      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={fiprosixImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={vaid_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">FIPROSIX is a fipronil based phenyl pyrazole insecticide,
                which is very effective for controlling stem borer and leaf folder
                in rice. It not only controls the pests effectively, but also
                provides plant growth enhancement effects like enhanced root
                growth and more number of productive tillers that result in
                higher yields. It primarily acts as an ingestion toxicant with
                some complimentary contact action and acts by interfering in
                nerve impulse transmission. It interferes with the passage of
                chloride ions through the Gamma Amino Butyric Acid (GABA)
                regulated chloride channel, thereby disrupting CNS activity
                and at sufficient doses, causing insect death.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Rice
              </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Target pests : stem borer, leaf folder </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>@ 4 Kg/Acre with sand or fertilizer and Broadcast uniformly.
                Standing water of 2-3 cm depth should be available in the
                field, keep water impounded for 2-3 days after application</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default FiproSix