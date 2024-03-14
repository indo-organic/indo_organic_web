import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Home from './pages/Home'
import OurJourney from './pages/OurJourney'
import Category from './pages/Category'
import Contact from './pages/Contact'
import ResearchDev from './pages/ResearchDev'
import Career from './pages/Career'

const App = () => {
  return (
    <>
          <Router>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourJourney' element={<OurJourney/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route  path='/researchDev' element={<ResearchDev/>}/>
        <Route  path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
      </Router>

    
    
    </>
  )
}

export default App