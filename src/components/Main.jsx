import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Show from "../pages/Show";

const Main = () => {
  const [books, setBooks] = useState([]);

  const url = "https://enook-api.herokuapp.com/library";

  const getBooks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
      console.log(books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Library books={books} />} />
        <Route path="/:id" element={<Show books={books} />} />
      </Routes>
    </main>
  );
};

export default Main;
