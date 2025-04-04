import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './Characters.jsx';
import Books from './Books.jsx';
import Houses from './Houses.jsx';
import Spells from './Spells.jsx';


function Homepage() {
  
  const [houses, setHouses] = useState([]);
  
  const [spells, setSpells] = useState([]);



  const fetchHouses = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/houses`);
    setHouses(response.data);
  }
  useEffect(()=>{
    fetchBooks();
  }, [])



  const fetchSpells = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/spells`);
    setSpells(response.data);
  }
  useEffect(()=>{
    fetchBooks();
  }, [])




  return (
    <div>
      <h1>Hogwarts Express!</h1>
    <Characters/>
    <Books/>
    <Houses/>
    <Spells/>
 </div>
  )}
export default Homepage;
