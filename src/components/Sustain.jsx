import React from 'react'
import '../styles/Sustain.scss'
const Sustain = () => {
    return (
        <>
        <div className="h-screen">
            <div className="xl:max-w-screen-xl pt-6 md:pt-12 pb-6 lg:pb-10 mx-auto px-6 sm:px-6 md:px-8 lg:px-12 xl:pt-24">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900">
                Advocating for sustainability
                </h1>
                <div className="prose prose-lg lg:prose-xl xl:prose-2xl">
                    These reusable silicone food storage bags are a must-have for
                    anyone looking to reduce their environmental impact and save money in the long run.
                </div>
                <div className="flex gap-4 flex-wrap my-4 md:mt-8">
                    <a href="#"
                        className="bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-150 text-base text-white px-4 lg:px-8 py-4 inline-block font-bold rounded-md shadow-xl">Start
                        Browse
                    </a>

                    <a href=""
                        className="bg-white hover:bg-yellow-200 text-base text-indigo-600 px-4 lg:px-8 py-4 inline-block font-bold rounded-md shadow-xl transition ease-in-out duration-150">
                        Our impact
                    </a>
                </div>
                <a href="" className="font-semibold mt-6 inline-block text-lg lg:text-xl text-indigo-600 hover:underline"><span
                    className="hidden sm:inline">Discover our key features. »</span>
                    <span className="inline sm:hidden">Learn more »</span>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>











            </div>
            </div>
        </>
    )
}

export default Sustain