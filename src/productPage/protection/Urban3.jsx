import urban3Img from '../../product_image/urban3.png'
import urban3_title from '../../titleImg/urban3.png'

const Urban3 = () => {
  return (
    <>

      <div className="relative mx-auto mt-10 w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://daisysgarden.com.au/web/image/595180-3bc6db29/jpg%20revive%20vs%20mushroom.jpg" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">PROTECTION</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div className="h-[450px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={urban3Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={urban3_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It's unique formula containing botanical extract in the liquid form can
                control all soft-bodied sap feeding pests such as mealy bugs, thrips
                white flies, mites, aphids, scale insects & plant hoppers. It also helps
                in retention of flowers and fruits thereby increasing the growth rate
                and yield.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS
              </h3>
              <p className='leading-relaxed m-4'>Offers effective control on the target pests.
                • Has target specific activity.
                • It also reduces the viral diseases by controlling the viral vectors.
                • It Exhibits contact, fumigant and antifeedant property that acts
                on soft bodied pests.
                • Ceases reduction in crop production and crop failure due to
                damage caused by target pests.
                • Being chemically close to those plants from which they are
                derived, are easily decomposed by a variety of soil microbes.
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Compounds present in the product are liphophilic in nature which on contact penetrates
                inside the insect body and interferes with the basic metabolic, biochemical and physiological
                and behavioural functions of insects. It also acts as fumigant and feeding deterrent. Apart
                from the direct toxicity, exposure of females to vapours leads to lower fecundity and egg
                hatch ability. It also exhibits neurotoxic mode of action including agitation, hyperactivity,
                paralysis of the pests by affecting acetylcholinesterase activity of octopamine receptors.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET CROPS </h3>
              <p className='leading-relaxed m-4'>It is used in all types of field crops.
              </p>




              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>
                Mix the recommended quantity i.e 150-200 ml/acre thoroughly
                in sufficient amount of water and spray on both the sides of
                the leaves/affected areas.


              </p>



            </div>


          </div>


        </div>
      </section>


    </>
  )
}

export default Urban3