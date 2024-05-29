import React from "react";
import '../styles/crop.scss'

const crops = [
  {
    title: "Vegetables",
    description: "demo text here",
    imageUrl: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
  },
  {
    title: "fruits",
    description: "lorem10 demo text",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyv4JFGLfaMV99VLNvo8qWPJR7MlV4DdR7w&s"
  },

  {
    title: "Flowers",
    description: "lorem10 demo text",
    imageUrl: "https://live-production.wcms.abc-cdn.net.au/0ea672552ce6f69b5d2ed37b659bf8f6?impolicy=wcms_crop_resize&cropH=563&cropW=1000&xPos=0&yPos=0&width=862&height=485"
  },
 
  {
    title: "Wheat",
    description: "lorem10 demo text",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDomxrAZzl5yGc59u9MnC82WgUbxoLg7Kbfw&s"
  },
  {
    title: "cotton",
    description: "lorem10 demo text",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhnhqJIj85bgubo4cJR9FeewK6k5WEGyVJg&s"
  },
];

const Crop = () => {
  return (
    <div className="container-crops">
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
