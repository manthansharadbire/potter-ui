import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Spells() {
  const [spells, setSpells] = useState([
    {  "spell": "Accio",
        "use": "Summoning charm",}
  ]);

  const fetchSpells = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/spells`);
    setSpells(response.data);
  }
  useEffect(()=>{
    fetchSpells();
  }, []);

  return (
    <div>
      {spells.map((spellObj, i )=>{
        const { use,spell} = spellObj;
        return (
          <div key={i}>
           
            <p>spell : {spell}</p>
            <p>use : {use}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Spells;
