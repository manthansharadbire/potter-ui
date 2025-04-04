import React from 'react'

function CharCards({fullName, nickname,hogwartsHouse,interpretedBy,image,birthdate, }) {
  return (
    <div className='justify-center flex'>
    <div className='flex m-5 bg-red-500 rounded-lg w-[800px] cursor-pointer 
     bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 
         shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
    <img src={image} alt="Character Card" className='h-[200px] w-[170px] rounded-l-lg ' />
    <div className='flex-col m-5 rounded-l-lg justify-center'>
    <h1 className="text-3xl font-semibold text-yellow-300">{fullName}</h1>
    <h1  className=" text-yellow-300 text-xl">{nickname}</h1>
    <p className='text-white'>{hogwartsHouse}</p>
    <p className='text-white'>{interpretedBy}</p>
    <p className='text-white'>{birthdate}</p>
    </div>
    </div>
    </div>
  )
}

export default CharCards;
