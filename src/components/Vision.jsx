// import visionimg from '../assets/visionImg.jpg'
const Vision = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl mt-14">
          {/* <div className='h-[30vh] flex  justify-center items-center bg-gray-700'>
      <h2 className=" text-white font-bold text-3xl  text-center sm:text-5xl">VISION</h2>
    </div> */}
          <div className="relative mx-auto mt-10 w-full">
            <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae03611ae-8edd-457f-aa4d-73c591a75ee8?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1" alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">vision</h2>
            </div>
          </div> 




          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                <div className="flex">

                  <div className="ml-4">
                    <p className="mt-2 ">"At Indo Organic, our vision is to lead the agricultural industry towards a sustainable and prosperous future. We envision a world where farming practices harmonize with nature, where the soil is nurtured, and where the health and well-being of both people and the planet are paramount.</p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">
                    <p className="mt-2 ">We aspire to be at the forefront of innovation, providing cutting-edge agrochemical solutions that enhance productivity while minimizing environmental impact. Through our commitment to research and development, we strive to offer a comprehensive range of organic products that promote soil health, biodiversity, and ecological balance.</p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 ">Our vision extends beyond mere profitability; we aim to empower farmers with knowledge, tools, and resources to cultivate crops sustainably, ensuring food security for generations to come. By fostering partnerships and promoting sustainable practices, we seek to create a resilient agricultural ecosystem that benefits communities and preserves natural resources.</p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">
                    <p className="mt-2 ">At Indo Organic, we are dedicated to pioneering a paradigm shift in agriculture, where organic principles guide every aspect of our business. Together, we envision a greener, healthier future for agriculture—one where innovation, sustainability, and integrity converge to create lasting value for all stakeholders."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[460px] rounded-lg  mb-4" >
              <img className="w-full h-full object-cover rounded-[6rem]" src='https://www.teektaka.com/wp-content/uploads/2020/07/ES-Investing-Blog.jpg' alt="Product Image" />
            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Vision