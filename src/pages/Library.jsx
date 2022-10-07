import { Link } from "react-router-dom";

const Library = ({ books }) => {
  return (
    <div className="library">
      {books.map((book) => {
        return (
          <div key={book._id} className="book">
            <Link to={`/library/${book._id}`}>
              <img src={book.cover} alt={book.title} />
              <div className="bookInfo">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <h4 id="price">${book.price}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Library;
