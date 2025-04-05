import React from "react";
import { useNavigate } from "react-router";
import harrypotter from "../assets/harrypotter.png";
import books from "../assets/books.jpg";
import characters from "../assets/characters.jpg";
import houses from "../assets/houses.jpg";
import spell from "../assets/spell.avif";

function Homepage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="bg-black justify-center flex shadow-lg ">
        <img
          src={harrypotter}
          alt="Harry Potter"
          className="h-[110px] mt-4 pb-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
        />
      </div>
      <h1 className="text-white bg-blue-950 pt-2 pb-2 text-center hover:text-yellow-500 text-[12px] sm:text-xl md:text-xl">
        WELCOME TO THE WIZARDING WORLD OF HOGWARTS
      </h1>

      <div className="flex flex-wrap justify-center gap-6 m-5">
        
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <img
            src={books}
            alt="Books"
            className="h-[200px] sm:h-[250px] w-full object-cover rounded-lg shadow-lg"
            onClick={() => handleNavigation("/books")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-full text-lg sm:text-2xl font-semibold transition-colors duration-300 cursor-pointer hover:text-yellow-500">
            BOOKS
          </h1>
        </div>

           <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <img
            src={characters}
            alt="Characters"
            className="h-[200px] sm:h-[250px] w-full object-cover rounded-lg shadow-lg"
            onClick={() => handleNavigation("/characters")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-full text-lg sm:text-2xl font-semibold transition-colors duration-300 cursor-pointer hover:text-yellow-500">
            CHARACTERS
          </h1>
        </div>

 
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <img
            src={houses}
            alt="Houses"
            className="h-[200px] sm:h-[250px] w-full object-cover rounded-lg shadow-lg"
            onClick={() => handleNavigation("/houses")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-full text-lg sm:text-2xl font-semibold transition-colors duration-300 cursor-pointer hover:text-yellow-500">
            HOUSES
          </h1>
        </div>

   
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <img
            src={spell}
            alt="Spells"
            className="h-[200px] sm:h-[250px] w-full object-cover rounded-lg shadow-lg"
            onClick={() => handleNavigation("/spells")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-full text-lg sm:text-2xl font-semibold transition-colors duration-300 cursor-pointer hover:text-yellow-500">
            SPELLS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
