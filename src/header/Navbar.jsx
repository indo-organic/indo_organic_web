import React, { useState } from 'react';
import '../styles/Navbar.scss'; // Import your SCSS file
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

function Navbar() {
  const [dropdown1Open, setDropdown1Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
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
          <Link to='/aboutUs' className='nav_links'>About</Link>
          <Link className="dropdown">
            <Link to='' onClick={toggleDropdown1} className='nav_links'>Product & Services</Link>
            {dropdown1Open && (
              <ul className="dropdown-menu">
                <Link to='/protection' className='drop_links'>Protection </Link>
                <Link to='/supplements' className='drop_links '>Supplements</Link>
                <Link to='/adjuvants' className='drop_links'>adjuvants</Link>
              </ul>
            )}
          </Link>
          <Link to='/researchDev' className='nav_links'>Research & Development</Link>
          <Link to='/career' className='nav_links'>Career</Link>
          <Link to='/contact' className='nav_links'>Contact us</Link>
        </ul>





      </div>
    </nav>
  );
}

export default Navbar;
