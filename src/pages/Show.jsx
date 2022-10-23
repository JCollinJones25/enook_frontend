import { useNavigate, useParams } from "react-router-dom";

const Show = ({ books, deleteBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b._id === id);
  console.log(book)

  const removeBook = () => {
    deleteBook(id);
    navigate("/");
  }

  const loaded = () => {
    return (
      <>
        <h3 className="page-head">
          / {book.genre} / {book.title}
        </h3>
        <hr></hr>
        <div className="show">
          <div className="book-info">
            <img src={book.cover} alt={book.title} />
            <div className="book-text">
              <div>
                <h2>{book.title}</h2>
                <h3>by {book.author}</h3>
              </div>
              <div id="overview">
                <h3>Published in {book.year}</h3>
                <p>{book.overview}</p>
              </div>
            </div>
          </div>
          <div className="purchase">
            <h2 id="price">${book.price}</h2>
            <button>Add to cart</button>
          </div>
        </div>
        <button className="button is-danger" onClick={removeBook}>Delete Book</button>
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
