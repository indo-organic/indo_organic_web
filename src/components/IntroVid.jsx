import '../styles/IntroVid.scss'

import video from '../assets/introVideo.mp4'
const IntroVid = () => {
  return (
    <>
      <div className=" embed-responsive embed-responsive-16by9 relative w-full bg-black overflow-hidden h-[30vh]" style={{ paddingTop: '56.25%' }}>
      
       
       <video src={video} autoPlay muted loop className='h-[60vh] w-11'></video>
      </div>



    </>
  )
}

export default IntroVid
