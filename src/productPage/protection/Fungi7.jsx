import fungi7Img from '../../product_image/fungi7.png'
import fungi7_title from '../../titleImg/fungi7.png'
const Fungi7 = () => {
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

            <div class="h-[450px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={fungi7Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={fungi7_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">It is a Botanical extract based broad spectrum fungicide derived
                from plant's secondary metabolites. It contains essential
                enzymes and defence activator. It has a curative as well as
                preventive action against a wide range of fungus.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> It's unique formulation effectively manages fungal disease.
                Enhances crop yield. <br />
                Increases plant growth and development. <br />
                Provides resistance to all parts of the plant. <br />
                Improves performance and quality of the crops.
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Inhibition of mycelial growth and conidial germination.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET CROPS </h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Oilseeds, Fibre, Sugar,
                Forage Crops, Plantation Crops, Vegetables,
                Fruits, Spices, Flowers, Medicinal Crops,
                Aromatic Crops, Orchards and Ornamentals.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET PESTS & DISEASES</h3>
              <p className='leading-relaxed m-4'>Leaf Blast, leaf spot, Powdery mildew, Downy
                mildew, Early Blight and Fungal leaf Blight .


              </p>


              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>2grams / Ltr. of water (300-400gm/acre).
                Mix the required quantity thoroughly in sufficient amount of
                water & spray on both sides of the leaves/affected areas


              </p>



            </div>


          </div>


        </div>
      </section>

    </>
  )
}

export default Fungi7