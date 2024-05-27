import fungiexImg from '../../product_image/fungiEXs.png'
import fungiex_title from '../../titleImg/fungiex.png'

const FungiEx = () => {
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

            <div className="h-[450px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={fungiexImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <img src={fungiex_title} alt="" className='w-72 my-4' />
              </h2>
              <p className="leading-relaxed">Fungi-Ex is a green alternative to synthetic fungicide
                especially to control soil borne fungal diseases. It
                contains Clove extract and some biomolecules that
                are considered as potential source for treating fungal
                diseases in plants. It has a good antifungal activity
                and shows inhibitory effect against many fungal
                diseases

              </p>
              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">KEY FEATURES
              </h3>
              <p className='leading-relaxed m-4'>Botanical extract based fungicide against soil
                borne fungal pathogens and few others. <br />
                The extracts present shows maximum activity
                and the same effect as chemical fungicide. <br />
                Offers bioactive compounds for growth
                inhibition of the fungi. <br />
                Stimulates plant's natural defence response
                against pathogen attack. <br />
                As it is an organic input, there will not be any
                side effects
              </p>



              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">MODE OF ACTION</h3>
              <p className='leading-relaxed m-4'>The ingredients have both a direct and an indirect effect on oomycetes. They inhibitive
                oxidative phosphorylation in the metabolism of oomycetes. It also has an indirect effect by
                stimulating the plant's natural defence response against pathogen attack
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET CROPS </h3>
              <p className='leading-relaxed m-4'>Potato, Ginger, Citrus, Arecanut, Pepper, Banana, etc.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">TARGET PESTS & DISEASES</h3>
              <p className='leading-relaxed m-4'>Root and collar rot, Fruit rot, Phytophthora, fusarium wilt, Anthracnose, and Koleroga. Along
                with these, It can also control downy mildew very effectively.



              </p>


              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">METHOD OF APPLICATION & DOSAGE</h3>
              <p className='leading-relaxed m-4'>Shake well before use. Dilute 3 ml of Fungi-Ex in one litre of
                water & spray. Repeat the spray once in every 7-10 days.
                Ÿ 400 ml. per acre.


              </p>



            </div>


          </div>


        </div>
      </section>




    </>
  )
}

export default FungiEx