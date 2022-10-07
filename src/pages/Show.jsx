import { useParams } from "react-router-dom";

const Show = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b._id === id);

  const loaded = () => {
    return (
      <>
        <h3>
          {book.title} - {book.genre.toUpperCase()}
        </h3>
        <hr></hr>
        <div className="show">
          <img src={book.cover} alt={book.title} />
          <div className="bookInfo">
            <div>
              <h2>{book.title}</h2>
              <h3>by {book.author}</h3>
            </div>
            <div>
              <h3>Published in {book.year}</h3>
              <p>{book.overview}</p>
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
    return <p>loading...</p>;
  };

  return book ? loaded() : loading();
};

export default Show;
