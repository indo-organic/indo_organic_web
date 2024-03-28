import React from 'react';

const BoxWithZoom = ({ imageUrl, brandName }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-64 h-64 relative overflow-hidden shadow-lg rounded-lg mx-4">
        <img
          src={imageUrl}
          alt="Product"
          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-bold">{brandName}</span>
        </div>
      </div>
    </div>
  );
};

const ThreeBoxesWithZoom = () => {
  return (
    <div className="flex justify-center py-8">
      <BoxWithZoom
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRttVVERfKpSrRYLguqIw5ybEolWZK8VL25cDXpkszWg&s"
        brandName="Brand 1"
      />
      <BoxWithZoom
        imageUrl="https://via.placeholder.com/300"
        brandName="Brand 2"
      />
      <BoxWithZoom
        imageUrl="https://via.placeholder.com/300"
        brandName="Brand 3"
      />
    </div>
  );
};

export default ThreeBoxesWithZoom;
