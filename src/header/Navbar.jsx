// import React, { useState } from "react";
// import '../styles/Navbar.scss'; // Import your SCSS file
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";


// function Navbar() {
//   const [dropdown1Open, setDropdown1Open] = useState(false);

//   const toggleDropdown1 = () => {
//     setDropdown1Open(!dropdown1Open);
//   };




//   return (


//     <>

//       {/* <nav classNameName="navbar">
//         <div classNameName="nav_left">
//           <Link to='/' classNameName=''>
//             <img src={logo} alt="" />

//           </Link>
//         </div>
//         <div classNameName="nav_right">

//           <ul classNameName="nav_link_box">
//             <Link to='/' classNameName='nav_links'>
//               Home
//             </Link>
//             <Link to='/aboutUs' classNameName='nav_links'>About</Link>

//             <Link classNameName="dropdown">
//               <Link to='' onClick={toggleDropdown1} classNameName='nav_links'>Product & Services</Link>
//               {dropdown1Open && (
//                 <ul classNameName="dropdown-menu">
//                   <Link to='/agrochemical' classNameName='drop_links'>Agrochemical</Link>
//                   <Link to='/adjuvants' classNameName='drop_links'>adjuvants</Link>
//                   <Link to='/organicRange' classNameName='drop_links'>Organic Range</Link>
//                   <Link to='/speciality' classNameName='drop_links'>IOL speciality</Link>
//                 </ul>
//               )}
//             </Link>

//             <Link to='/researchDev' classNameName='nav_links'>Research & Development</Link>
//             <Link to='/career' classNameName='nav_links'>Career</Link>
//             <Link to='/contact' classNameName='nav_links'>Contact us</Link>
//           </ul>

//         </div>
//       </nav> */}




//     </>



//   );
// }

// export default Navbar;









import React, { useState } from "react";
// import '../styles/Navbar.scss'; // Import your SCSS file
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  // const [dropdown1Open, setDropdown1Open] = useState(false);

  // const toggleDropdown1 = () => {
  //   setDropdown1Open(!dropdown1Open);
  // };


  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="navbar">
    //   <div className="nav_left">
    //     <Link to='/' className=''>
    //       <img src={logo} alt="" />

    //     </Link>
    //   </div>
    //   <div className="nav_right">

    //     <ul className="nav_link_box">
    //       <Link to='/' className='nav_links'>
    //         Home
    //       </Link>
    //       <Link to='/aboutUs' className='nav_links'>About</Link>

    //       <Link className="dropdown">
    //         <Link to='' onClick={toggleDropdown1} className='nav_links'>Product & Services</Link>
    //         {dropdown1Open && (
    //           <ul className="dropdown-menu">
    //             <Link to='/agrochemical' className='drop_links'>Agrochemical</Link>
    //             <Link to='/adjuvants' className='drop_links'>adjuvants</Link>
    //             <Link to='/organicRange' className='drop_links'>Organic Range</Link>
    //             <Link to='/speciality' className='drop_links'>IOL speciality</Link>
    //           </ul>
    //         )}
    //       </Link>

    //       <Link to='/researchDev' className='nav_links'>Research & Development</Link>
    //       <Link to='/career' className='nav_links'>Career</Link>
    //       <Link to='/contact' className='nav_links'>Contact us</Link>
    //     </ul>

    //   </div>
    // </nav>




    // <nav className="bg-white sticky top-0 w-full z-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0 w-48">
    //           <Link to="/" className="w-10">
    //             <img src={logo} alt="" className="w-[40rem]" />
    //           </Link>
    //         </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //             <Link
    //               to="/"
    //               href="#"
    //               className=" text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               to="/aboutUs"
    //               href="#"
    //               className="text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               About
    //             </Link>
    //             <div className="relative">
    //               <button
    //                 onClick={toggleNavbar}
    //                 className="text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring"
    //               >
    //                 Product & Services
    //               </button>
    //               {isOpen && (
    //                 <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
    //                   <div className="py-1">
    //                     <Link
    //                       to="/agrochemical"
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                     >
    //                       agrochemical
    //                     </Link>
    //                     <Link
    //                       to="/adjuvants"
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                     >
    //                       adjuvants
    //                     </Link>
    //                     <Link
    //                       to="/organicRange"
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                     >
    //                       organic range
    //                     </Link>
    //                     <Link
    //                       to="/speciality"
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                     >
    //                       iol speciality
    //                     </Link>
    //                   </div>
    //                 </div>
    //               )}
    //             </div>
    //             <Link
    //               to="/researchDev"
    //               href="#"
    //               className="text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Research and Devlopment
    //             </Link>
    //             <Link
    //               to="/career"
    //               href="#"
    //               className="text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               career
    //             </Link>
    //             <Link
    //               to="/contact"
    //               href="#"
    //               className="text-black  hover:bg-green-400 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               contact us
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="-mr-2 flex md:hidden">
    //         <button
    //           onClick={toggleNavbar}
    //           type="button"
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {!isOpen ? (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {isOpen && (
    //     <div className="md:hidden" id="mobile-menu">
    //       <div className="px-3 pt-2 pb-3 space-y-1 sm:px-3">
    //         <Link
    //           to="/"
    //           href="#"
    //           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           to="/"
    //           href="#"
    //           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           About
    //         </Link>
    //         <div className="relative">

    //           {isOpen && (
    //             <div className="absolute left-[50%] mt-2 h-40 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
    //               <div className="py-1">
    //                 <Link
    //                   to="/agrochemical"
    //                   href="#"
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Agrochemical
    //                 </Link>
    //                 <Link
    //                   to="/agrochemical"
    //                   href="#"
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                 >
    //                   adjuvants
    //                 </Link>
    //                 <Link
    //                   to="/agrochemical"
    //                   href="#"
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Organic range
    //                 </Link>
    //                 <Link
    //                   to="/agrochemical"
    //                   href="#"
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                 >
    //                   IOL Speciality
    //                 </Link>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //         <Link
    //           to="/researchDev"
    //           href="#"
    //           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Rearch & Development
    //         </Link>
    //         <Link
    //           to="/researchDev"
    //           href="#"
    //           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Career
    //         </Link>
    //         <Link
    //           to="/contact"
    //           href="#"
    //           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Contact us
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>



    // <nav className="w-[100%] h-[10vh] items-center justify-center bg-slate-400 text-black flex uppercase  sticky top-0">

    //   <div className="w-[10%] bg-yellow-400">
    //     logo
    //   </div>
    //   <div className="flex w-[60%] justify-evenly bg-red-300 ">
    //     <p>home</p>
    //     <p>company</p>
    //     <p>services</p>
    //     <p>r and d</p>
    //     <p>contact us</p>
    //   </div>
    //   <div className="nr w-[20%] bg-green-400">
    //     right side

    //   </div>

    // </nav>
















  );
}

export default Navbar;


