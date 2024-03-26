import '../styles/IntroVid.scss'
import React from 'react'
// import video from '../assets/introVideo.mp4'
const IntroVid = () => {
  return (
    <>
      <div className=" embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      
       
        <iframe className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-[70%]" src="https://www.youtube.com/embed/6L7NnZWeW-s?si=7TXWUqrZNzrS0R6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>



    </>
  )
}

export default IntroVid
