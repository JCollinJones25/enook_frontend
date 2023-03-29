import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import $ from "jquery";

const EditForm = ({ book }) => {
  const [title, setTitle] = useState(book.title)
  const [author, setAuthor] = useState(book.author)
  const [cover, setCover] = useState(book.cover)
  const [year, setYear] = useState(book.year)
  const [overview, setOverview] = useState(book.overview)
  const [genre, setGenre] = useState(book.genre)
  const [price, setPrice] = useState(book.price)
  const { editBook, url } = useContext(DataContext);
  const $editForm = $(".edit-form");

  const updateBook = async (event) => {
    event.preventDefault();
    try {
      const body = {
        title,
        author,
        cover,
        year,
        overview,
        genre,
        price
      };
      const response = await fetch(`${url}/${book._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      window.location = "/";
    } catch (error) {
      console.error(error.message)
    }
  };

  const resetForm = () => {
    setTitle(book.title);
    setAuthor(book.author);
    setCover(book.cover);
    setYear(book.year);
    setOverview(book.overview);
    setGenre(book.genre);
    setPrice(book.price);
  }


  return (
    <form className="edit-form" onSubmit={updateBook}>
      <input
        type="text"
        className="form-control edit-input"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        className="form-control edit-input"
        value={author}
        name="author"
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <input
        type="text"
        className="form-control edit-input"
        value={cover}
        name="cover"
        onChange={(e) => setCover(e.target.value)}
      ></input>
      <input
        type="number"
        className="form-control edit-input"
        value={year}
        name="year"
        onChange={(e) => setYear(e.target.value)}
      ></input>
      <input
        type="text"
        className="form-control edit-input"
        value={overview}
        name="overview"
        onChange={(e) => setOverview(e.target.value)}
      ></input>
      <input
        type="text"
        className="form-control edit-input"
        value={genre}
        name="genre"
        onChange={(e) => setGenre(e.target.value)}
      ></input>
      <input
        type="number"
        className="form-control edit-input"
        value={price}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
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
