import React from 'react'

function BookCards({ title, releaseDate, description, pages, cover }) {
  return (
    <div>
      <img src={cover} alt="Book Cover" />
      <h1>releaseDate = {releaseDate}</h1>
      <p>title = {title}</p>
      <p>pages = {pages}</p>
      <p>description = {description}</p>
    </div>
  )
}

export default BookCards;
