
import Product from './Products'
import OurStory from "./OurStory"
import IntroVid from "./IntroVid"


// import Static from "./Static"
import RnDforHome from "./RnDforHome"
import News from './News'

import ContactHome from './ContactHome'
import Headline from './Headline'

import Catalogue from './Catalogue'
import Sustain from './Sustain'
import Crop from './Crop'
import Weather from './Weather'
import HomeTestimonial from './HomeTestimonial'
import ResearchLogo from './ResearchLogo'



const MainPage = () => {
 
  return (
    <>
    

  
      <OurStory />
      <Crop />
      {/* <ResearchLogo    /> */}
      {/* <HomeTestimonial/> */}
      <IntroVid/>
      {/* <Weather/> */}
      {/* <Headline /> */}
      {/* <Static/> */}
      {/* <Product /> */}
      {/* <RnDforHome /> */}
     
      {/* <Sustain/> */}
   
      {/* <Catalogue/> */}
   

      <News/>
      {/* <ContactHome /> */}
      
    </>

  )
}

export default MainPage