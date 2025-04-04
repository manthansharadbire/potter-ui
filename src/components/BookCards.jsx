import React from "react";

function BookCards({ title, releaseDate, description, pages, cover }) {
  return (
    <div className="flex m-6 justify-center cursor-pointer ">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 flex max-w-[1100px] rounded-lg
      shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          src={cover}
          alt="Book Cover"
          className="h-[300px] min-w-[220px] rounded-l-lg"
        />
        <div className="flex-col m-6">
          <p className="text-4xl pb-2 font-semibold text-yellow-300">{title}</p>
          <h1 className=" pb-2 text-yellow-300 text-xl">{releaseDate}</h1>
          <p className=" pb-2 text-white">{description}</p>
          <p className="text-white">{pages} pages</p>
        </div>
      </div>
    </div>
  );
}

export default BookCards;
