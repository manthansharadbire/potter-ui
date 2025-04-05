import React from "react";

function HouseCards({ house, colors, founder, animal }) {
  return (
    <div className="flex justify-center m-6">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 flex flex-col sm:flex-row max-w-[900px] w-full rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
        <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-300 text-center sm:text-left drop-shadow-lg">
            {house}
          </h1>

          <p className="text-xl sm:text-2xl text-yellow-300 text-center sm:text-left drop-shadow-md">
            {animal}
          </p>

          <p className="text-white text-lg text-center sm:text-left">
            {founder}
          </p>

          <p className="text-white text-lg text-center sm:text-left">
            {colors}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HouseCards;
