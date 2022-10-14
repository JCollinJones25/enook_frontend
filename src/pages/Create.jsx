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
    setNewBook({
      title: "",
      author: "",
      cover: "",
      year: "",
      overview: "",
      genre: "",
      price: "",
    });
    createBook(newBook);
    console.log(newBook)
    navigate("/")
  };

  return (
    <div className="create-form">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newBook.title} name="title" placeholder="title" onChange={handleChange}></input>
          <input type="text" value={newBook.author} name="author" placeholder="author" onChange={handleChange}></input>
          <input type="text" value={newBook.cover} name="cover" placeholder="cover (URL)" onChange={handleChange}></input>
          <input type="number" value={newBook.year} name="year" placeholder="year" onChange={handleChange}></input>
          <input type="text" value={newBook.overview} name="overview" placeholder="overview" onChange={handleChange}></input>
          <input type="text" value={newBook.genre} name="genre" placeholder="genre" onChange={handleChange}></input>
          <input type="number" value={newBook.price} name="price" placeholder="price" onChange={handleChange}></input>
          <input type="submit" value="Add Book"/>
        </form>
      </section>
    </div>
  );
};

export default Create;
