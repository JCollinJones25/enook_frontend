import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Show from "../pages/Show";

const Main = () => {
  const [books, setBooks] = useState([]);

  const url = "https://enook-api.herokuapp.com/library";

  const getBooks = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setBooks(result));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const loaded = () => {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Library books={books} />} />
          <Route path="/:id" element={<Show books={books} />} />
        </Routes>
      </main>
    );
  };

  const loading = () => {
    return (
      <main>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </main>
    );
  };

  return books ? loaded() : loading();
};

export default Main;
