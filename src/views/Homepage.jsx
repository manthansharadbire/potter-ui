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
      <h1 className="text-white bg-blue-950 pt-2 pb-2 text-center">
        WELCOME TO THE WIZARDING WORLD OF HOGWARTS
      </h1>

      <div className="flex m-5 flex-wrap justify-center">
   
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
          <img
            src={books}
            alt="Books"
            className="h-[280px] w-[550px] object-cover rounded-lg shadow-lg "
            onClick={() => handleNavigation("/books")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-[550px] text-2xl font-semibold hover:text-yellow-500 transition-colors duration-300  cursor-pointer">
            BOOKS
          </h1>
        </div>

     
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
          <img
            src={characters}
            alt="Characters"
            className="h-[280px] w-[550px] object-cover rounded-lg shadow-lg "
            onClick={() => handleNavigation("/characters")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-[550px] text-2xl font-semibold hover:text-yellow-500 transition-colors duration-300  cursor-pointer">
            CHARACTERS
          </h1>
        </div>

      
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
          <img
            src={houses}
            alt="Houses"
            className="h-[280px] w-[550px] object-cover rounded-lg shadow-lg "
            onClick={() => handleNavigation("/houses")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-[550px] text-2xl font-semibold hover:text-yellow-500 transition-colors duration-300  cursor-pointer">
            HOUSES
          </h1>
        </div>

    
        <div className="m-3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
          <img
            src={spell}
            alt="Spells"
            className="h-[280px] w-[550px] object-cover  rounded-lg shadow-lg "
            onClick={() => handleNavigation("/spells")}
          />
          <h1 className="text-white bg-blue-950 pt-2 mt-3 pb-2 text-center rounded-lg w-[550px] text-2xl font-semibold hover:text-yellow-500 transition-colors duration-300  cursor-pointer">
            SPELLS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
