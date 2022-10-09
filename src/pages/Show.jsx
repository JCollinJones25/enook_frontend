import { useParams } from "react-router-dom";

const Show = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b._id === id);

  const loaded = () => {
    return (
      <>
        <h3>
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
