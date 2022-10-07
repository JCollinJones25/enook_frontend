import { Link } from "react-router-dom";

const Library = ({ books }) => {
  return (
    <div className="library">
      {books.map((book) => {
        return (
          <div key={book._id} className="book">
              <Link to={`/library/${book._id}`}>
              <img src={book.cover} alt={book.title} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <div>
                <h3>${book.price}</h3>
                <button>Add to cart</button>
              </div>
          </Link>
            </div>
        );
      })}
    </div>
  );
};

export default Library;
