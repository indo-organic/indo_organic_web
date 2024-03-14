import ourStory_img from '../assets/slide3.jpg'
import '../styles/OurStory.scss'

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur velit sed nunc aliquet, sed lobortis odio venenatis.
          Aliquam non leo at dolor fermentum venenatis vel et dui. Nulla vel tincidunt justo.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="about-image">
        <img src={ourStory_img} alt="About" />
      </div>
    </div>
  );
};

export default AboutPage;
