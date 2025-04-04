import React from 'react'

function Houses() {

 const fetchCharacters = async()=>{
    
    const response = await axios.get(`${import.meta.env.POTTER_URL}/characters`)
 }
 

  return (
    <div>
      
    </div>
  )
}

export default Houses;
