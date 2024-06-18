import aboutImg4 from '../AboutImg/about4.jpg'
import AboutImg from '../AboutImg/aboutImg3.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>

      <div className="relative mx-auto  w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src={AboutImg} alt="about image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">ABOUT </h2>
        </div>
      </div>



      {/* breadcrums */}
      <div className="py-4 ">
        <div className="container">
          <div className="w-full ">
            <div className="px-4 py-1 border rounded-lg border-light dark:border-dark-3 shadow-1 dark:shadow-card bg-tg-bg dark:bg-dark-2 sm:px-6 md:px-8 md:py-5">
              <ul className="flex items-center">
                <Link to='/' className="flex items-center">


                  HOME

                  <span className="px-3 text-body-color dark:text-dark-6">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      className="fill-current"
                    >
                      <path d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"
                      />
                    </svg>
                  </span>
                </Link>

                <li className="text-base font-medium text-primary">About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ends */}














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