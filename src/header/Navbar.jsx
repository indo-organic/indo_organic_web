import '../styles/Navbar.scss'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="nav_left">
        <img src={logo} alt="" />
      </div>

      <div className="nav_right">

          < Link to='/' className='nav_link'> home </Link>
          < Link to='/ourJourney' className='nav_link'> our journey </Link>
          < Link to='/category' className='nav_link'> Category</Link>
          < Link to='/researchDev' className='nav_link'> R & D </Link>
          < Link to='/career' className='nav_link'> career </Link>
          < Link to='/contact' className='nav_link'> Contact us</Link>


      </div>


    </div>
    
    
    
    
    
    
    </>
  )
}

export default Navbar