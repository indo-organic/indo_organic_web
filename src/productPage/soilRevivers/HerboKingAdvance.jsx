import herobokingadvanceImg from '../../product_image/herobokingAdvance.png'
import herbokingadvance_title from '../../titleImg/herbokingadvance.png'
const HerboKingAdvance = () => {
  return (
    <>

      <div className="relative mx-auto w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">Soil Revivers</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={herobokingadvanceImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={herbokingadvance_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Herbo king advance is a natural plant energizer in granular form. It
                contains organic matter, hydrolyzed proteins and co-enzymes
                fortified with bioactive substances and natural biominerals which
                not only helps in increasing the fertility and productivity of the soil
                but also increases the immunity against environmental stress and
                diseases.

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">BENEFITS</h3>
              <p className='leading-relaxed m-4'> Boosts plant metabolism. <br />
                Increases production and enhances crop productivity. <br />
                Increases soil fertility. <br />
                Enhances nutrient uptake from the soil. br
                Increases resistance to diseases and environmental stress.</p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>Acts as a natural chelator for microelements and
                make them easily accessible to plant parts. It
                contains bioactive substances which provides
                bioenergy required for crops in all life stages. It
                also provides amino acid of vegetal origin which
                facilitates protein synthesis within the plant
                providing it with free amino acids, enabling
                energy saving.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">RECOMMENDATIONS</h3>
              <p className='leading-relaxed m-4'>All types of field crops, Horticultural and ornamental crops
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION</h3>
              <p className='leading-relaxed m-4'>Top dressing or mix with fertilizers at
                any stage of the crop.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3"> DOSAGE</h3>
              <p className='leading-relaxed m-4'>5-10 Kg/acre.
              </p>


            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default HerboKingAdvance