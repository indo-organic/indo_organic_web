
import rnd2 from '../RnDImg/rnd2.jpg'
const RnDforHome = () => {
  return (
    <>
{/* 
 <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-900 sm:text-lg dark:text-gray-400">
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
            <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg " src={rnd2} alt="office content 2 black night hour sticky fixed top-4 red dark " />
          </div>
        </div>
      </section>  */}



      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
       
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
        </div>
       
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Research and Developments</h2>

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
           
            <div className="mt-8">
              <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read More</a>
            </div>
          </div>
         
        </div>
       
      </div>  



      {/* <div className="py-16 bg-white">  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Research and Developments</h2>
            <p className="mt-6 text-gray-600">Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p className="mt-4 text-gray-600">We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need.</p>
          </div>
        </div>
      </div>
    </div> */}

    </>
  )
}

export default RnDforHome