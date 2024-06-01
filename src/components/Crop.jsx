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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3hizBuSvPUyEHHLmOX0qX7Ha3JKHjYsUbw&s"
  },

  {
    title: "Flowers",
    description: "lorem10 demo text",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl32FH0ypWnPMveAFhA5GKYL8uk37vz9vEQ&s"
  },
 
  {
    title: "Wheat",
    description: "lorem10 demo text",
    imageUrl: "https://images.cnbctv18.com/hindicnbctv18/2023/06/wheat-2-1024x576.jpg"
  },
  {
    title: "cotton",
    description: "lorem10 demo text",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/034/900/294/small_2x/delicate-cotton-fields-ready-to-be-gathered-generative-ai-photo.jpg"
  },
];

const Crop = () => {
  return (
    <div className="container-crops">
      <h2 className="title">target Crops</h2>
      <p className="description">
      Indo Organics provides a diverse array of products designed for different crops.
      </p>
      <div className="crops-slider">
        <div className="slider-wrapper">
          {crops.map((crops, index) => (
            <div className="slide" key={index}>
              <div className="img-container">
                <img src={crops.imageUrl} alt={crops.title} className="crops-image" />
                <div className="crops-info">
                  <div className="crops-title">{crops.title}</div>
                  {/* <div className="crops-description">{crops.description}</div> */}
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





