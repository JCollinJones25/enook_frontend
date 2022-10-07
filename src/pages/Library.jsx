const Library = ({ books }) => {
  return (
    <div className="library">
      {books.map((book, idx) => {
        return (
          <div className="book">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <div>
              <h3>${book.price}</h3>
              <button>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Library;
