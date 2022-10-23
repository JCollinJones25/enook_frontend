import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ createBook }) => {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    cover: "",
    year: "",
    overview: "",
    genre: "",
    price: "",
  });

  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(newBook);
    console.log(newBook);
    setNewBook({
      title: "",
      author: "",
      cover: "",
      year: "",
      overview: "",
      genre: "",
      price: "",
    });
    navigate("/");
  };

  return (
    <div className="create">
      <button type="button"
        className="btn btn-primary"
        data-toggle="modal">Enter New Book</button>   
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="create-form">
            <section>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input form-control"
                  value={newBook.title}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                  ></input>
                <input
                  type="text"
                  className="input form-control"
                  value={newBook.author}
                  name="author"
                  placeholder="author"
                  onChange={handleChange}
                  ></input>
                <input
                  type="text"
                  className="input form-control"
                  value={newBook.cover}
                  name="cover"
                  placeholder="cover (URL)"
                  onChange={handleChange}
                  ></input>
                <input
                  type="number"
                  className="input form-control"
                  value={newBook.year}
                  name="year"
                  placeholder="year"
                  onChange={handleChange}
                  ></input>
                <input
                  type="text"
                  className="input form-control"
                  value={newBook.overview}
                  name="overview"
                  placeholder="overview"
                  onChange={handleChange}
                  ></input>
                <input
                  type="text"
                  className="input form-control"
                  value={newBook.genre}
                  name="genre"
                  placeholder="genre"
                  onChange={handleChange}
                  ></input>
                <input
                  type="number"
                  className="input form-control"
                  value={newBook.price}
                  name="price"
                  placeholder="price"
                  onChange={handleChange}
                  ></input>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add Book"
                  />
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Create;
