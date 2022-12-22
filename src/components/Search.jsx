import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
// import Trash from "../icons/trash.svg";

const Searchbar = ({ books, modalSearch }) => {
  // const { deleteBook } = useContext(DataContext);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [id, setId] = useState("");

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    const filter = books.filter((book) => {
      setId(book._id);
      console.log(book._id);
      return book.title.toLowerCase().includes(search.toLowerCase());
    });
    if (search === "") {
      setFilteredBooks([]);
    } else {
      setFilteredBooks(filter);
    }
  };

  const clearInput = () => {
    setFilteredBooks([]);
    setSearchValue("");
  };

  // const removeBook = () => {
  // deleteBook();
  // };

  return (
    <div className={`${modalSearch ? "modalSearchBar" : "searchBar"}`}>
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn"
          id="searchIcon"
          onClick={clearInput}
        >
          {searchValue.length === 0 ? (
            <SearchIcon id="searchIcon" />
          ) : (
            <CloseIcon id="closeBtn" />
          )}
        </button>
      </div>
      {filteredBooks.length !== 0 && (
        <div
          className={`rounded ${
            modalSearch ? "modalSearchResults" : "searchResults"
          }`}
        >
          {filteredBooks.slice(0, 10).map((book) => {
            if (!modalSearch) {
              return (
                <a className="searchItem" key={book._id} href={`/${book._id}`}>
                  <p>{book.title}</p>
                </a>
              );
            } else {
              return (
                <div className="modalSearchItem" key={book._id}>
                  <p>{book.title}</p>
                  <div>
                    <button className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        fill="grey"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                      </svg>
                    </button>
                    <button className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#d05e65"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
