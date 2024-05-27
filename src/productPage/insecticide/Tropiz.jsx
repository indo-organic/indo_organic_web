import tropizImg from '../../product_image/tropiz.png'

const Tropiz = () => {
  return (
    <>



      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center">Insecticide</h1>


      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={tropizImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={vaid_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">Tropiz creates irreversible blockage of postsynaptic nicotinic
                acetylcholine receptors leads to the hyper excitation of the
                nerves. Hyper excitation followed by convulsions and
                eventual paralysis of the insects. This results in the death of
                insects.</p>




              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">BENEFIT</h3>
              <p className='leading-relaxed m-2'> New innovative formulation ZC (Mixture of CS and SC
                formulation) with synergistic effect.
              </p>
              <p className='leading-relaxed m-2'> It works as systemic, contact and stomach activity
                insecticide. It is absorbed rapidly by the roots and foliage.
              </p>
              <p className='leading-relaxed m-2'> Controls both sucking pest and caterpillars.

              </p>
              <p className='leading-relaxed m-2'>Promotes crop greening, more branches and flower initiation
              </p>


              <p className='leading-relaxed m-2'>It is absorbed rapidly by the roots and foliage</p>





              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Tea and major crops like Cotton,
                maize, soyabean, chilli, tea,
                tomato, maize, groundnut , etc.
              </p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Aphids, Thrips, Jassids, Bollworms, Shootfly ,
                stem borer, Fruit borer, Leafhopper, Leaf eating
                caterpillar, Semilooper, Girdle beetle, Tea
                mosquito bug, etc.</p>

              <h3 className="text-blue-600 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>60-80 ml/acre</p>


            </div>


          </div>


        </div>
      </section>

    </>
  )
}

export default Tropiz