import React, { useEffect, useState } from "react";
import axios from "axios";
import HouseCards from "../components/HouseCards";

function Houses() {

  const [houses, setHouses] = useState([
    {
        "house": "Gryffindor",
        "emoji": "🦁",
        "founder": "Godric Gryffindor",
        "colors": [
            "red",
            "gold"
        ],
        "animal": "Lion",
        "index": 0
    },
  ]);


const fetchHouses = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/houses`);
  setHouses(response.data);
};
useEffect(() => {
  fetchHouses();
}, []);

return (
  <div>
    {houses.map((houseObj, i) => {
      const { house, emoji, colors, founder, animal } = houseObj;
      return (
        <div key={i}>
         <HouseCards
         emoji={emoji}
         house={house}
         animal={animal}
         founder={founder}
         colors={colors}
         />
        </div>
      );
    })}
  </div>
);
}

export default Houses;
