import autoMotoImg from '../../product_image/autoMoto.png'
// import autogold_title from '../../titleImg/autogold.png'
const AutoMoto = () => {
  return (
    <>
      <div className="relative mx-auto w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">Nutrition</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={autoMotoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={autogold_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">It is a high performance 100% water soluble liquid fertilizer
                with chelating agent. It facilitates growth and quality by
                correcting micro nutrient deficiencies. It is fortified with
                mixture of trace elements complexed with lignosulphonates.It
                is formulated to be used as a source of micro elements and as
                a corrector of multiple lacks due to deficiencies and
                imbalances in assimilation by plants.


              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Corrects nutrients deficiency. <br />
                It facilitates the liberation of blocked elements and its assimilation by the roots
                through its cationic exchange capacity. <br />
                Promotes plant metabolic activity and growth. br
                Plays a major role in improving quality, size, colour, taste etc.
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Fulfills the lack of natural minerals and nutrients to promote
                growth and various other functions in the plant life cycle.

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>All types of field crops.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'> Foliar spray
                300-500 ml / acre.

              </p>



            </div>


          </div>


        </div>
      </section>


    </>
  )
}

export default AutoMoto