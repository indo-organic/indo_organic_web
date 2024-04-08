import { Link } from "react-router-dom"
// import img from '../AboutImg/about4.jpg'
const Home_vision_mission = () => {
  return (
    <>

    





      <div>
       

      <div className="flex flex-wrap justify-evenly">
          <Link to='/vision' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
            <div  className=" p-6 rounded-lg shadow-md text-center bg-gray-500" >
              <img className=" w-40 h-40 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkxMe3Xzhx7ek2lf2KhngVmgBTc8xqoyIWfcn__bGRvIkWieMY4MnrAojhsIJOsQmOo&usqp=CAU" alt="" />
              <p className="font-bold text-3xl text-white">VISION</p>
            </div>
          </Link>
          <Link to='/mission' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 hover:scale-125 transition-all">
            <div className=" p-6 rounded-lg shadow-md text-center bg-gray-500" >
              <img className=" w-40 h-40 rounded-full" src="https://media4.manhattan-institute.org/sites/cj/files/economic-growth-is-still-our-best-hope.jpg" alt="" />
              <p className="font-bold text-3xl text-white">MISSION</p>
            </div>
          </Link>
        </div>

      </div>

    </>
  )
}

export default Home_vision_mission


