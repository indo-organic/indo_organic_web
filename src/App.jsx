import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ResearchDev from './pages/ResearchDev'
import Career from './pages/Career'
import Journey from './footer/Journey'

import BoardOfDirector from './footer/BoardOfDirector'
import News from './footer/News'
import TermsConditions from './footer/TermsConditions'
import PrivacyPolicy from './footer/PrivacyPolicy'
import ReturnPolicy from './footer/ReturnPolicy'
import Domestic from './footer/Domestic'
import International from './footer/International'
import Top from './components/Top'
import AboutUs from './pages/AboutUs'
import Faqs from './footer/Faqs'
import Testimonial from './footer/Testimonial'
import TrialProduct from './footer/TrialProduct'


import Vision from './components/Vision'
import Mission from './components/Mission'

import Adjuvants from './header/Adjuvants'
import OrganicRange from './header/OrganicRange'
import Speciality from './header/Speciality'
import Agrochemical from './header/Agrochemical'

// insecticide
import Insecticide from './header/Insecticide'
import Rukka from './productPage/insecticide/Rukka'
import Alaska from './productPage/insecticide/Alaska'
import Cyphorus from './productPage/insecticide/Cyphorus'
import Indoxam from './productPage/insecticide/Indoxam'
import Vaid from './productPage/insecticide/Vaid'
import FiproSix from './productPage/insecticide/FiproSix'
import Dhamaal from './productPage/insecticide/Dhamaal'
import Emanate from './productPage/insecticide/Emanate'
import Thypo from './productPage/insecticide/Thypo'
import Grit40 from './productPage/insecticide/Grit40'
import Tropiz from './productPage/insecticide/Tropiz'
import Peak from './productPage/insecticide/Peak'
import Vaid_L from './productPage/insecticide/Vaid_L'


//fungicide
import Fungicide from './header/Fungicide'
import IndoPrime from './productPage/fungicide/IndoPrime'
import Demo70 from './productPage/fungicide/Demo70'
import Sulphie from './productPage/fungicide/Sulphie'
import TangoPlus from './productPage/fungicide/TangoPlus'
import Tebnol from './productPage/fungicide/Tebnol'
import Tringo from './productPage/fungicide/Tringo'
import Valino from './productPage/fungicide/Valino'

//  herbicide

import Herbicide from './header/Herbicide'
import Auto32 from './productPage/herbicide/Auto32'
import Cutnip from './productPage/herbicide/Cutnip'
import Emo10 from './productPage/herbicide/Emo10'
import Nirol from './productPage/herbicide/Nirol'
import PitKit from './productPage/herbicide/PitKit'
import Proto50 from './productPage/herbicide/Proto50'
import TimeUp from './productPage/herbicide/TimeUp'



// Adjuvants
import Combo_b from './productPage/adjuvants/Combo_b'
import SocialMedia from './components/SocialMedia'




//  biostimulant
//  soil revivers
import Soilrevivers from './header/Soilrevivers'
import CalciGold from './productPage/soilRevivers/CalciGold'

import Calcigoldplus from './productPage/soilRevivers/Calcigoldplus'

import HerboKing from './productPage/soilRevivers/HerboKing'
import HerboKingAdvance from './productPage/soilRevivers/HerboKingAdvance'
import HerboRiza from './productPage/soilRevivers/HerboRiza'
import Humimax from './productPage/soilRevivers/Humimax'
import TotalGR from './productPage/soilRevivers/TotalGR'
import TotalGRAdvance from './productPage/soilRevivers/TotalGRAdvance'
// nutritions
import Nutrition from './header/Nutrition'
import Amigo from './productPage/nutritions/Amigo'
import AutoMoto from './productPage/nutritions/AutoMoto'
import BloomFlower from './productPage/nutritions/BloomFlower'
import FixC from './productPage/nutritions/FixC'
import HelperL from './productPage/nutritions/HelperL'
import IndoMagic from './productPage/nutritions/IndoMagic'


//  protection
import Protection from './header/Protection' 
import AllIn from './productPage/protection/AllIn'
import Curev from './productPage/protection/Curev'
import Fungi7 from './productPage/protection/Fungi7'
import FungiEx from './productPage/protection/FungiEx'
import Urban3 from './productPage/protection/Urban3'




const App = () => {
  return (
    <>
      <Router>
        {/* <Top /> */}
        <Navbar />
        <SocialMedia />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agrochemical' element={<Agrochemical />} />
          <Route path='/organicRange' element={<OrganicRange />} />
          <Route path='/speciality' element={<Speciality />} />
          <Route path='/adjuvants' element={<Adjuvants />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/researchDev' element={<ResearchDev />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/journey' element={<Journey />} />
          <Route path='/BoardOfDirector' element={<BoardOfDirector />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/news' element={<News />} />
          <Route path='/termsCondition' element={<TermsConditions />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/returnPolicy' element={<ReturnPolicy />} />
          <Route path='/Domestic' element={<Domestic />} />
          <Route path='/International' element={<International />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/trialProduct' element={<TrialProduct />} />
          <Route path='/faqs' element={<Faqs />} />

          {/* insecticide */}

          <Route path='/insecticide' element={< Insecticide />} />
          <Route path='/rukka' element={<Rukka />} />
          <Route path='/alaska' element={<Alaska />} />
          <Route path='/cyphorus' element={<Cyphorus />} />
          <Route path='/indoxam' element={<Indoxam />} />
          <Route path='/vaid' element={<Vaid />} />
          <Route path='/fiprosix' element={<FiproSix />} />
          <Route path='/dhamaal' element={<Dhamaal />} />
          <Route path='/emanate' element={<Emanate />} />
          <Route path='/thypo' element={<Thypo />} />
          <Route path='/grit40' element={<Grit40 />} />
          <Route path='/tropiz' element={<Tropiz />} />
          <Route path='/peak' element={<Peak />} />
          <Route path='/vaid_l' element={<Vaid_L />} />


          {/* fungicide */}
          
          <Route path='/fungicide' element={<Fungicide />} />
          <Route path='/IndoPrime' element={<IndoPrime />} />
          <Route path='/demo70' element={<Demo70 />} />
          <Route path='/sulphie' element={<Sulphie />} />
          <Route path='/tangoPlus' element={<TangoPlus />} />
          <Route path='/tebnol' element={<Tebnol />} />
          <Route path='/tringo' element={<Tringo />} />
          <Route path='/valino' element={<Valino />} />

          {/* herbicide */}

          <Route path='/herbicide' element={<Herbicide />} />

          <Route path='/auto32' element={<Auto32 />} />
          <Route path='/cutnip' element={<Cutnip />} />
          <Route path='/emo10' element={<Emo10 />} />
          <Route path='/nirol' element={<Nirol />} />
          <Route path='/pitKit' element={<PitKit />} />
          <Route path='/proto50' element={<Proto50 />} />
          <Route path='/timeUp' element={<TimeUp />} />


          {/* adjuvants */}
          <Route path='/comboB' element={<Combo_b />} />

          {/* biostimulant  */}

          {/* soil reviver */}
          <Route path='/soilrevivers' element={<Soilrevivers />} />
          <Route path='/CalciGold' element={<CalciGold />} />
          <Route path='/CalciGoldPlus' element={<Calcigoldplus />} />
          <Route path='/HerboKing' element={<HerboKing />} />
          <Route path='/HerboKingAdvance' element={<HerboKingAdvance />} />
          <Route path='/HerboRize' element={<HerboRiza />} />
          <Route path='/Humimax' element={<Humimax />} />
          <Route path='/TotalGR' element={<TotalGR />} />
          <Route path='/TotalGRAdvance' element={<TotalGRAdvance />} />


          {/* Nutrition */}
          <Route path='/Nutrition' element={<Nutrition />} />

          <Route path='/Amigo' element={<Amigo />} />
          <Route path='/AutoMoto' element={<AutoMoto />} />
          <Route path='/BloomFlower' element={<BloomFlower />} />
          <Route path='/FixC' element={<FixC />} />
          <Route path='/HelperL' element={<HelperL />} />
          <Route path='/IndoMagic' element={<IndoMagic />} />






          {/* Protection */}
          <Route path='/Protection' element={<Protection />} />
          <Route path='/AllIn' element={<AllIn />} />
          <Route path='/Fungi7' element={<Fungi7 />} />
          <Route path='/CureV' element={<Curev />} />
          <Route path='/FungiEx' element={<FungiEx />} />
          <Route path='/Urban3' element={<Urban3/>} />







        </Routes>
        <Footer />
      </Router>



    </>
  )
}

export default App