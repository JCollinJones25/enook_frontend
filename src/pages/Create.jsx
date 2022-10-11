import { useState } from "react";
import { Link } from "react-router-dom";

const Create = ({ createBook, books }) => {
  const [createForm, setCreateForm] = useState({
    title: "",
    author: "",
    cover: "",
    year: "",
    overview: "",
    genre: "",
    price: "",
  });

  const handleChange = (event) => {
    setCreateForm({
      ...createForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(createForm);
    setCreateForm({
      title: "",
      author: "",
      cover: "",
      year: "",
      overview: "",
      genre: "",
      price: "",
    });
  };

  return (
    <div className="create-form">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={createForm.title} name="title" placeholder="title" onChange={handleChange}></input>
          <input type="text" value={createForm.author} name="author" placeholder="author" onChange={handleChange}></input>
          <input type="text" value={createForm.cover} name="cover" placeholder="cover (URL)" onChange={handleChange}></input>
          <input type="number" value={createForm.year} name="year" placeholder="year" onChange={handleChange}></input>
          <input type="text" value={createForm.overview} name="overview" placeholder="overview" onChange={handleChange}></input>
          <input type="text" value={createForm.genre} name="genre" placeholder="genre" onChange={handleChange}></input>
          <input type="number" value={createForm.price} name="price" placeholder="price" onChange={handleChange}></input>
          <input type="submit" value="Add Book"/>
        </form>
      </section>
    </div>
  );
};

export default Create;
