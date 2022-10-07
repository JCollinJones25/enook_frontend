import { useParams } from "react-router-dom";

const Show = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b._id === id);

  return (
    <div className="show">
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h2>by {book.author}</h2>
      <div>
        <h2 id="price">${book.price}</h2>
        <button>Add to cart</button>
      </div>
      <p>{book.overview}</p>
    </div>
  );
};

export default Show;
