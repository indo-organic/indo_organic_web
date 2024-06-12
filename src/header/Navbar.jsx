

// import React, { useState } from "react";
// import '../styles/Navbar.scss';
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// function Navbar() {
//     const [dropdown1Open, setDropdown1Open] = useState(false);

//     const toggleDropdown1 = () => {
//         setDropdown1Open(!dropdown1Open);
//     };


//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="nav_left">
//                 <Link to='/' className=''>
//                     <img src={logo} alt="" />

//                 </Link>
//             </div>
//             <div className="nav_right">

//                 <ul className="nav_link_box">
//                     <Link to='/' className='nav_links'>
//                         Home
//                     </Link>
//                     <Link to='/aboutUs' className='nav_links'>company</Link>

//                     <Link className="dropdown">
//                         <Link to='' onClick={toggleDropdown1} className='nav_links'>Product & Services</Link>
//                         {dropdown1Open && (
//                             <ul className="dropdown-menu">
//                                 <Link to='/agrochemical' className='drop_links'>Agrochemical</Link>
//                                 <Link to='/adjuvants' className='drop_links'>adjuvants</Link>
//                                 <Link to='/organicRange' className='drop_links'>Organic Range</Link>
//                                 <Link to='/speciality' className='drop_links'>IOL speciality</Link>
//                             </ul>
//                         )}
//                     </Link>

//                     <Link to='/researchDev' className='nav_links'>Research & Development</Link>

//                     <Link to='/contact' className='nav_links'>Contact us</Link>
//                 </ul>

//             </div>
//         </nav>



//     );
// }

// export default Navbar;




// //  nav 2

import React from 'react'
import logo from "../assets/logo2.png";
import { Link } from 'react-router-dom'
// import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaRegNewspaper } from "react-icons/fa6";


const Navbar = () => {
    return (
        <header className='shadow-md bg-gray-50 font-[sans-serif] tracking-wide sticky top-0 w-full  z-50 h-[8rem] '>
            <section
                className='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>

               

                <a href="" className="shrink-0">
                    <img src={logo} alt="logo"
                    className='md:w-[160px] w-36' />
                </a>


                <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">

                    {/* <span className="relative">
                        <TiWeatherPartlySunny className="text-2xl cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" />

                    </span> */}
                    <div className="inline-block cursor-pointer border-gray-300">
                        <a href="https://krishijagran.com/" target='blank'>
                            <FaRegNewspaper className="text-2xl cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" />
                        </a>




                    </div>
                </div>
            </section>

            <div className='flex flex-wrap justify-center px-10 py-3 relative'>

                <div id="collapseMenu"
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
                            <a href=""><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                            </a>
                        </li>
                        <Link to='/' className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                            className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[16px]'>Home</a>
                        </Link>



                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href=''
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Company
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <Link to='/aboutUs' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                                      
                                        Our Story
                                    </a>
                                </Link>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                                       
                                        Vision & Values
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Leadership Insights
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Milestones & Achievements
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href=''
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Products & Solution
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <Link to='/insecticide' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        Insecticide
                                    </a>
                                </Link>
                                <Link to='/fungicide' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        Fungicide
                                    </a>
                                </Link>
                                <Link to='/herbicide' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        Herbicide
                                    </a>
                                </Link>
                                <Link to='/comboB' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        Adjuvant
                                    </a>
                                </Link>
                                <Link to='/soilrevivers' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block  py-2'>

                                        Soil Revivers
                                    </a>
                                </Link>
                                <Link to='/Nutrition' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        PGRs/Nutrition
                                    </a>
                                </Link>
                                <Link to='/protection' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-2'>

                                        Protection
                                    </a>
                                </Link>
                            </ul>
                        </li>

                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href=''
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Our Expertise
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Agri-Innovations
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Industry Analysis
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Sustainable Practices
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Technology Intergration
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href=''
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Resources
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <Link to='/faqs' className='border-b py-3'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-3'>

                                        Faq's & Knowledge
                                    </a>
                                </Link>
                                <Link to='/weather' className='border-b py-5'>
                                    <a href=''
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block py-3'>

                                        Weather Intelligence
                                    </a>
                                </Link>

                            </ul>
                        </li>



                        <Link to='/contact' className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                            className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>contact us</a></Link>
                    </ul>
                </div>
                <div id="toggleOpen" className='flex ml-auto lg:hidden'>
                    <button>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                               clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar








