import SocialMedia from "./SocialMedia"
import Product from './Products'
import OurStory from "./OurStory"
// import IntroVid from "./IntroVid"
import NewUpdate from "./NewUpdate"
import Home_vision_mission from "./Home_vision_mission"
import Indo_researchBox from "./Indo_researchBox"
// import Team from "./Team"

const MainPage = () => {
  return (
    <>
    <OurStory/>
    <Product/>
     <Home_vision_mission/>
    {/* <IntroVid/> */}
    <Indo_researchBox/>
    <NewUpdate/>
    {/* <Team/> */}
    <SocialMedia/>
    
    
    </>
    
  )
}

export default MainPage