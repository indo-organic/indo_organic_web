
// import indomagic from '../product_image/indomagic.png'
// import alaska from '../product_image/alaska.png'
// import vaid from '../product_image/vaid.png'
// import demo70 from '../product_image/demo70.png'
// import rukka from '../product_image/rukka.png'
// const Gallery = () => {

//   return (
//     <>
// <section className="bg-white">
//       <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
//           <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-green-500 h-auto md:h-full flex flex-col">
//             <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
//               <img src={indomagic} className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Indo-magic</h3>
//             </a>
//           </div>
//           <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
//             <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
//               <img src={vaid} alt="" className="absolute inset-0 h-full w-full bg-bottom object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image2</h3>
//             </a>
//             <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
//               <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
//                 <img src={demo70} alt="" className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image3</h3>
//               </a>
//               <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
//                 <img src="https://birlahealthcare.com/wp-content/uploads/2022/02/Importance-of-Green-Vegetables.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">image4</h3>
//               </a>
//             </div>
//           </div>
//           <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
//             <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
//               <img src={alaska} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Alaska</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }
// export default Gallery





import React, { useState } from 'react';
 import logo from '../assets/logo2.png'

const Gallery= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full text-sm" />
        </div>
        <a href="javascript:void(0)" className="shrink-0"><img src={logo} alt="logo" className="md:w-[170px] w-36" /></a>
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
          <span className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">1</span>
          </span>
          <span className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
              <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">4</span>
          </span>
          <div className="inline-block cursor-pointer border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="hover:fill-[#007bff]">
              <circle cx="10" cy="7" r="6" data-original="#000000" />
              <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000" />
            </svg>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center px-10 py-3 relative">
        <div id="collapseMenu" className={`max-lg:hidden lg:block ${isMenuOpen ? 'block' : 'hidden'} lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}>
          <button onClick={toggleMenu} className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 24 24">
              <path d="M10.188 12L.98 2.792A1.5 1.5 0 1 1 3.103.669L12.31 9.875 21.52.668a1.5 1.5 0 1 1 2.123 2.123L14.436 12l9.206 9.207a1.5 1.5 0 0 1-2.123 2.123L12.31 14.124 3.103 23.33a1.5 1.5 0 0 1-2.123-2.123L10.189 12z" />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-wrap lg:justify-center max-lg:fixed max-lg:bg-white max-lg:top-0 max-lg:left-0 max-lg:bottom-0 max-lg:w-3/4 max-lg:p-10 max-lg:overflow-auto z-[99]">
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Store</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Mac</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">iPad</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">iPhone</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Watch</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Vision</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">AirPods</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">TV & Home</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Entertainment</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Accessories</a></li>
              <li className="mr-6 border-l border-gray-200 first:border-0"><a href="javascript:void(0)" className="p-3 block hover:text-[#007bff]">Support</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Gallery;












