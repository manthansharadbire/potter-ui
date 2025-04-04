import React from 'react'

function SpellCards({spell,use}) {
  return (
    <div className='bg-blue-400 m-5'>
      <h1>{spell}</h1>
      <h1>{use}</h1>
    </div>
  )
}

export default SpellCards;
