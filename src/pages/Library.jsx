import { Link } from "react-router-dom";
import Search from "../components/Search";

const Library = ({ books }) => {
  return (
    <>
      <div className="page-header">
        <h3>Library</h3>
        <Search books={books} />
      </div>
      <hr></hr>
      <div className="library">
        {books.length > 0 ? (
          books.map((book) => {
            return (
              <div key={book._id} className="book">
                <Link to={`/${book._id}`}>
                  <img src={book.cover} alt={book.title} />
                  <div>
                    <h5>{book.title}</h5>
                    <p>by {book.author}</p>
                    <p id="price">${book.price}</p>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Library;
