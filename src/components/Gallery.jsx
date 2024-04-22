import indomagic from '../product_image/indomagic.png'
import alaska from '../product_image/alaska.png'
import vaid from '../product_image/vaid.png'
import demo70 from '../product_image/demo70.png'
import rukka from '../product_image/rukka.png'
const Gallery = () => {
   
  return (
    <>


<section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-green-500 h-auto md:h-full flex flex-col">
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src={indomagic} className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Indo-magic</h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img src={vaid} alt="" className="absolute inset-0 h-full w-full bg-bottom object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image2</h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src={demo70} alt="" className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image3</h3>
              </a>
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src="https://birlahealthcare.com/wp-content/uploads/2022/02/Importance-of-Green-Vegetables.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image4</h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src={alaska} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Alaska</h3>
            </a>
          </div>
        </div>
      </div>
    </section> 



  






    </>
  )
}

export default Gallery










