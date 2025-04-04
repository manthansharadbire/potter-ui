import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <h1>house : {house}</h1>
          <p>animal : {animal}</p>
          <p>emoji : {emoji}</p>
          <p>founder : {founder}</p>
          <p>colors : {colors}</p>
        </div>
      );
    })}
  </div>
);
}

export default Houses;
