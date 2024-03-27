import React from 'react'
import comboBImg from './comboImg.jpg'
const Combo_b = () => {
  return (
    <>

      <h1 className="text-3xl  text-red-700 py-6 px-4">Adjuvants</h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={comboBImg} alt="Product Image" />
            </div>
            {/* <img  className="lg:w-1/2 w-[30%] lg:h-auto  sm:h-1 object-cover object-center rounded" src={comboBImg} /> */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">COMBO-B<sup>R</sup></h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Organosilicone Based Spray Adjuvant</h1>
              <p className="leading-relaxed">Combo-B is a non-ionic , super spreading spray adjuvant based on Trisiloxanealkoxylate which
                improves spray coverage and maximize uptake and penetration of target surface. It is a wetting agent
                for spray solutions that work at low concentrations. It enhances the efficacy of insecticides / fungicides /
                bactericides / virucides and plant supplements.</p>

              <h3 className="text-blue-900 text-2xl title-font font-medium m-3">Benefits</h3>
              <p className='leading-relaxed ml-4'>- Non-iconic silicon based adjuvant.</p>
              <p className='leading-relaxed ml-4'> - Super spreading property.</p>
              <p className='leading-relaxed ml-4'>- Rain fasterner.</p>
              <p className='leading-relaxed ml-4'>- Improves water/Spray quality.</p>

              <h3 className="text-blue-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Reduces the surface tension of water to help the solution stick to the plant more
                effectively</p>

              <p className='leading-relaxed m-4'>Carry insecticide/Pesticide into inaccessible sites inhabited by pests.</p>
              <p className='leading-relaxed m-4'>Sequester hard water ions</p>


              <h3 className="text-blue-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>1ml per 2-3 ltr of water/spray solution. (75ml/acre)</p>

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

export default Combo_b