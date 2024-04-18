
import Product from './Products'
import OurStory from "./OurStory"
import IntroVid from "./IntroVid"
import NewUpdate from "./NewUpdate"
import Home_vision_mission from "./Home_vision_mission"
// import Indo_researchBox from "./Indo_researchBox"
import Gallery from "./Gallery"
import Trust from "./Trust"
import Quality from './Quality'
import Static from "./Static"
import RnDforHome from "./RnDforHome"
import Hightlights from "./Hightlights"
import Team from "./Team"
import Domestic from '../footer/Domestic'
import News from '../footer/News'
import BestSeller from './BestSeller'
import HomeVideo from './HomeVideo'
import ContactHome from './ContactHome'
import Headline from './Headline'
const MainPage = () => {
  return (
    <>
      <Headline/>
      <Product />
      <OurStory />
      <Static/>
      <RnDforHome />
      <BestSeller/>
      {/* <Hightlights/> */}
      {/* <Trust/> */}
      {/* <Home_vision_mission/> */}
      <Quality/>
      {/* <HomeVideo/> */}
      <Gallery/>
      {/* <IntroVid/> */}
      {/* <Indo_researchBox/> */}
      {/* <NewUpdate/> */}
      {/* <Team/> */}
      {/* <News/> */}

      <ContactHome />



    </>

  )
}

export default MainPage