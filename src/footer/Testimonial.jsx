
import test1 from '../testimonials/testimonial1.jpg'

const Testimonial = () => {
  return (
    <>
      <div className="bg-gray-600">


        <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-center" src="https://img.freepik.com/premium-photo/indian-farmer-feeling-happy-proud-sugarcane-field_621325-10.jpg" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">TESTIMONIALS</h2>
          </div>
        </div>



        <div className="flex justify-center items-center h-screen">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={test1}
            alt="NextUI Fruit Image with Zoom"
          />
        </div>


        <div className="flex justify-center items-center h-screen">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={test1}
            alt="NextUI Fruit Image with Zoom"
          />
        </div>


        <div className="flex justify-center items-center h-screen">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={test1}
            alt="NextUI Fruit Image with Zoom"
          />
        </div>

        <div className="flex justify-center items-center h-screen">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={test1}
            alt="NextUI Fruit Image with Zoom"
          />
        </div>

      </div>


    </>
  )
}

export default Testimonial



