import '../styles/Navbar.scss'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div>


        <div className="navbar_links">
          <Link to='/' className='link_nav'>
          Home
          
          </Link>

          <Link to='/category' className='link_nav'>
           Categories
          </Link>


         
          <Link to='/about' className='link_nav'>
           about
          </Link>


        
              
          <Link to='/contact' className='link_nav'>
           Contact us
          </Link>



        </div>




      </div>







    </>
  )
}

export default Navbar