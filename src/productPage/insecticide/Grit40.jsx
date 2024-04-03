import vaidImg from '../../product_image/vaid.png'
import vaid_title from '../../titleImg/Vaid.png'
const Grit40 = () => {
  return (
   <>
   
   
   
   <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


<section className="text-gray-600 body-font overflow-hidden bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
        <img class="w-full h-full object-cover" src={vaidImg} alt="Product Image" />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          <img src={vaid_title} alt="" className='w-72 my-4' />
        </h2>
        <p className="leading-relaxed">VAID is a granular Insecticide. It works on stem borer of rice,
          grey hopper, green leaf hopper and multiple species of thrips.
          Fipronil has both contact and ingestion activity, but is
          particularly effective by way of ingestion. However,
          intermediate responses, such as cessation of feeding, may be
          noted soon after treatmen</p>

        <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
        <p className='leading-relaxed m-4'>It is registered on Rice (soil treatment), Corn
          (soil treatment), Sugarcane (soil treatment),
          with potential uses on cotton, Sweet potato,
          Bulb onion and potato.
        </p>

        <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
        <p className='leading-relaxed m-4'>It has contact activity on both chewing and sucking
          insects and controls Coleoptera, Lepidoptera,
          Diptera, Hemiptera, Isoptera and Thysanoptera.</p>

        <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
        <p className='leading-relaxed m-4'>7-10 Kg/acre</p>

     
      </div>


    </div>


  </div>
</section>

   
   
   
   
   </>
  )
}

export default Grit40