
import { Link } from 'react-router-dom'
import rnd2 from '../RnDImg/rnd2.jpg'
const RnDforHome = () => {
  return (
    <>
    
    
    <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-900 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Research and Developments</h2>
         

            <p>Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p>We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need. </p>

            <p>All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers.</p>
               


            <Link to='/researchDev' className=' bg-gray-400 hover:bg-blue-500 text-black font-semibold hover:text-green-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded '>learn more</Link>
            
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="office content 1"/>
              <img class="mt-4 w-full lg:mt-10 rounded-lg " src={rnd2} alt="office content 2 black night hour sticky fixed top-4 red dark "/>
              </div>
          </div>
      </section>
    
    
    
    </>
  )
}

export default RnDforHome