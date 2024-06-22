
import { Link } from 'react-router-dom'
  // import homeResearch from '../assets/homeResearchV.mp4'
import homeResearch from '../assets/aboutVid.mp4'
const OurStory = () => {
  return (
    <>
      <div className='bg-gray-100 h-[38rem] ' >
        <div className=" relative flex items-center justify-center overflow-hidden bg-whitesmoke z-10">
          <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative">
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="flex  uppercase text-xl text-black font-sans">About Us</p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-black">
                    Quality is never by {' '}
                    <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-green-700 ">Chance</span>
                  </h2>
                  <p className="text-base  text-black font-serif ">Welcome to Indo Organics, your trusted partner in sustainable agrochemical solutions. Founded with a vision to revolutionize the agricultural industry, Indo Organics is committed to providing eco-friendly and innovative products that enhance crop yield, protect the environment, and support farmers worldwide.

                  </p>
                  <div className="mt-10 flex flex-col items-center md:flex-row">
                    <Link to='/aboutUs' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-900 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Know more</span>
                    </Link>


                  </div>
                </div>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2 ">
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[1rem] rounded-br-none rounded-tl-none ">
                  <video src={homeResearch} loop autoPlay muted></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStory




// import { Link } from "react-router-dom"

// const OurStory = () => {
//   return (
//     <div className="h-screen dark:bg-gray-800">

//     <div
//       className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
//       <div className="col-span-2 mb-8">
//         <p className="text-lg font-medium text-purple-500 dark:text-purple-500">About Us</p>
//         <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
//         Quality is never by Chance</h2>
//         <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Welcome to Indo Organics, your trusted partner in sustainable agrochemical solutions. Founded with a vision to revolutionize the agricultural industry, Indo Organics is committed to providing eco-friendly and innovative products that enhance crop yield, protect the environment, and support farmers worldwide.</p>
//         <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
//           <div>
//             <Link to='aboutUs'
//               className="inline-flex items-center text-base font-medium text-purple-500 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
//               Know more about us
//               <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd"
//                   d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                   clip-rule="evenodd"></path>
//               </svg>
//             </Link>
//           </div>
//           <div>
//             <Link to='/contact'
//               className="inline-flex items-center text-base font-medium text-purple-500 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
//               Contact us
//               <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd"
//                   d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                   clip-rule="evenodd"></path>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
//         <div>
//           <svg className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
//             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd"
//               d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
//               clip-rule="evenodd"></path>
//           </svg>
//           <h3 className="mb-2 text-2xl font-bold dark:text-white">60+ Products</h3>
//           <p className="font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, laboriosam.</p>
//         </div>
//         <div>
//           <svg className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
//             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
//             </path>
//           </svg>
//           <h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
//           <p className="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the world
//           </p>
//         </div>
//         <div>
//           <svg className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
//             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd"
//               d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
//               clip-rule="evenodd"></path>
//           </svg>
//           <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
//           <p className="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional websites
//           </p>
//         </div>
//         <div>
//           <svg className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
//             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
//             </path>
//           </svg>
//           <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
//           <p className="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default OurStory



// import React from 'react'

// const OurStory = () => {
//   return (

//     <section className='bg-gray-100'>
//       <div className="px-8 py-[4.5rem] mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-[100%]justify-center">
//         <div className="flex flex-col">

//           <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
//             <div>
//               <h1>Indo Organics Pvt. Ltd</h1>
//               <p className="text-balance">


//                 "Developing agricultural solutions to enhance crop productivity."
//               </p>
//             </div>
//           </div>
//           <div className="mt-6 border-t pt-12">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
//               <div>
//                 <span className="text-gray-600 uppercase text-xs font-medium">Who we are</span>
//                 <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
//                   Quality is never by Chance
//                 </p>
//                 <p className="text-sm mt-4 text-gray-700 text-balance">
//                   Welcome to Indo Organics, your trusted partner in sustainable agrochemical solutions. Founded with a vision to revolutionize the agricultural industry, Indo Organics is committed to providing eco-friendly and innovative products that enhance crop yield, protect the environment, and support farmers worldwide.
//                 </p>
//                 <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       className="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
//                       <path d="M9 13l3 3l-3 3"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">60+ products</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M6 18l0 -3"></path>
//                       <path d="M10 18l0 -6"></path>
//                       <path d="M14 18l0 .01"></path>
//                       <path d="M18 18l0 .01"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Believe in Organic Farming</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
//                       <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
//                       <path d="M12 16v3"></path>
//                       <path d="M12 10v-7"></path>
//                       <path d="M9 6l3 -3l3 3"></path>
//                       <path d="M12 10v-7"></path>
//                       <path d="M9 6l3 -3l3 3"></path>
//                       <path d="M14.894 12.227l6.11 -2.224"></path>
//                       <path d="M17.159 8.21l3.845 1.793l-1.793 3.845"></path>
//                       <path d="M9.101 12.214l-6.075 -2.211"></path>
//                       <path d="M6.871 8.21l-3.845 1.793l1.793 3.845"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Empowering Farmers with Leading Solutions</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
//                       <path d="M16 9l-4 4"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Experience and Innovation Since 2016</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="h-full md:order-first">
//                 {/* <img
//                   src="https://thefactfactor.com/wp-content/uploads/2019/07/Crops.png"
//                   alt="#_"
//                   className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
//                 /> */}
//                 <video className='bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center' src={homeResearch} loop autoPlay muted></video>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
//               <div>
//                 <span className="text-gray-600 uppercase text-xs font-medium">Research and Development</span>
//                 <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
//                   Your Partner in Agricultural Excellence and Environmental Stewardship.
//                 </p>
//                 <p className="text-sm mt-4 text-gray-700 text-balance">
//                   Fostering Prosperity Through Innovative Agrochemical Solutions. Cultivating Sustainability, Yielding Success. Bridging Science with Nature, Empowering Farmers for a Greener Tomorrow.
//                 </p>
//                 <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="icon icon-tabler icon-tabler-database text-gray-700 size-4"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
//                       <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
//                       <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Believe in Innovation</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="icon icon-tabler icon-tabler-building text-gray-700 size-4"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M3 21l18 0"></path>
//                       <path d="M9 8l1 0"></path>
//                       <path d="M9 12l1 0"></path>
//                       <path d="M9 16l1 0"></path>
//                       <path d="M14 8l1 0"></path>
//                       <path d="M14 12l1 0"></path>
//                       <path d="M14 16l1 0"></path>
//                       <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Continuous Learning and Adaptation</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="icon icon-tabler icon-tabler-augmented-reality-2 text-gray-700 size-4"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"></path>
//                       <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"></path>
//                       <path d="M13 14.5v4.5l4 2.5"></path>
//                       <path d="M17 17l4 -2.5"></path>
//                       <path d="M11 4h2"></path>
//                     </svg>
//                     <span className="text-gray-950 font-medium text-sm">Long-term Vision and Strategic Planning</span>
//                   </div>
//                   <div className="inline-flex items-center gap-2 text-xs text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="icon icon-tabler icon-tabler-time-duration-0 text-gray-700 size-4"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M3 12v.01"></path>
//                       <path d="M21 12v.01"></path>
//                       <path d="M12 21v.01"></path>
//                       <path d="M12 3v.01"></path>
//                       <path d="M7.5 4.2v.01"></path>
//                       <path d="M16.5 4.2v.01"></path>
//                       <path d="M16.5 19.8v.01"></path>
//                       <path d="M7.5 19.8v.01"></path>
//                       <path d="M4.2 16.5v.01"></path>
//                       <path d="M19.8 16.5v.01"></path>
//                       <path d="M19.8 7.5v.01"></path>
//                       <path d="M4.2 7.5v.01"></path>
//                       <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z"></path>
//                     </svg>
                    
//                     <span className="text-gray-950 font-medium text-sm">Collaboration and Cross-disciplinary Approaches</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="h-full" >
//                 <img
//                   src="https://www.tata.com/content/dam/tata/images/newsroom/community/desktop/sustainable_farming_tata_trusts_secondary3_desktop_753.jpg"
//                   alt="#_"
//                   className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
//             <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
//               <div className="flex w-0 flex-1 items-center p-4">
//                 <div className="w-full">
//                   <p className="text-sm font-medium text-neutral-900">Tutorial</p>
//                   <p className="mt-1 text-sm text-neutral-500">
//                     How to simplify your code and avoid repeating your markup with Astrojs and Tailwind CSS
//                   </p>
//                   <p className="mt-2 text-xs text-orange-500 underline">
//                     <a href="https://lexingtonthemes.com">by © Lexington Themes</a>
//                   </p>
//                 </div>
//               </div>
//               <div className="flex">
//                 <div className="flex flex-col divide-y divide-neutral-200">
//                   <div className="flex h-0 flex-1">
//                     <a
//                       href="https://lexingtonthemes.com/tutorials/how-to-simplify-your-code-and-avoid-repeating-your-markup-with-astrojs-and-tailwind-css/"
//                       type="button"
//                       className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     >
//                       Tutorial
//                     </a>
//                   </div>
//                   <div className="flex h-0 flex-1">
//                     <a
//                       href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/simplified-markup/index.astro"
//                       className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     >
//                       Get the code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default OurStory









