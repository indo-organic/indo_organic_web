import '../styles/ResearchDev.scss'
// import research_img from '../assets/image1.jpg'
// import research1 from '../assets/research1.jpg'
import research2 from '../assets/research2.jpg'

// import rnd2 from '../RnDImg/rnd2.jpg'



const ResearchDev = () => {

  return (
    <>
      {/* <div classNameName="research_title_box">
          <div classNameName="research_title">
            Research and Developments
          </div>
         </div>
      <div classNameName="research">
        <div classNameName="research_box_content">
          <img src={research1} alt="" />
          <div classNameName="research_text_content">
            <p>Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p>We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need. </p>

            <p>All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers.</p>
          </div>
          <img src={research2} alt="" />
         
        </div>
      </div>  */}



      {/* <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Research and Developments</h2>
         

            <p>Our R&D team is continuously working with highly
              qualified and experienced research scientists focusing on
              Bio-efficacy and toxicology studies.</p>
            <p>We produce specialized formulations of crop nutritions,
              biostimulants and soil improvers that meet the needs of
              each physiological stage of the crop, offering suitable
              products for each condition according to our customers
              need. </p>

            <p>All Our products are independently tested for efficacy,
              safety and wellness for the environment by accredited
              labs, our customers and consumers.</p>
               


            
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/494726892/photo/model-plant-in-a-research-lab.jpg?s=612x612&w=0&k=20&c=FgYna7smf8rXvnn1Lc_ClFproFIk8tclsoi3TJ8VTcE=" alt="office content 1"/>
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src={rnd2} alt="office content 2"/>
              </div>
          </div>
      </section> */}


      <div className="flex  gap-4 w-[100%] h-[30rem] bg-cover bg-fixed bg-top justify-center items-center m-auto"
        style={{ backgroundImage: "url(https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/04/30115809/imgblog231.jpg)" }}>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">research and Development</h2>
          <h2 className="flex gap-4 text-white py-2">
            <p>Home  &#9702;</p>
            <p>Company  &#9702;</p>
            <p>Research and Dev  &#9702;</p>
          </h2>

        </div>

      </div>
      <section className="">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          {/* <div className="flex flex-col w-[100%] h-[40vh] bg-cover bg-fixed bg-bottom justify-center items-center m-auto"
            style={{ backgroundImage: `url(${research2})` }}>
            <p className='text-white text-[3rem] font-bold'>Research and Development</p>
          </div> */}


          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">


                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">Sustainable Agriculture is what the World is working on
                      and we in India have equally embraced the strategies
                      and sciences to develop products which can ensure
                      sustained Profitability, Eco-system and Quality of Life for
                      farmers.
                    </p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">Indo Organics Pvt. Ltd. has begun its journey with a
                      Possibility of Future with the same mission. Our strategy
                      rests on promise and commitment to provide consistent
                      quality, continuous availability and ever-growing profitability for our channel partners
                    </p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">IOL in technical collaboration with Indogulf Cropsciences USA Corp, Orlando, introduces a mix of Organic products
                      and a range of non-organic pesticides, fungicides, plant nutrients, crop boosters and energizers. The focus is simple
                      and clear – Farmer to get a better yield of a quality crop. The product matrix has been developed as per the stage of the
                      crop and the farmer is being educated about this through markings on the pack design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img width="600" height="600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUyru3TGAWSTKLnDpLjMCvfLcLiIJJKM0f-6s-8ba8w&s" alt="About Us Image" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" style={{ color: 'transparent' }} />
            </div>
          </div>
        </div>
      </section>
        



    </>
  )
}

export default ResearchDev