
import Product from './Products'
import OurStory from "./OurStory"
import IntroVid from "./IntroVid"
import NewUpdate from "./NewUpdate"
import Home_vision_mission from "./Home_vision_mission"
import Indo_researchBox from "./Indo_researchBox"
import Gallery from "./Gallery"
import Trust from "./Trust"
import Quality from './Quality'
import Static from "./Static"
import RnDforHome from "./RnDforHome"
import Hightlights from "./Hightlights"
// import Team from "./Team"
import Domestic from '../footer/Domestic'
import News from '../footer/News'

// import HomeVideo from './HomeVideo'
import ContactHome from './ContactHome'
// import Headline from './Headline'
import QR from './QR'
import Catalogue from './Catalogue'
import Sustain from './Sustain'
import Crop from './Crop'
import Weather from './Weather'

const MainPage = () => {
  return (
    <>
      {/* <Headline /> */}
      {/* <Gallery /> */}
      <OurStory />
      {/* <Weather/> */}
      <Static/>
      <Product />
      <RnDforHome />
      {/* <Sustain/> */}
      <Crop/>
      

      {/* <Hightlights/> */}
      {/* <Trust/> */}
      {/* <Home_vision_mission/> */}
      {/* <Quality/> */}
      {/* <HomeVideo/> */}
      {/* <IntroVid/> */}
      {/* <Indo_researchBox/> */}
      {/* <NewUpdate/> */}
      {/* <Team/> */}
      {/* <Catalogue/> */}
      <QR/>
      {/* <News/> */}
      <ContactHome />

  

    </>

  )
}

export default MainPage