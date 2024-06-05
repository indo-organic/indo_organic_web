
import Product from './Products'
import OurStory from "./OurStory"
import IntroVid from "./IntroVid"

import Gallery from "./Gallery"
import Trust from "./Trust"
import Quality from './Quality'
import Static from "./Static"
import RnDforHome from "./RnDforHome"



import ContactHome from './ContactHome'
import Headline from './Headline'

import Catalogue from './Catalogue'
import Sustain from './Sustain'
import Crop from './Crop'
import Weather from './Weather'
import HomeTestimonial from './HomeTestimonial'

const MainPage = () => {
  return (
    <>
      {/* <Gallery /> */}
      <OurStory />
      {/* <Weather/> */}
      <Headline />
      {/* <Static/> */}
      <Product />
      <RnDforHome />
      {/* <Trust/> */}
      {/* <Sustain/> */}
      <Crop/>
      {/* <Quality/> */}
      {/* <IntroVid/> */}
      {/* <Catalogue/> */}
      <HomeTestimonial/>
      <ContactHome />
    </>

  )
}

export default MainPage