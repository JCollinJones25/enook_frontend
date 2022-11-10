import { useState, useContext } from "react";
import { DataContext } from "./DataContext";

const Create = ({ show, setShow }) => {
  const { createBook } = useContext(DataContext);

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
    setNewBook({
      title: "",
      author: "",
      cover: "",
      year: "",
      overview: "",
      genre: "",
      price: "",
    });
    closeModal();
  };

  const closeModal = () => {
    resetModal();
    setShow(false);
    document.querySelector(".modal").style.display = "none";
  };

  const resetModal = () => {
    setNewBook({
      title: "",
      author: "",
      cover: "",
      year: "",
      overview: "",
      genre: "",
      price: "",
    });
  };

  if (show) {
    document.querySelector(".modal").style.display = "flex";
  }

  return (
    <div className="modal create">
      <div className="modal-content">
        <div className="close">
          <button
            type="button"
            className="btn btn-danger"
            data-dismiss="modal"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <h2>Add a new book to the DB</h2>
        <form className="create-form" onSubmit={handleSubmit}>
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
            className="btn btn-success add-btn"
            value="Add Book"
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
