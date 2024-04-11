import staticsbg from '../assets/staticsbg.jpg'
const Static = () => {
  return (
    <>

      <div className="bg-green-900 py-10">

        <section className="flex flex-col w-[98%] h-[50vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
          style={{ backgroundImage: `url(${staticsbg})` }}
        >

          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center text-gray-200 ">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">10+</h2>
                <p className="leading-relaxed ">YEARS OF EXCELLENCE</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">45+</h2>
                <p className="leading-relaxed">TOTAL PRODUCTS</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">20k</h2>
                <p className="leading-relaxed">DISTRIBUTOR CONNECT</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">10k</h2>
                <p className="leading-relaxed">FARMER CONNECT</p>
              </div>
            </div>
          </div>

        </section>
      </div>




    </>
  )
}

export default Static
