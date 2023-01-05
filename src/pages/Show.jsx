import { useParams } from "react-router-dom";
import Searchbar from "../components/Search";

const Show = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b._id === id);

  const loaded = () => {
    return (
      <>
        <div className="page-header">
          <h5>
            <a href="/">Library</a> / {book.title}
          </h5>
          <Searchbar books={books} />
        </div>
        <hr></hr>
        <div className="show">
            <img src={book.cover} alt={book.title} />
            <div className="container book-info">
              <div>
                <h2>{book.title}</h2>
                <h4>by {book.author}</h4>
              </div>
              <hr></hr>
              <div className="overview">
                <h4>{book.year} | {book.genre}</h4>
                <p>{book.overview}</p>
              </div>
          </div>
          <div className="container purchase">
            <h2 id="price">${book.price}</h2>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Format
              </button>
              <div className="dropdown-menu format-menu" aria-labelledby="dropdownMenuButton">
                <p className="dropdown-item">
                  Mass Market
                </p>
                <p className="dropdown-item">
                  Paperback
                </p>
                <p className="dropdown-item">
                  Hard Cover
                </p>
              </div>
            </div>
            <button className="btn btn-warning">Add to cart</button>
          </div>
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

  return book ? loaded() : loading();
};

export default Show;
