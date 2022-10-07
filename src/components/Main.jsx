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

  console.log(books);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route
          path="/library/:id"
          render={(rp) => {
            <Show {...rp} />;
          }}
        />
      </Routes>
    </main>
  );
};

export default Main;
