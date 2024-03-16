import '../styles/AboutUs.scss'
import about_img from '../assets/slide3.jpg'
const AboutUs = () => {
  return (
    <>
      <div className="aboutus">

        <div className="about_1">
          <img src={about_img} alt="" />
          <p className='about_title'>About us</p>
            
        </div>
         <div className="about_2">

              <div className="about_2img">
                <img src="https://media.timeout.com/images/105500684/image.jpg" alt=""  />


                <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg" alt="" className='about_img_position' />
              </div>

              <p className='about_2_text_1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laboriosam. Eligendi doloribus ratione placeat sit autem illum officiis molestiae, facere nostrum voluptatibus explicabo, deserunt, odio doloremque ex natus hic? Exercitationem aliquam porro facilis, molestiae iste nostrum consequuntur consectetur aut tenetur!</p>
             
          


         </div>
           




      </div>
    </>
  )
}

export default AboutUs