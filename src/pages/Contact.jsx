
// import SocialMedia from '../components/SocialMedia';
import contactImg from '../AboutImg/aboutImg3.jpg'

const Contact = () => {
  return (
    <>
      {/* <div className="relative mx-auto  w-full">
      <img className="h-64 w-full object-cover rounded-md object-center" src={contactImg} alt="Random image" />
      <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Get in Touch with us</h2>
      </div>
    </div> */}



      <div className="flex flex-col w-[100%] h-[50vh] bg-cover bg-fixed bg-bottom justify-center items-center m-auto"
        style={{ backgroundImage: `url(${contactImg})` }}>
        <h2 className="text-white text-[3rem] font-bold">Get in Touch with us</h2>

      </div>






      <section className="bg-gray-700 ">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          {/* <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch with us</h2>
            <p className="mt-4 text-lg text-gray-500">To learn more about us, feel free to contact us.</p>
          </div> */}
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">

                <iframe className='w-full h-60' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin" frameborder="0"></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden flex gap-11 flex-col">
                  <div className="ml-6 grow ">
                    <p className="mb-2  font-bold text-white">
                      Address
                    </p>
                    <p className="text-white">
                      M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
                    </p>

                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-white">
                      Telephone
                    </p>
                    <p className="text-white">
                      + 011-49059099/45500067
                    </p>

                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-white">Email </p>
                    <p className="text-white">

                      info@indoorganics.in
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <SocialMedia /> */}
    </>
  )
}

export default Contact