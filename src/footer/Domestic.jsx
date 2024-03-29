import React from 'react';
import video from '../assets/homeResearchV.mp4'
const BackgroundVideo = () => {
  return (

    <div className="bg-gray-200">
      <video src={video} autoPlay loop muted className=" w-[70%] h-[80vh] object-cover m-auto py-10" >

      </video>
    </div>

  );
};

export default BackgroundVideo;
