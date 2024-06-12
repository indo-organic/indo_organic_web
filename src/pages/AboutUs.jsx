import aboutImg4 from '../AboutImg/about4.jpg'
import AboutImg from '../AboutImg/aboutImg3.jpg'

const AboutUs = () => {
  return (
    <>
    
      <div className="relative mx-auto  w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src={AboutImg} alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">ABOUT </h2>
        </div>
      </div>
      <div className='flex  justify-center w-[100%] py-10  bg-white  text-black'>
        <div className="w-[30%]  ">
          <img src={aboutImg4} alt="" />
        </div>
        <div className='w-[60%] bg-gray-100'>
          <div className='p-4 py-[3rem]'>
            <p className='py-2 text-3xl text-green-500 font-bold'>WHO WE ARE ?
            </p>
            <p className='py-1 '>&#9702; Established in 2010 in association with Indogulf Cropsciences PTY, LTD, Australia.</p>
            <p className='pt-3'>&#9702; One of the leading players in the Indian crop industry. We are pioneers in Biostimulants and safe agricultural inputs</p>
            <p className='pt-3  '>&#9702; Focuses on manufacturing and marketing of Green Technology based Plant health and Nutritional Products.</p>
            <p className='pt-3 ' >&#9702; Has introduced a mix of organic products range including plant nutrients, Biostimulants, crop boosters and
              energizers.</p>
            <p className='pt-3 ' >&#9702; Has developed Product matrix as per the stage of the crop focusing on the farmers to get a better yield of a quality
              product.</p>

          </div>

          <div className='p-4 py-[3rem]'>
            <p className='py-2 text-3xl text-green-500 font-bold'>PHILOSOPHY
            </p>
            <p className='text-l  font-bold'>Key- A Symbol of Our Promise</p>
            <p className='py-1 '>&#9702; Our mascot is small Key which we believe is Key to Success</p>
            <p className='pt-3'>&#9702; For us Key is nothing but attitude, which is embedded in all its positivity among our team members and our way of doing business</p>
            <p className='pt-3 ' >&#9702; The attitude to create possibilities of success and growth for all associated with our company.
            </p>
            <p className='pt-3 ' >&#9702; This is the Key to growth which will be the differentiation.</p>
          </div>
        </div>
      </div>

      {/* 
      <section id="comparison" aria-label="QuickEdit vs traditional editor" className=" py-20 sm:py-32 bg-gray-400 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-[80%] h-[20vh] bg-cover bg-fixed bg-bottom justify-center items-center m-auto"
            style={{ backgroundImage: `url(${contactImg})` }}>
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl uppercase">Indo organics: the future of agrochemical</h2>

          </div>
          <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">100%</p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white"> ✅ Research and Development </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">100%</p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white">💰 affordable </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">100%</p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white">😎 Increase the qaulity of your crops</div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section> */}


      {/* <section className="bg-gray-400">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">

            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Vision</h2>
              <p className="mt-4 text-white text-lg">At Indo Organic, our vision is to lead the agricultural industry towards a sustainable and prosperous future. We envision a world where farming practices harmonize with nature, where the soil is nurtured, and where the health and well-being of both people and the planet are paramount</p>
              <div className="mt-8">
                <div href="#" className="text-blue-500  font-medium">Learn more about our vision <span className="ml-2">&#8594;</span></div>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <img src="https://st.depositphotos.com/1229718/4695/i/450/depositphotos_46956433-stock-photo-investment-success.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>

          </div>
        </div>
      </section> */}

      {/* <section className="bg-gray-400">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">

            <div className="mt-12 md:mt-0">
              <img src="https://st.depositphotos.com/1229718/4695/i/450/depositphotos_46956433-stock-photo-investment-success.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Mission</h2>
              <p className="mt-4 text-white text-lg">At Indo Organic, our mission is to revolutionize agriculture by providing innovative agrochemical solutions and organic products that enhance crop productivity while safeguarding environmental sustainability. We are dedicated to empowering farmers with knowledge, tools, and resources to adopt sustainable farming practices, promoting soil health, biodiversity, and ecological balance.</p>
              <div className="mt-8">
                <div className="text-blue-500 hover:text-blue-600 font-medium">Learn more about our mission <span className="ml-2">&#8594;</span></div>
              </div>
            </div>


          </div>
        </div>
      </section> */}


    </>
  )
}

export default AboutUs