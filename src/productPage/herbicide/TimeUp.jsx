import timeupImg from '../../product_image/timeup.png'

import timeup_title from '../../titleImg/timeup.png'
const TimeUp = () => {
  return (
    <>




      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={timeupImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={timeup_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a non-selective, post-emergence herbicide of organophosphorus
                group, absorbed by foliage and translocated throughout a plant. The
                product controls annual and perennial grassy and broad-leaved
                weeds in tea and non-crop areas. It is absorbed by the weed plants
                very rapidly and kills the plant from the root within 7-12 days after its
                application. Apart from annual and perennial weeds, also kills the
                aquatic weeds efficiently.It does not affect the germination of ensuing
                crops and any crop can be grown after its application.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>It is used in plantation crop like tea,
                coffee, coconut, rubber, grapes, mango
                etc.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>Acalyphaindica, Sidaacuta, Ipomea, Cichoriumintybus,
                Digeraarvensis, Digitariasanguinalis, Paspalumconjugatum,
                Ageratum conyzoides, Cynodondactylon, Cyperusrotundus,
                Eragrostis spp.</p>




              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Method of application</h3>
              <p className='leading-relaxed m-4'>Foliar spray.</p>


              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>1.20 Kg/acre (7-8 gm/ltr of water).</p>


            </div>


          </div>


        </div>
      </section>











    </>
  )
}

export default TimeUp