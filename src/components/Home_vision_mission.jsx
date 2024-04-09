import { Link } from "react-router-dom"
// import img from '../AboutImg/about4.jpg'
const Home_vision_mission = () => {
  return (
    <>







      <div className="bg-gray-200 py-5">


        <div className="flex flex-wrap justify-evenly">
          <Link to='/vision' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
            <div className=" p-6 rounded-lg shadow-md text-center bg-gray-500 flex flex-col items-center" >
              <img className=" w-40 h-40 rounded-full" src="https://www.achrnews.com/ext/resources/2020/January/Graph_Web.jpg?1580479510" alt="" />
              <p className="font-bold text-3xl text-white">VISION</p>
            </div>
          </Link>
          <Link to='/mission' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
            <div className=" p-6 rounded-lg shadow-md text-center bg-gray-500 flex flex-col items-center" >
              <img className=" w-40 h-40 rounded-full" src="https://as1.ftcdn.net/v2/jpg/02/91/70/84/1000_F_291708446_138D7LcGPGNbsGyaclVyap0qI6scVHJN.jpg" alt="" />
              <p className="font-bold text-3xl text-white">MISSION</p>
            </div>
          </Link>
        </div>

      </div>

    </>
  )
}

export default Home_vision_mission


