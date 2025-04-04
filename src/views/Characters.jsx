import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharCards from '../components/CharCards';

function Characters() {
  const [characters, setCharacters] = useState([
    {
      "fullName": "Harry James Potter",
      "nickname": "Harry",
      "hogwartsHouse": "Gryffindor",
      "interpretedBy": "Daniel Radcliffe",
      "children": [
          "James Sirius Potter",
          "Albus Severus Potter",
          "Lily Luna Potter"
      ],
      "image": "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/harry_potter.png",
      "birthdate": "Jul 31, 1980",
      "index": 0
  },
  ]);

  const fetchCharacters = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/characters`);
    setCharacters(response.data);
  }
  useEffect(()=>{
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((charObj, i )=>{
        const {fullName, nickname,hogwartsHouse,interpretedBy,image,birthdate, } = charObj;
        return (
          <div key={i}>
           <CharCards
           image={image}
           fullName={fullName}
           nickname={nickname}
           hogwartsHouse={hogwartsHouse}
           interpretedBy={interpretedBy}
           birthdate={birthdate}
           />
          </div>
        )
      })}
    </div>
  )
}

export default Characters;
