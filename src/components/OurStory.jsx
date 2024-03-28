import aboutHome1 from '../AboutImg/aboutHome1.jpg'
const OurStory = () => {
  return (
    <>

      {/* <section className=" body-font">
        <div className="container px-5 py-[4%] mx-auto">
          <div className="lg:w-2/3 flex  text-center flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font "> We leverage our rich heritage to tackle the challenges of the future</h1>
          </div>
        </div>
      </section> */}
      <div class="h-[19vh]  flex flex-col justify-center relative overflow-hidden ">
    <div class="max-w-14xl mx-auto">
        <div class="relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-slate-900">We leverage our rich heritage to tackle the challenges of the future</p>
                </div>
            </div>
        </div>
    </div>
</div>
        


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
      </section>  */}




      <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-[70%] flex text-center justify-center overflow-hidden" >
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



       {/* <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
      
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img className="h-full object-cover" src={aboutHome1} width="733" height="412" alt='' typeof="foaf:Image" />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-gray">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">CXcon: Experience Transformation</h2>
                <p className="mt-4">Our second CXcon in October was dedicated to experience transformation. The free one-day virtual event&nbsp;brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss all aspects of experience design.</p>
                <p className="mt-4">In a jam-packed day filled with keynote sessions, panels, and virtual networking we explored topics including design leadership, UX ethics, designing for emotion and innovation at scale.</p>
                <p><a className="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>  */}




    </>
  )
}

export default OurStory



  
