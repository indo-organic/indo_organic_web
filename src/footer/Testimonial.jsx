
import test1 from '../testimonials/testimonial1.jpg'

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col w-[99%]  bg-cover bg-fixed bg-center justify-center items-center m-auto "
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/81/70/32/817032a8175cfb96b7d2f6830c463670.jpg)',
        }}>
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




