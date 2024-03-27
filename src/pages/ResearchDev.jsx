import '../styles/ResearchDev.scss'
import research_img from '../assets/image1.jpg'
import research1 from '../assets/research1.jpg'
import research2 from '../assets/research2.jpg'

import rnd2 from '../RnDImg/rnd2.jpg'



const ResearchDev = () => {

  return (
    <>
      {/* <div classNameName="research_title_box">
          <div classNameName="research_title">
            Research and Developments
          </div>
         </div>
      <div classNameName="research">
        <div classNameName="research_box_content">
          <img src={research1} alt="" />
          <div classNameName="research_text_content">
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
          </div>
          <img src={research2} alt="" />
         
        </div>
      </div> */}



      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Research and Developments</h2>
         

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
               


            
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="office content 1"/>
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src={rnd2} alt="office content 2"/>
              </div>
          </div>
      </section>




      
    </>
  )
}

export default ResearchDev