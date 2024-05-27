import tringoImg from '../../product_image/tringo.png'
// import tringo_title from '../../titleImg/Tringo.png'
const Tringo = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4  bg-green-600 text-white p-16 text-center ">Fungicide</h1>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={tringoImg} alt="Product Image" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {/* <img src={tringo_title} alt="" className='w-72 my-4' /> */}
              </h2>
              <p className="leading-relaxed">It is an effective fungicide with protective, creative and
                eradicative action. It is a triple action fungicide : Contact,
                Systemic & Vapor. It controls powdery mildew, fruit rot
                diseases of chili and leaf spot, pod blight disease of Soybean.
                Tebuconazole inhibit sterol biosynthesis SBI under the
                process of C -14 demethylase inhibitors DMI which
                interferes in the process of building the structure of the fungal
                cell wall.
                Sulphur has a multi-site action with solubility in fatty acids
                which helps in entering the fungal cells through lipids in the
                plasma membrane and thereby getting reduction of hydrogen
                sulphide and killing the cell or spore. It disrupts electron
                transport along with cytochrome.
              </p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target  crops</h3>
              <p className='leading-relaxed m-4'>Chilli, soyabean</p>

              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Target pests & Diseases</h3>
              <p className='leading-relaxed m-4'>Chilli : Powdery mildew & Fruit rot;
                Soybean :Leaf spot & Pod blight </p>





              <h3 className="text-gray-900 text-2xl title-font font-medium m-3">Dosage</h3>
              <p className='leading-relaxed m-4'>Chilli - 500 g/acre
                Soybean - 500 g/acre</p>

            </div>

          </div>

        </div>
      </section>



    </>
  )
}

export default Tringo