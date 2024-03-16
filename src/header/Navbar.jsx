import { CiMenuFries } from "react-icons/ci";


// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.scss'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      
      <div className="navbar-brand">
        <div className="nav_left">
          <img src={logo} alt="" />
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
        <CiMenuFries />

        </button>
      </div>
      <ul className="nav_right">
        < Link to='/' className='nav_link'> home </Link>
        < Link to='/aboutUs' className='nav_link'> About us </Link>
        < Link to='/category' className='nav_link'> Category</Link>
        < Link to='/researchDev' className='nav_link'> R & D </Link>
        < Link to='/career' className='nav_link'> career </Link>
        < Link to='/contact' className='nav_link'> Contact us</Link>

      </ul>
     
    </nav>
  );
};

export default Navbar;
