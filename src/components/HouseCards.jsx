import React from 'react'

function HouseCards( {house, emoji, colors, founder, animal}) {
  return (
    <div className='text-white m-6'>
      <img src={emoji} alt="House Image" />
      <h1>house={house}</h1>
      <p>animal={animal}</p>
      <p>founder={founder}</p>
      <p>colors={colors}</p>
    </div>
  )
}

export default HouseCards;
