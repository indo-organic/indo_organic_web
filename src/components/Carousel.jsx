
// import caro1 from '../AboutImg/caro1.png'
// import caro2 from '../AboutImg/caro2.png'
// import caro3 from '../AboutImg/caro3.png'
// // import caro4 from '../AboutImg/caro4.png'
// // import caro5 from '../AboutImg/caro5.jpg'
// // import caro7 from '../AboutImg/caro7.png'
// // import caro8 from '../AboutImg/caro8.mp4'


// import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

// const Carousel = () => {
//   return (
//     <MDBCarousel showControls showIndicators className='w-full '>

//       <MDBCarouselItem itemId={1}>
//         <img src={caro1} className='d-block w-100 ' alt='...' />
//       </MDBCarouselItem>

//       <MDBCarouselItem itemId={2}>
//         <img src={caro2} className='d-block w-100 ' alt='...' />
//       </MDBCarouselItem>

//       <MDBCarouselItem itemId={3}>
//         <img src={caro3} className='d-block w-100' alt='...' />
//         {/* <video src={caro8} className='d-block w-100'  autoPlay loop></video> */}
//       </MDBCarouselItem>

//     </MDBCarousel>

//   )
// }

// export default Carousel





import homeResearch from '../assets/aboutVid.mp4'
import auntyKey from '../AboutImg/auntyKey.png'

const Carousel = () => {
  return (
    <>
      <section className="w-[100%] h-[100vh]   flex items-center justify-center drop-shadow-md">
        <div className="w-[95%] h-[90%] bg-gray-200 rounded-lg flex items-center  bg-[url('https://t3.ftcdn.net/jpg/01/62/26/58/360_F_162265824_KEzZW8XGSfcc2KCWSwTEUgLsiEQasKg2.jpg')] bg-cover bg-no-repeat ">
        {/* <video src={homeResearch} className='h-[100%] w-[100%] bg-red-500'  loop autoPlay ></video> */}
          <div className="w-[50%] h-[70vh]  flex flex-col pl-6 justify-around ">
            <div className="text-7xl font-serif text-bold">

              <h4>Welcome to</h4>
              <h3>Indo Organics Pvt. Ltd.</h3>
            </div>
            <div>
              <p className="pl-3 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus est numquam similique asperiores in voluptatum veritatis omnis modi ratione?</p>
            </div>
            <div>
              <p className="pl-3 text-5xl text-white">Contact us</p>
            </div>
          </div>
          <div className="w-[50%] h-[70vh] flex items-center  justify-center">
            <img src={auntyKey} alt="" />
            {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-two-people-are-pulling-a-horse-through-rice-fields-image_2556129.jpg" alt="" /> */}
            {/* <video src={homeResearch} autoPlay loop className='h-[100%]'></video> */}
          </div>




        </div>

      </section>

      <section className="w-[100%] h-[100vh]  flex flex-col  items-center justify-center ">



        <div className="w-[95%] h-[98%] bg-yello-400  flex rounded-lg  flex-col ">

          <div className=" w-[100%] h-[50%]  flex">
            <div className="w-[50%] h-[100%] flex flex-col items-start   justify-around">
              <p className="pl-3 text-3xl">About us</p>
              <h2 className="p-3 text-6xl text-bold">Quality is never by chance</h2>
              <p className="p-3"> Welcome to Indo Organics, your trusted partner in sustainable agrochemical solutions. Founded with a vision to revolutionize the agricultural industry, Indo Organics is committed to providing eco-friendly and innovative products that enhance crop yield, protect the environment, and support farmers worldwide.</p>
            </div>

            <div className="w-[50%] h-[100%]  flex items-center justify-end gap-10  ">
              <div className="w-[45%] h-[96%] bg-slate-200 drop-shadow-md rounded-lg flex flex-col justify-around  pl-2">
                <p className="text-5xl font-serif font-light pl-3">/1</p>
                <h2 className="p-3 text-2xl">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
              <div className="w-[45%] h-[96%] bg-blue-900 text-white drop-shadow-md rounded-lg flex flex-col justify-around  pl-2">
                <p className="text-5xl font-serif font-light pl-3">/2</p>
                <h2 className="p-3 text-3xl">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </div>


          </div>


          <div className=" w-[100%] h-[50%]    flex">


            <div className="w-[50%] h-[100%]  flex items-center justify-start gap-10  ">
              <div className="w-[45%] h-[96%] bg-slate-200 drop-shadow-md rounded-lg flex flex-col justify-around  pl-2">
                <p className="text-5xl font-serif font-light pl-3">/3</p>

                <h2 className="p-3 text-3xl">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
              <div className="w-[45%] h-[96%] bg-blue-900 text-white drop-shadow-md rounded-lg flex flex-col justify-around  pl-2">
                <p className="text-5xl font-serif font-light pl-3">/4</p>
                <h2 className="p-3 text-3xl">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </div>

            <div className="w-[52%] h-[100%] flex flex-col  pl-6  justify-center items-end ">
              <div className="w-[97%] h-[96%] bg-green-500 rounded-lg overflow-hidden">
                <video src={homeResearch} autoPlay loop className='w-[100%] object-cover ' ></video>
                {/* <img className='object-cover w-[100%]' src="https://media.istockphoto.com/id/1284379612/photo/indian-farmer-spreading-fertilizer-in-the-green-banana-field.jpg?s=612x612&w=0&k=20&c=0REGneTrOcvYy7_LhT47mp1As70NBxrRWnm2lNWmPK4=" alt="" /> */}
              </div>
            </div>
          </div>



        </div>





      </section>


    </>
  )
}

export default Carousel






















// import React, { Component } from 'react';
// // import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const Carousel2 = () => {
//   return (
//     <Carousel className='object-contain' showThumbs='false' showIndicators='false' showStatus='false' >
//       <div>
//         <img src={caro4} />

//       </div>
//       <div>
//         <img src={caro5} />

//       </div>
//       <div>
//         <img src={caro7} />
//         {/* <p className="legend">Legend 3</p> */}
//       </div>
//     </Carousel>
//   )
// }

// export default Carousel2;










