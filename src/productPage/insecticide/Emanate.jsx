import React from 'react'

const Emanate = () => {
  return (
    <>
    
     
    <h1 className="text-3xl  text-red-700 py-6 px-4">Insecticide</h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={rukkaImg} /> */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">EMAnate<sup>TM</sup></h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">ACTIVE INGREDIENT: Emamectin Benzoate 5% SG</h1>
              <p className="leading-relaxed">Emamectin is the 4”-deoxy-4”-methylamino derivative of abamectin, a 16-
membered macrocyclic lactone produced by the fermentation of the soil
actinomycete Streptomyces avermitilis. It is derived from avermectin B1,
also known as abamectin, a mixture of the natural avermectin B1a and B1b.
Emamectin benzoate is a multipurpose world renowned soluble granular
insecticide which gives effective control of caterpillars by its contact and
stomach poison action</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Cotton, Okra, Tomato, Chilli, Onion,
Soyabean, Cauliflower etc</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Foliar spray.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>80- 100 gm/ acre</p>

              <div className="">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {/* Box 1 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdTWTSmFK3hao5GViHokaXsU4L7zCm_KJBWjCv-f_Kw&s" alt="Image 1" className="w-full h-[20vh] object-cover " />
                    <div className="p-4">
                      <h3 className="text-sm  mb-2">Leaf folder</h3>

                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILu64lYh34t8WapFxpareSM4OijA8Z87uk9h3TR0ZPQ&s" alt="Image 2" className="w-full h-[20vh] object-cover" />
                    <div className="p-4">
                      <h3 className="text-sm  mb-2">Aphids</h3>
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://gardenerspath.com/wp-content/uploads/2021/06/How-to-Control-Leaf-Miners-FB.jpg" alt="Image 3" className="w-full h-[20vh] object-cover" />
                    <div className="p-4">
                      <h3 className="text-sm  mb-2">Leaf Miner</h3>

                    </div>
                  </div>

                  {/* Box 4 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://agritech.tnau.ac.in/crop_protection/potato/Black%20cutworm.jpg" alt="Image 4" className="w-full h-[20vh] object-cover" />
                    <div className="p-4">
                      <h3 className="text-sm  mb-2">Potato black Worm</h3>

                    </div>
                  </div>

                  {/* Box 5 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://gardenerspath.com/wp-content/uploads/2019/04/How-to-Eliminate-the-Colorado-Potato-Beetle-FB.jpg" alt="Image 5" className="w-full h-[20vh] object-cover" />
                    <div className="p-4">
                      <h3 className="text-sm  mb-2">Colorado Beetle</h3>

                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>


        </div>
      </section>

    
    
    </>
  )
}

export default Emanate