

import React, { useState } from "react";
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
    const [dropdown1Open, setDropdown1Open] = useState(false);

    const toggleDropdown1 = () => {
        setDropdown1Open(!dropdown1Open);
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav_left">
                <Link to='/' className=''>
                    <img src={logo} alt="" />

                </Link>
            </div>
            <div className="nav_right">

                <ul className="nav_link_box">
                    <Link to='/' className='nav_links'>
                        Home
                    </Link>
                    <Link to='/aboutUs' className='nav_links'>company</Link>

                    <Link className="dropdown">
                        <Link to='' onClick={toggleDropdown1} className='nav_links'>Product & Services</Link>
                        {dropdown1Open && (
                            <ul className="dropdown-menu">
                                <Link to='/agrochemical' className='drop_links'>Agrochemical</Link>
                                <Link to='/adjuvants' className='drop_links'>adjuvants</Link>
                                <Link to='/organicRange' className='drop_links'>Organic Range</Link>
                                <Link to='/speciality' className='drop_links'>IOL speciality</Link>
                            </ul>
                        )}
                    </Link>

                    <Link to='/researchDev' className='nav_links'>Research & Development</Link>
                    {/* <Link to='/career' className='nav_links'>Career</Link> */}
                    <Link to='/contact' className='nav_links'>Contact us</Link>
                </ul>

            </div>
        </nav>



  );
}

export default Navbar;















// // import '../styles/navBarbox.scss'
// // import logo from "../assets/logo.jpg";


// // import React, { useState, useEffect } from 'react';

// // const Navigation = () => {
// //   const [isNavOpen, setIsNavOpen] = useState(false);

// //   const toggleNav = () => {
// //     setIsNavOpen(!isNavOpen);
// //   };

// //   const handleDropdownClick = (e) => {
// //     e.stopPropagation();
// //     const dropdown = e.currentTarget.nextElementSibling;
// //     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = () => {
// //       document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
// //         dropdown.style.display = 'none';
// //       });
// //     };

// //     document.addEventListener('click', handleClickOutside);

// //     return () => {
// //       document.removeEventListener('click', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <section className="navigation">
// //       <div className="nav-container">
// //         <div className="brand">
// //            <img src={logo} alt=""  className='w-[20rem]'/>
// //         </div>

// //         <nav>
// //           <div className="nav-mobile">
// //             <button id="nav-toggle" onClick={toggleNav}>
// //               <span></span>
// //             </button>
// //           </div>
// //           <ul className={isNavOpen ? 'nav-list open' : 'nav-list'}>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //             <li>
// //               <a href="/aboutUs">company</a>
// //             </li>
// //             <li>
// //               <a href="#!" onClick={handleDropdownClick}>
// //                 Services
// //               </a>
// //               <ul className="nav-dropdown">
// //                 <li>
// //                   <a href="/agrochemical">Agrochemical</a>
// //                 </li>
// //                 <li>
// //                   <a href="/adjuvants">adjuvants</a>
// //                 </li>
// //                 <li>
// //                   <a href="speciality">Biostimulants</a>
// //                 </li>
// //               </ul>
// //             </li>
// //             <li>
// //               <a href="/researchDev">Research and Development</a>
// //             </li>
// //             <li>
// //               <a href="/contact">Contact</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Navigation;

















