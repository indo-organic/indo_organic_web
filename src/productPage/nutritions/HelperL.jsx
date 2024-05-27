import helperLImg from '../../product_image/helperL.png'
import helperL_title from '../../titleImg/Helper.png'

const helperL = () => {
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

            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={helperLImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={helperL_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Helper-L is a natural and ecofriendly, developed by extracting
                seaweeds in liquid form. This product has been formulated via high
                tech formulation process by using seaweed extracts and
                biodegradable material for better growth and yield. It helps in
                retention of flowers, impact better organoleptic properties like
                luster, aroma, flavor, taste which attracts pollinators.


              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'>Ÿ Increases crop yield and quality.
                Increases nutrient uptake. <br />
                Reduces fruits and flowers dropping. <br />
                Improves fruit/flower color & size.
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Provide immediate supply of vital amino acids to plant.
                Ÿ Enhances organoleptic properties which attracts pollinators .
                Ÿ Helps in cell division, cell elongation, tillering and vegetative
                growth.

              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>Cereals, Millets, Pulses, Oilseeds, Fibre, Sugar, Forage Crops, Plantation Crops, Vegetables,
                Fruits, Spices, Flowers, Medicinal Crops, Aromatic Crops, Orchards and Ornamentals.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION </h3>
              <p className='leading-relaxed m-4'> First spray after 20-25 days of sowing.
                Ÿ Second spray after 12-15 days of the first spray. </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">DOSAGE</h3>
              <p className='leading-relaxed m-4'> 250 ml per acre. </p>

            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default helperL