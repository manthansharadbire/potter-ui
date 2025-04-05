import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "../components/BookCards";

function Books() {

  const [books, setBooks] = useState([])
  
const fetchBooks = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/en/books`);
  setBooks(response.data);
};
useEffect(() => {
  fetchBooks();
}, []);

return (
  <div>
    {books.map((bookObj, i) => {
      const { title, releaseDate, description, pages, cover } = bookObj;
      return (
        <div key={i}>
         <BookCards
         cover={cover}
         title={title}
         releaseDate={releaseDate}
         pages={pages}
         description={description}
         />
        </div>
      );
    })}
  </div>
);
}

export default Books;
