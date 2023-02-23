import { useContext } from "react";
import { DataContext } from "./DataContext";
import $ from "jquery";

const EditForm = ({ book }) => {
  const { editBook } = useContext(DataContext);
  const $editForm = $(".edit-form");

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book);
    $editForm.hide();
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input form-control"
        value={book.title}
        name="title"
      ></input>
      <input
        type="text"
        className="input form-control"
        value={book.author}
        name="author"
      ></input>
      <input
        type="text"
        className="input form-control"
        value={book.cover}
        name="cover"
      ></input>
      <input
        type="number"
        className="input form-control"
        value={book.year}
        name="year"
      ></input>
      <input
        type="text"
        className="input form-control"
        value={book.overview}
        name="overview"
      ></input>
      <input
        type="text"
        className="input form-control"
        value={book.genre}
        name="genre"
      ></input>
      <input
        type="number"
        className="input form-control"
        value={book.price}
        name="price"
      ></input>
      <input
        type="submit"
        className="btn btn-success add-btn"
        value={`Edit ${book.title}`}
      />
    </form>
  );
};

export default EditForm;
