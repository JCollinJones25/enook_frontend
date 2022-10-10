import { Link } from "react-router-dom";

const Library = ({ books }) => {
  const loaded = () => {
    return (
      <>
        <h3>Library</h3>
        <hr></hr>
        <div className="library">
          {books.map((book) => {
            return (
              <div key={book._id} className="book">
                <Link to={`/${book._id}`}>
                  <img src={book.cover} alt={book.title} />
                  <div>
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                    <h4 id="price">${book.price}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const loading = () => {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  };

  return books ? loaded() : loading();
};

export default Library;
