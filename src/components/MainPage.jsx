import SocialMedia from "./SocialMedia"
import Product from './Products'
import OurStory from "./OurStory"
// import IntroVid from "./IntroVid"
import NewUpdate from "./NewUpdate"
import Home_vision_mission from "./Home_vision_mission"
import Indo_researchBox from "./Indo_researchBox"
import Gallery from "./Gallery"
import Trust from "./Trust"
import Quality from "./Quality"
import Static from "./Static"
// import Team from "./Team"

const MainPage = () => {
  return (
    <>
    <OurStory/>
    <Quality/>
    <Static/>
    <Product/>
    <Trust/>
    <Gallery/>
     <Home_vision_mission/>
    {/* <IntroVid/> */}
    {/* <Indo_researchBox/> */}
    <NewUpdate/>
    {/* <Team/> */}
    <SocialMedia/>
    
    
    </>
    
  )
}

export default MainPage