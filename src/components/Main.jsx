import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Show from "../pages/Show";
import Create from "../pages/Create";

const Main = () => {
  const [books, setBooks] = useState([]);

  const url = "https://enook-api.herokuapp.com/library/";

  const getBooks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    };
  };

  const createBook = async (book) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book),
    });
    getBooks();
  };

  const deleteBook = async (id) => {
    await fetch(url + id, {
      method: "delete",
    });
    getBooks();
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Library books={books} />} />
        <Route path="/:id" element={<Show books={books} deleteBook={deleteBook} />} />
        <Route path="/admin/new" element={<Create createBook={createBook} />} />
      </Routes>
    </main>
  );
};

export default Main;
