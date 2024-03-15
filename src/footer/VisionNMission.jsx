import '../styles/VisionMission.scss'
import vision_img from '../assets/slide2.jpg'
const VisionNMission = () => {
  return (
    <>

      <div className="visionMission">
        <div className="vision">
          <img src={vision_img} alt=""/>

          <p className='vision_t'> Vision</p>

          <p className='v_m_t'> Our commitment lies in fostering sustainable growth for every individual and entity connected to our ecosystem. Through collaborative efforts and mindful practices, we strive to ensure prosperity, resilience, and well-being for all those associated with us. By nurturing a harmonious balance between economic progress, social responsibility, and environmental stewardship, we aim to create a future where everyone thrives in a sustainable manner.</p>
        </div>
        <div className="mission">
        <img src={vision_img} alt="" />
        <p className='mission_t'>Mission</p>
          <p className='v_m_t'>We strive to be the premier organization in our industry, nurturing growth founded on ethics and professionalism. With steadfast integrity and excellence, we seek to garner stakeholder trust and respect. Cultivating transparency, accountability, and fairness, we set a standard for ethical conduct and professional excellence. Our unwavering dedication to these principles ensures sustainable growth intertwined with integrity, earning us the highest esteem within the industry.</p>
        </div>


      </div>

    </>
  )
}

export default VisionNMission