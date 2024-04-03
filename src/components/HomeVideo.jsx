import video from '../assets/HomeVideo.mp4'
import React from 'react'

const HomeVideo = () => {
  return (
    <div className="bg-gray-200 my-10">
    <video src={video} autoPlay loop muted className=" w-[70%] h-[80vh] object-cover m-auto py-10" >

    </video>
  </div>
  )
}

export default HomeVideo




