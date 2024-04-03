import React, { useState, useEffect } from 'react';
import image2 from '../assets/game2.jpg';
import image3 from '../assets/game3.jpg';
function MySlider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const sliderButton1 = () => {
    setCurrentSlide(1);
    clearInterval(interval);
    setTimeout(() => loopSlider(), 4000);
  };

  const sliderButton2 = () => {
    setCurrentSlide(2);
    clearInterval(interval);
    setTimeout(() => loopSlider(), 4000);
  };

  return (
    <>
      <div className="sliderAx h-auto">
        <div id="slider-1" className={`container mx-auto ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill" style={{ backgroundImage:`url(${image2})`}}>
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Research</p>
              <p className="text-3xl font-bold">and Developments</p>
              <p className="text-2xl mb-10 leading-none">Quality is never by chance</p>
              <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
            </div>
          </div>
          <br />
        </div>

        <div id="slider-2" className={`container mx-auto ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <div className="bg-cover bg-top h-auto text-white py-24 px-10 object-fill" style={{backgroundImage:`url(${image3})` }}>
            <p className="font-bold text-sm uppercase">join us</p>
            <p className="text-3xl font-bold">kk</p>
            <p className="text-2xl mb-10 leading-none">Quality is never by chance</p>
            <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
          </div>
          <br />
        </div>

       
      </div>

      <div className="flex justify-between w-12 mx-auto pb-2">
        <button id="sButton1" onClick={sliderButton1} className={`bg-green-400 rounded-full w-4 pb-2 ${currentSlide === 1 ? 'bg-green-800' : ''}`} />
        <button id="sButton2" onClick={sliderButton2} className={`bg-green-400 rounded-full w-4 p-2 ${currentSlide === 2 ? 'bg-green-800' : ''}`} />
      </div>
    </>
  );
}

export default MySlider;
