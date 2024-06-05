import React from 'react'
import comboBImg from './comboImg.jpg'
import ComboB_title from '../../titleImg/Combo-B.png'

const Combo_b = () => {
  return (
    <>
      <div className="relative mx-auto  w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">ADJUVANTS</h2>
        </div>
      </div>
      {/* <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={comboBImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={ComboB_title} alt="" className='w-72 my-4' />
              </h2>
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


            </div>


          </div>


        </div>
      </section> */}



      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-white dark:bg-gray-700 mb-4 ">
                <img className="w-full h-full object-contain" src={comboBImg} alt="Product Image" />
              </div>

            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={ComboB_title} alt="" className='w-72 mb-4' />
              </h2>
              <p className="text-gray-600 dark:text-gray-300  font-bold mb-4">
                Combo-B is a non-ionic , super spreading spray adjuvant based on Trisiloxanealkoxylate which
                improves spray coverage and maximize uptake and penetration of target surface. It is a wetting agent
                for spray solutions that work at low concentrations. It enhances the efficacy of insecticides / fungicides /
                bactericides / virucides and plant supplements.
              </p>
              <div className='my-5'>
                <span className="font-bold text-blue-800 dark:text-gray-300">Benefits:</span>

                <p className='leading-relaxed ml-14'>- Non-iconic silicon based adjuvant.</p>
                <p className='leading-relaxed ml-14'> - Super spreading property.</p>
                <p className='leading-relaxed ml-14'>- Rain fasterner.</p>
                <p className='leading-relaxed ml-14'>- Improves water/Spray quality.</p>
              </div>

              <div>
                <span className="font-bold text-blue-800 dark:text-gray-300">MODE OF ACTION:</span>

                <p className='leading-relaxed ml-4'>- Reduces the surface tension of water to help the solution stick to the plant more effectively</p>
                <p className='leading-relaxed ml-4'> - Carry insecticide/Pesticide into inaccessible sites inhabited by pests.</p>
                <p className='leading-relaxed ml-4'>- Sequester hard water ions</p>

              </div>

              <div className='my-5'>
                <span className="font-bold text-blue-800 ">METHOD OF APPLICATION & DOSAGE:</span>

                <p className='leading-relaxed ml-14'>- 1ml per 2-3 ltr of water/spray solution. (75ml/acre)</p>

              </div>
              
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Combo_b