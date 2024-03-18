import React from 'react'
import '../styles/IntroVid.scss'
const IntroVid = () => {
  return (
    <>
      <div className="introVid">
        <p className='intro_title'>introduction</p>

        <div className="intro_box">
          <iframe src="https://www.youtube.com/embed/AsEBJiA8jN4?si=Yi_N5SoU-SfQt1SR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>


      </div>




    </>
  )
}

export default IntroVid