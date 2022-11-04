import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "./DataContext";
import Header from "./Header";
import Library from "../pages/Library";
import Show from "../pages/Show";
import Footer from "./Footer";

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
    }
  };

  const deleteBook = async (id) => {
    await fetch(url + id, {
      method: "delete",
    });
    getBooks();
  };

  const createBook = async (book) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    getBooks();
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ createBook }}>
        <Header />
      </DataContext.Provider>
      <main>
        <Routes>
          <Route path="/" element={<Library books={books} />} />
          <Route
            path="/:id"
            element={<Show books={books} deleteBook={deleteBook} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Main;
