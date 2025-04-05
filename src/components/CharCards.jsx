import React from "react";

function CharCards({
  fullName,
  nickname,
  hogwartsHouse,
  interpretedBy,
  image,
  birthdate,
}) {
  return (
    <div className="flex justify-center m-6">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 flex flex-col sm:flex-row max-w-[900px] w-full rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
        <img
          src={image}
          alt="Character Card"
          className="h-[250px] w-full sm:h-[250px] sm:w-[200px] object-contain rounded-t-lg sm:rounded-l-lg sm:rounded-t-none shadow-lg shadow-lg"
        />
        <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-300 text-center sm:text-left drop-shadow-lg">
            {fullName}
          </h1>

          <h2 className="text-xl text-yellow-300 text-center sm:text-left drop-shadow-md">
            {nickname}
          </h2>

          <p className="text-white text-lg text-center sm:text-left">
            {hogwartsHouse}
          </p>

          <p className="text-white text-lg text-center sm:text-left">
            {interpretedBy}
          </p>

          <p className="text-white text-lg text-center sm:text-left">
            {birthdate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharCards;
