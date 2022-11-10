import { useNavigate, useParams } from "react-router-dom";
import Searchbar from "../components/Search";

const Show = ({ books, deleteBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b._id === id);

  const removeBook = () => {
    deleteBook(id);
    navigate("/");
  };

  const loaded = () => {
    return (
      <>
        <div className="page-header">
          <h3>
            <a href="/">Library</a> / {book.title}
          </h3>
          <Searchbar books={books} />
        </div>
        <hr></hr>
        <div className="show">
          <div className="book-info">
            <img src={book.cover} alt={book.title} />
            <div className="container book-text">
              <div>
                <h2>{book.title}</h2>
                <h3>by {book.author}</h3>
              </div>
              <div id="overview">
                <h4>{book.genre}</h4>
                <h3>Published in {book.year}</h3>
                <p>{book.overview}</p>
              </div>
            </div>
          </div>
          <div className="container purchase">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Format
              </button>
              <div class="dropdown-menu format-menu" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item">
                  Mass Market
                </p>
                <p class="dropdown-item">
                  Paperback
                </p>
                <p class="dropdown-item">
                  Hard Cover
                </p>
              </div>
            </div>
            <h2 id="price">${book.price}</h2>
            <button className="btn btn-warning " data-toggle="dropdown" type="button">Add to cart</button>
          </div>
        </div>
        <button className="button is-danger" onClick={removeBook}>
          Delete Book
        </button>
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
