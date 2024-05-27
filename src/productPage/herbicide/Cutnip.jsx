import cutnipImg from '../../product_image/cutnip.png'


const Cutnip = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Herbicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={cutnipImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={proto50_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">CUTNIP is the selective, systemic weedicides of the
                Phenoxy acetic group. It is used on a wide variety of
                terrestrial and aquatic broadleaf weeds. it is not effective
                on grassy weeds.. It appears to work by causing
                uncontrolled cell division in vascular tissue. Abnormal
                increases in cell wall plasticity, biosynthesis of proteins,
                and production of ethylene occur in plant tissues following
                exposure, and these processes are responsible for
                uncontrolled cell division. The ester forms of 2, 4-D
                penetrate foliage, whereas plant roots absorb the salt
                forms. 2, 4-D appears to be similar in action to other auxintype herbicides. It is absorbed by the</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Sorghum, Maize, wheat, sugarcane,
                potato, quatic weeds, non crop area
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target weeds</h3>
              <p className='leading-relaxed m-4'>Cyperus Iria, Digera Arvensis, Convolvulus Arvensis, Trianthema
                Sp., Tridax Procumbens, Euphorbia Hirta, Phyllanthus Niruri,
                Trianthema Monogyna, Amaranthus Sp., Tribulus Terristeris,
                Boerhaavia Diffusa, Portulaca Oleracea, Chenopodium Album,
                Fumaria Parviflora, Melillotus Alba , Vicia Sative , Asphodelus
                Tenuifolius , Eichhornia Crassipes., Parthenium Hysterophorus,
                Cyperus Rotundus etc</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>600ml/acre.</p>


            </div>


          </div>


        </div>
      </section>



    </>
  )
}

export default Cutnip