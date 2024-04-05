
// import rnd2 from '../RnDImg/rnd2.jpg'
import { Link } from "react-router-dom"
const RnDforHome = () => {
  return (
    <>




      <div className="relative flex mb-[11rem] flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
       
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-full w-full object-cover" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="Winding mountain road" />
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
           
            <div className="mt-10">
              <Link to='/researchDev' className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 p-1 hover:bg-green-800 hover:shadow-md md:w-48">Read More</Link>
            </div>
          </div>
         
        </div>
       
      </div>   

          











    </>
  )
}

export default RnDforHome