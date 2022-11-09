import { useState } from "react";

const Searchbar = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleChange = (e) => {
    const search = e.target.value;
    const filter = books.filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase());
    });
    if (search === "") {
        setFilteredBooks([]);
    } else {
        setFilteredBooks(filter);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(books);
  };

  return (
    <div className="searchbar">
      <form className="form-outline" onSubmit={handleSubmit}>
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          <i className="bi bi-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </i>
        </button>
      </form>
      {filteredBooks.length !== 0 && (
        <div className="searchResults">
          {filteredBooks.slice(0, 10).map((book, key) => {
            return (
              <a className="searchItem" href={`/${book._id}`}>
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
