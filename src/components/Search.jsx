import { useState, useContext  } from "react";
import { DataContext } from "./DataContext";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Searchbar = ({ books, modalSearch }) => {
  // const { deleteBook } = useContext(DataContext);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [id, setId] = useState("")

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    const filter = books.filter((book) => {
      setId(book._id)
      console.log(book._id)
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
    <div className={`${modalSearch ? "modalSearchbar" : "searchbar"}`}>
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
        <div className={`rounded ${modalSearch ? "modalSearchResults" : "searchResults"}`}>
          {filteredBooks.slice(0, 10).map((book) => {
            if (!modalSearch) {
              return (
                <a className="searchItem" key={book._id} href={`/${book._id}`}>
                  <p>{book.title}</p>
                </a>
              );
            } else {
              return (
                <>
                  <p className="searchItem" key={book._id}>
                    {book.title}
                  </p>
                  <button className="btn btn-danger" 
                  // onClick={removeBook}
                  >
                    Delete Book
                  </button>
                </>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
