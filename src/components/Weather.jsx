// import React from 'react'

// const Weather = () => {
//   return (
//     <div className="bg-gray-100 antialiased">
//     <div className="container mx-auto h-screen w-screen">
//         <div className="flex items-center justify-center h-full">
//             <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
//                 <div className="flex flex-col">
//                     <div>
//                         <h2 className="font-bold text-gray-600 text-center">Delhi, India</h2>
//                     </div>
//                     <div className="my-6">
//                         <div className="flex flex-row space-x-4 items-center">
//                             <div id="icon">
//                                 <span>
//                                     <svg className="w-20 h-20 fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
//                                         </path>
//                                     </svg>
//                                 </span>
//                             </div>
//                             <div id="temp">
//                                 <h4 className="text-4xl">12&deg;C</h4>
//                                 <p className="text-xs text-gray-500">Feels like +14&deg;C</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }


// export default Weather







// import React, { useState, useEffect } from 'react';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     fetchWeatherData();
//   }, []);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=Guwahati&days=3');
//       const json = await response.json();
//       setWeatherData(json);
//     } catch (error) {
//       console.error("Error fetching weather data: ", error);
//     }
//   };

//   const formattedDateDisplay = (date) => {
//     const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     };
//     return new Date(date).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="antialiased min-h-[60vh] flex items-center">
//       <div className="w-full max-w-sm mx-auto">
//         <div className="bg-gray-200 shadow rounded-lg p-5 dark:bg-gray-800 w-full">
//           <h2 className="font-bold text-gray-800 text-lg dark:text-gray-400">{formattedDateDisplay(new Date())}</h2>
//           {weatherData ? (
//             <div>
//               <div className="flex mt-4 mb-2">
//                 <div className="flex-1">
//                   <div className="text-gray-600 text-sm dark:text-gray-400">{`${weatherData.location.name}, ${weatherData.location.region}`}</div>
//                   <div className="text-3xl font-bold text-gray-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: `${weatherData.current.temp_c} &deg;C` }}></div>
//                   <div className="text-xs text-gray-600 dark:text-gray-400">{weatherData.current.condition.text}</div>
//                 </div>
//                 <div className="w-24">
//                   <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} loading="lazy" />
//                 </div>
//               </div>
//               <div className="flex space-x-2 justify-between border-t dark:border-gray-500">
//                 {weatherData.forecast.forecastday.slice(1).map((forecast, key) => (
//                   <div key={key} className={`flex-1 text-center pt-3 ${key === 0 ? 'border-r dark:border-gray-500' : ''}`}>
//                     <div className="text-xs text-gray-500 dark:text-gray-400">{`${forecast.date.split('-')[2]}/${forecast.date.split('-')[1]}/${forecast.date.split('-')[0]}`}</div>
//                     <img src={`https:${forecast.day.condition.icon}`} alt={forecast.day.condition.text} loading="lazy" className="mx-auto" />
//                     <div className="font-semibold text-gray-800 mt-1.5 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: `${forecast.day.maxtemp_c} &deg;C` }}></div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">{forecast.day.condition.text}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="animate-pulse">
//               <div className="flex mt-4 mb-5">
//                 <div className="flex-1">
//                   <div className="rounded h-2 mb-1.5 bg-gray-200 w-1/2"></div>
//                   <div className="bg-gray-200 rounded h-4"></div>
//                   <div className="rounded h-2 mt-1.5 bg-gray-200 w-1/2"></div>
//                 </div>
//                 <div className="w-24">
//                   <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto"></div>
//                 </div>
//               </div>
//               <div className="flex space-x-2 justify-between border-t h-32 dark:border-gray-500">
//                 <div className="flex-1 text-center pt-4 border-r px-5 dark:border-gray-500">
//                   <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
//                   <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
//                   <div className="rounded h-3 mt-1 bg-gray-200  mx-auto"></div>
//                   <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
//                 </div>
//                 <div className="flex-1 text-center pt-4 px-5">
//                   <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
//                   <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
//                   <div className="rounded h-3 mt-1 bg-gray-200  mx-auto"></div>
//                   <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Weather;












import React from 'react'


const Weather = () => {
  return (
    <>




      <section className="w-[100%] h-[100vh]  flex flex-col  items-center justify-center ">
        <div className="w-[95%] h-[98%] bg-yellow-400  flex  rounded-lg  flex-col ">

    

          <iframe className='w-[100%] h-[100vh]' src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=28.654&lon=77.237" frameborder="0"></iframe>
        </div>

      </section>



    </>
  )
}

export default Weather













