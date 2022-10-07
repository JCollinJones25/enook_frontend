const Library = ({ books }) => {
  return (
    <div className="library">
      {books.map((book, idx) => {
        return (
          <div className="book">
            <img src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            <div>
                <button></button>
              <h3>${book.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Library;
