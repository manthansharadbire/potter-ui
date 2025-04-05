import React from "react";

function BookCards({ title, releaseDate, description, pages, cover }) {
  return (
    <div className="flex justify-center m-6 cursor-pointer">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 flex flex-col sm:flex-row max-w-[1100px] rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          src={cover}
          alt="Book Cover"
          className="h-[300px] sm:h-[350px] min-w-[220px] sm:min-w-[250px] rounded-t-lg sm:rounded-l-lg sm:rounded-t-lg sm:rounded-r-none object-cover shadow-lg"
        />
        <div className="flex flex-col p-6">
          <p className="text-4xl pb-2 font-semibold text-yellow-300 text-center sm:text-left drop-shadow-lg">
            {title}
          </p>

          <h1 className="pb-2 text-yellow-300 text-xl text-center sm:text-left drop-shadow-md">
            {releaseDate}
          </h1>

          <p className="pb-2 text-white text-sm sm:text-base text-center sm:text-left">
            {description}
          </p>

          <p className="text-white text-sm sm:text-base text-center sm:text-left">
            {pages} pages
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCards;
