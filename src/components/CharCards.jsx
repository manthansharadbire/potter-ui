import React from 'react'

function CharCards({fullName, nickname,hogwartsHouse,interpretedBy,image,birthdate, }) {
  return (
    <div>
    <img src={image} alt="Character Card" />
    <h1>fullName= {fullName}</h1>
    <h1>nickname= {nickname}</h1>
    <p>hogwartsHouse= {hogwartsHouse}</p>
    <p>interpretedBy= {interpretedBy}</p>
    <p>birthdate= {birthdate}</p>
    </div>
  )
}

export default CharCards;
