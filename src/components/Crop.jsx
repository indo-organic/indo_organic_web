import React from "react";
import '../styles/crop.scss'

const crops = [
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://cdn2.storyasset.link/SZy3NBu3udg2eB4sIldFhYsY1Xt1/Sugarcane-ms-tzeufmrxyw.jpg"
  },
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://vlsci.com/wp-content/uploads/2022/07/melissa-askew-y4xZxzN754M-unsplash-scaled.jpg"
  },
 
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://cdn2.storyasset.link/SZy3NBu3udg2eB4sIldFhYsY1Xt1/Sugarcane-ms-tzeufmrxyw.jpg"
  },
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://vlsci.com/wp-content/uploads/2022/07/melissa-askew-y4xZxzN754M-unsplash-scaled.jpg"
  },
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://cdn2.storyasset.link/SZy3NBu3udg2eB4sIldFhYsY1Xt1/Sugarcane-ms-tzeufmrxyw.jpg"
  },
  {
    title: "sugarcane",
    description: "lorem10 demo text",
    imageUrl: "https://vlsci.com/wp-content/uploads/2022/07/melissa-askew-y4xZxzN754M-unsplash-scaled.jpg"
  },
];

const Crop = () => {
  return (
    <div className="container">
      <h2 className="title">target Crops</h2>
      <p className="description">
      Indo Organis offers a wide range of products tailored for various crops.
      </p>
      <div className="crops-slider">
        <div className="slider-wrapper">
          {crops.map((crops, index) => (
            <div className="slide" key={index}>
              <div className="img-container">
                <img src={crops.imageUrl} alt={crops.title} className="crops-image" />
                <div className="crops-info">
                  <div className="crops-title">{crops.title}</div>
                  <div className="crops-description">{crops.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crop;
