
import { Link } from "react-router-dom"
const Vision = () => {
  return (
    <>



      <div className="flex  gap-4 w-[100%] h-[15rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
        style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0070/7032/files/difference_20between_20mission_20and_20vision.png?v=1699818497')" }}>

        <div className=" flex flex-col items-center justify-center ">
          <h2 className="text-white text-3xl font-bold uppercase">Vision and Mission</h2>
          <h2 className="flex gap-4 text-white py-2">
            <Link to='/' className="hover:text-white">Home  &#9702;</Link>
            <p>Company  &#9702;</p>
            <p>Vision / Mission &#9702;</p>
          </h2>

        </div>

      </div>








      <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full">
            <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://research.aimultiple.com/wp-content/uploads/2022/03/istockphoto-1267259198-612x612-1.jpg" alt="vision" />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Vision</h2>
            <p className="text-md mt-4">At Indo Organic, we aim to lead agriculture towards a sustainable future. We see a world where farming aligns with nature, nurturing the soil and prioritizing the well-being of people and the planet.

              We strive to be innovators, offering advanced agrochemical solutions that boost productivity with minimal environmental impact. Our commitment to research and development ensures a range of organic products that support soil health, biodiversity, and ecological balance.

              Beyond profit, we empower farmers with knowledge and resources for sustainable farming, ensuring long-term food security. By promoting partnerships and sustainable practices, we seek to build a resilient agricultural ecosystem that benefits communities and preserves natural resources.

              At Indo Organic, we are dedicated to a new era in agriculture guided by organic principles, envisioning a greener, healthier future where innovation and sustainability create lasting value for all.</p>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">

          {/* <div className="md:hidden sm:block xs:block xs:w-full">
            <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_20579_16266867577647544.jpg" alt="mission" />
          </div> */}

          <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Mission</h2>

            <p className="text-md mt-4">Our mission is to revolutionize agriculture with innovative agrochemicals and organic products that boost crop productivity and ensure environmental sustainability. We empower farmers with the knowledge and tools to adopt sustainable practices, promoting soil health and biodiversity.

              Our commitment to research and development provides high-quality, safe, and effective products that meet farmers' needs. We foster partnerships to enhance knowledge sharing within the agricultural community.

              Beyond profit, we aim to impact society by contributing to food security, rural development, and environmental stewardship. We prioritize transparency, integrity, and ethical practices, ensuring trust among all stakeholders.

              Driven by a passion for sustainable agriculture, our mission is to be a catalyst for positive change, empowering farmers, enriching communities, and nurturing a healthier planet.</p>
          </div>

          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
            <img className="lg:rounded-t-lg xs:rounded-sm" src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_20579_16266867577647544.jpg" alt="misson" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Vision