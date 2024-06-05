import thypoImg from '../../product_image/thypo.png'
import thypo_title from '../../titleImg/Thypo.png'

const Thypo = () => {
  return (
    <>



      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={thypoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={thypo_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a systemic seed treatment insecticide. It provides control over
                wide range of early season sucking and chewing, leaf-feeding and
                soil-dwelling insect pests, such as aphids, wireworms, flea beetles,
                and leaf miners. It has good retention on seed and soil.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>It is used to treat the seeds of corn, cotton, sugar beets, oil
seed rape, canola, wheat, barley, soybeans, sorghum and
other field crops.
              </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Aphid, whiteflies, Jassids, etc.</p>


              <h3 className="text-blue-600 text-xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Seed treatment. Foliar Spray.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>2 ml/Kg seed. 200-250 ml/acre</p>

              <div className="">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {/* Box 1 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdTWTSmFK3hao5GViHokaXsU4L7zCm_KJBWjCv-f_Kw&s" alt="Image 1" className="w-full h-[14vh] object-cover " />
                    <div className="p-2">
                      <h3 className="text-sm  mb-1 text-center">Leaf folder</h3>

                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILu64lYh34t8WapFxpareSM4OijA8Z87uk9h3TR0ZPQ&s" alt="Image 2" className="w-full h-[14vh] object-cover" />
                    <div className="p-2">
                      <h3 className="text-sm  mb-2 text-center">Aphids</h3>
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://gardenerspath.com/wp-content/uploads/2021/06/How-to-Control-Leaf-Miners-FB.jpg" alt="Image 3" className="w-full h-[14vh] object-cover" />
                    <div className="p-2">
                      <h3 className="text-sm  mb-2 text-center">Leaf Miner</h3>

                    </div>
                  </div>

                  {/* Box 4 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://agritech.tnau.ac.in/crop_protection/potato/Black%20cutworm.jpg" alt="Image 4" className="w-full h-[14vh] object-cover" />
                    <div className="p-2">
                      <h3 className="text-sm  mb-2 text-center">Potato black Worm</h3>

                    </div>
                  </div>

                  {/* Box 5 */}
                  <div className=" rounded-lg overflow-hidden shadow-md">
                    <img src="https://gardenerspath.com/wp-content/uploads/2019/04/How-to-Eliminate-the-Colorado-Potato-Beetle-FB.jpg" alt="Image 5" className="w-full h-[14vh] object-cover" />
                    <div className="p-2">
                      <h3 className="text-sm  mb-2 text-center">Colorado Beetle</h3>

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

export default Thypo