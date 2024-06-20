
import Product from './Products'
import OurStory from "./OurStory"
import IntroVid from "./IntroVid"

// import Gallery from "./Gallery"

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
      {/* <Gallery /> */}
      <OurStory />
      <Crop/>
      {/* <Weather/> */}
      {/* <Headline /> */}
      {/* <Static/> */}
      {/* <Product /> */}
      {/* <RnDforHome /> */}
     
      {/* <Sustain/> */}
   
      {/* <Catalogue/> */}
      {/* <HomeTestimonial/> */}
      <ResearchLogo/>

      <News/>
      {/* <ContactHome /> */}
      <IntroVid/>
    </>

  )
}

export default MainPage