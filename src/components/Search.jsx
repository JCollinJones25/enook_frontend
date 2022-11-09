import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Searchbar = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    const filter = books.filter((book) => {
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

  return (
    <div className="searchbar">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn" id="searchIcon" onClick={clearInput}>
            {searchValue.length === 0 ? (
              <SearchIcon id="searchIcon"/>
            ) : (
              <CloseIcon id="closeBtn"/>
            )}
        </button>
      </div>
      {filteredBooks.length !== 0 && (
        <div className="searchResults rounded">
          {filteredBooks.slice(0, 10).map((book) => {
            return (
              <a className="searchItem" key={book._id} href={`/${book._id}`}>
                <p>{book.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
