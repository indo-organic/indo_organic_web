
import { Link } from "react-router-dom";

const Sugarcane = () => {
    return (
        <>
          


            <div className="relative mx-auto  w-full">
                <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU219i9PKu-6B3xErejYve2rbPeyrdhWfRFQ&s" alt="Random image" />
                <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">Sugarcane </h2>
                </div>
            </div>
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

                <Link to='/flowers' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSkYU3RPFcs82FOb5BpbhBnkKyEiq_biNVQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Insecticide</p>

                    </div>

                </Link>

                <Link to='/fruits' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8idzHtNwohGJx-OCjUjVr3h7MhyIlI0hxhQ&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Fungicide</p>

                    </div>

                </Link>

                <Link to='/vegetables' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdCv6T-wHcmva1lSny2HBmGWsgrj9hW4oPg3QRsxsNg2QJJw1RZLlMU-sLiVGdeA8bU&usqp=CAU" alt="Product" className="h-40 w-full  rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Herbicide</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiURP038ZdM16ArCahWa6yNqWCqR8-DWJxkg&s' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Soil Revivers</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://gard.in/cdn/shop/articles/nutrient-mobility-in-soil-plants-604818.jpg?v=1694540529' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Nutrition</p>

                    </div>

                </Link>

                <Link to='/pulses' className="w-[12rem] h-[12rem] object-cover bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGzIkmdEkZMY8Ju3wB2S8mXS2gb55pjbjAWNazHsrZPncoC-65pDCOdtcxUQuU7zIPQQ&usqp=CAU' alt="Product" className="h-40 w-full rounded-t-xl" />
                    <div className="">

                        <p className="text-lg font-bold text-black truncate block capitalize text-center ">Protection</p>

                    </div>

                </Link>
            </section>

        </>
    )
}

export default Sugarcane

