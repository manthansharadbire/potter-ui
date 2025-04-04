import React from 'react';
import axios from 'axios';


function Homepage() {

    const loadPotterCards = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URI}/wwe-superstars`);
  return (
    <div>
      
    </div>
  )
}}

export default Homepage;
