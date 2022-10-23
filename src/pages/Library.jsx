import { Link } from "react-router-dom";

const Library = ({ books }) => {
  return (
    <>
      <h3 className="page-head">Library</h3>
      <hr></hr>
      <div className="library">
        {books.length > 0 ? (
          books.map((book) => {
            return (
              <div key={book._id} className="book">
                <Link to={`/${book._id}`}>
                  <img src={book.cover} alt={book.title} />
                  <div>
                    <h4>{book.title}</h4>
                    <p>by {book.author}</p>
                    <h5 id="price">${book.price}</h5>
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
