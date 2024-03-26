import aboutHome1 from '../AboutImg/aboutHome1.jpg'
const OurStory = () => {
  return (
    <>

      <section className=" body-font">
        <div className="container px-5 py-[4%] mx-auto">
          <div className="lg:w-2/3 flex  text-center flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font "> We leverage our rich heritage to tackle the challenges of the future</h1>
          </div>
        </div>
      </section>



      {/* <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
              <h2
                className="font-heading mb-4 bg-orange-100  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                About us
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.
              </p>
            </div>

           
          </div>
        </div>
      </section> */}


      

<div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-[70%] flex text-center justify-center overflow-hidden">
                <img src={aboutHome1} alt="" className="w-[70%]" />
              </div>
              <div className="md:w-2/3 m-4">
               
                <div className="font-bold text-black text-xl m-2">About us</div>
                <div className="text-sm text-[1.2rem] mt-4 m-2">
                  <a href="#"> Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products particularly bio-stimulants, biological solutions, plant nutrients and fertilizers. We have been serving the farming community through our high-quality Crop Protection & Crop Nutrition products since many years.</a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    
    </>
  )
}

export default OurStory