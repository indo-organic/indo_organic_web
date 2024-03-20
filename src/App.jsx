import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Home from './pages/Home'
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
import Top from './components/Top'
import AboutUs from './pages/AboutUs'

import Supplements from './header/Supplements'
import Adjuvants from './header/Adjuvants'

import Agrochemical from './header/Agrochemical'

      // insecticide
      import Insecticide from './header/Insecticide'
import Rukka from './productPage/insecticide/Rukka'
import Alaska from './productPage/insecticide/Alaska'
import Cyphones from './productPage/insecticide/Cyphones'
import Indoxam from './productPage/insecticide/Indoxam'
import Vaid from './productPage/insecticide/Vaid'
import FiproSix from './productPage/insecticide/FiproSix'
import Dhamaal from './productPage/insecticide/Dhamaal'
import Emanate from './productPage/insecticide/Emanate'
import Thypo from './productPage/insecticide/Thypo'
import Grid40 from './productPage/insecticide/Grid40'
import Tropiz from './productPage/insecticide/Tropiz'
import Peak from './productPage/insecticide/Peak'
import Vaid_L from './productPage/insecticide/Vaid_L'


     //fungicide

     import IndoPrime from './productPage/fungicide/IndoPrime'
const App = () => {
  return (
    <>
      <Router>
        <Top/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agrochemical' element={<Agrochemical />} />
          <Route path='/supplements' element={<Supplements />} />
          <Route path='/adjuvants' element={<Adjuvants />} />

          <Route path='/aboutUs' element={<AboutUs />} />
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


               
               {/* insecticide */}
             

          <Route path='/insecticide' element={< Insecticide/>} />

          <Route path='/rukka' element={<Rukka/>} />
          <Route path='/alaska' element={<Alaska/>} />
          <Route path='/cyphones' element={<Cyphones/>} />
          <Route path='/indoxam' element={<Indoxam/>} />
          <Route path='/vaid' element={<Vaid/>} />
          <Route path='/fiprosix' element={<FiproSix/>} />
          <Route path='/dhamaal' element={<Dhamaal/>} />
          <Route path='/emanate' element={<Emanate/>} />
          <Route path='/thypo' element={<Thypo/>} />
          <Route path='/grid40' element={<Grid40/>} />
          <Route path='/tropiz' element={<Tropiz/>} />
          <Route path='/peak' element={<Peak/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />


            {/* fungicide */}

          <Route path='/IndoPrime' element={<IndoPrime/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />
          <Route path='/vaid_l' element={<Vaid_L/>} />


            




           



        </Routes>
        <Footer />
      </Router>



    </>
  )
}

export default App