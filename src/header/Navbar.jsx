

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











//  nav 2

import React from 'react'
import logo from "../assets/logo2.png";
import { Link } from 'react-router-dom'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaRegNewspaper } from "react-icons/fa6";


const Navbar = () => {
    return (
        <header className='shadow-md bg-gray-50 font-[sans-serif] tracking-wide sticky top-0 w-full  z-50 '>
            <section
                className='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>

                {/* <div className='left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
                        className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type='text' placeholder='Search...' className="outline-none bg-transparent w-full text-sm" />
                </div> */}

                <a href="javascript:void(0)" className="shrink-0"><img src={logo} alt="logo"
                    className='md:w-[200px] w-36' />
                </a>

                <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">

                    <span className="relative">
                        <TiWeatherPartlySunny className="text-2xl cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" />

                    </span>
                    <div className="inline-block cursor-pointer border-gray-300">
                        <a href="https://www.agriculture.com/news" target='blank'>
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
                            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                            </a>
                        </li>
                        <Link to='/' className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                            className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Home</a>
                        </Link>



                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href='javascript:void(0)'
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Company
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <Link to='/aboutUs' className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-4 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                                                data-original="#000000" />
                                        </svg>
                                        Our Story
                                    </a>
                                </Link>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-4 inline-block"
                    viewBox="0 0 1700 1700">
                    <path
                      d="M916.7 1269.4c-10.7 0-20.4-7.2-23.2-18l-29.9-114.7c-3.3-12.8 4.3-25.9 17.2-29.3 12.8-3.3 25.9 4.3 29.3 17.2l29.9 114.7c3.3 12.8-4.3 25.9-17.2 29.3-2 .5-4.1.8-6.1.8zm-169.4 0c-2 0-4-.3-6.1-.8-12.8-3.3-20.5-16.4-17.2-29.3l29.9-114.7c3.3-12.8 16.4-20.5 29.3-17.2 12.8 3.3 20.5 16.4 17.2 29.3l-29.9 114.7c-2.8 10.8-12.6 18-23.2 18z"
                      data-original="#000000" />
                    <path
                      d="M1066.6 1358.8H597.4c-13.3 0-24-10.7-24-24 0-62.6 50.9-113.5 113.5-113.5h290.4c62.6 0 113.5 50.9 113.5 113.5-.2 13.3-10.9 24-24.2 24zm-440.7-48H1038c-9.6-24.3-33.3-41.5-60.9-41.5H686.8c-27.6.1-51.3 17.3-60.9 41.5zM276.4 762.7c-13.3 0-24-10.7-24-24V395c0-29.7 24.2-53.9 53.9-53.9h1051.4c29.7 0 53.9 24.2 53.9 53.9v297.8c0 13.3-10.7 24-24 24s-24-10.7-24-24V395c0-3.2-2.6-5.9-5.9-5.9H306.3c-3.2 0-5.9 2.6-5.9 5.9v343.7c0 13.2-10.7 24-24 24zm904.5 392H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24zm0-120.8H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24z"
                      data-original="#000000" />
                    <path
                      d="M424.1 1358.8H128.4c-25.6 0-46.4-20.8-46.4-46.4V761.1c0-25.6 20.8-46.4 46.4-46.4h295.7c25.6 0 46.4 20.8 46.4 46.4v551.3c0 25.6-20.8 46.4-46.4 46.4zm-294.1-48h292.5V762.7H130z"
                      data-original="#000000" />
                    <path
                      d="M446.5 853.6H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 414.4H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm1125.1 90.8h-368.3c-25.6 0-46.4-20.8-46.4-46.4V715.2c0-25.6 20.8-46.4 46.4-46.4h368.3c25.6 0 46.4 20.8 46.4 46.4v597.2c0 25.6-20.8 46.4-46.4 46.4zm-366.7-48H1570v-594h-365.1z"
                      data-original="#000000" />
                    <path
                      d="M1594 811.8h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 452h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
                      data-original="#000000" />
                  </svg> */}
                                        Vision & Values
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Leadership Insights
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Milestones & Achievements
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href='javascript:void(0)'
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Products & Solution
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Insecticide
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Fungicide
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Herbicide
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Adjuvant
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Soil Revivers
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        PGRs/Nutrition
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Protection
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href='javascript:void(0)'
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Our Expertise
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Agri-Innovations
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Industry Analysis
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Sustainable Practices
                                    </a>
                                </li>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Technology Intergration
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <a href='javascript:void(0)'
                                className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Resources
                            </a>
                            <ul
                                className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <Link to='/faqs' className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Faq's & Knowledge
                                    </a>
                                </Link>
                                <Link to='/weather' className='border-b py-5'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Weather Intelligence
                                    </a>
                                </Link>
                                <li className='border-b py-3'>
                                    <a href='javascript:void(0)'
                                        className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>

                                        Tutorial Hub
                                    </a>
                                </li>

                            </ul>
                        </li>



                        <Link to='/contact' className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                            className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>contact us</a></Link>
                    </ul>
                </div>

                <div id="toggleOpen" className='flex ml-auto lg:hidden'>
                    <button>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar



















