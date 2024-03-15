import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Home from './pages/Home'
import OurJourney from './pages/OurJourney'
import Category from './pages/Category'
import Contact from './pages/Contact'
import ResearchDev from './pages/ResearchDev'
import Career from './pages/Career'
import Journey from './footer/Journey'
import VisionNMission from './footer/VisionNMission'
import BoardOfDirector from './footer/BoardOfDirector'
import News from './footer/News'
import TermsConditions from './footer/TermsConditions'
import PrivacyPolicy from './footer/PrivacyPolicy'
import ReturnPolicy from './footer/ReturnPolicy'
import Domestic from './footer/Domestic'
import International from './footer/International'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ourJourney' element={<OurJourney />} />
          <Route path='/category' element={<Category />} />
          <Route path='/researchDev' element={<ResearchDev />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/journey' element={<Journey />} />
          <Route path='/VisionNMission' element={<VisionNMission />} />
          <Route path='/BoardOfDirector' element={<BoardOfDirector />} />

          <Route path='/news' element={<News />} />
          <Route path='/termsCondition' element={<TermsConditions />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/returnPolicy' element={<ReturnPolicy />} />
          <Route path='/Domestic' element={<Domestic />} />
          <Route path='/International' element={<International />} />


        </Routes>
        <Footer />
      </Router>



    </>
  )
}

export default App