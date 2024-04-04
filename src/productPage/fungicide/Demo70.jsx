import demo70Img from '../../product_image/demo70.png'
// import demo70_title from '../../titleImg/Demo70.png'
const Demo70 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center ">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img class="w-full h-full object-cover" src={demo70Img} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={demo70_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">Thiophanate-methyl 70% WP is a preventive and systemic
                fungicide with contact action. It is a systemic fungicide
                having preventive and curative action. It is quickly absorbed
                by plants and quickly translocated into the system. It
                prevents fungus penetration and lesion formation and
                shows a very good curative effect on fungal disease. It acts
                on the fungal reproductive system due to which fungal cell
                division and development are affected. It has a wide
                window of application used as a seed treatment,
                rhizome/tubers dip, soil drenching, and spray.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Target crops: Demo-70 is recommended
                on several crops like Tomato, cucurbits ,
                Apple, Grape, paddy chilli , potato etc.</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Blast, Sheath Blight, Anthracnose,
                Cercospora leaf spot, Wilt, Damping off,
                Stem Rot, Leaf Spot , Powdery mildew,
                and Scab disease.</p>





              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>Seed Treatment : @ 2 to 3 gm/kg of
                Seeds.
                Foliar Spray : 400 gm/acre</p>

            </div>

          </div>

        </div>
      </section>




    </>
  )
}

export default Demo70