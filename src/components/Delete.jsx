import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Search from "./Search";

const Delete = ({ show, setShow }) => {
  const { deleteBook } = useContext(DataContext);
  const { books } = useContext(DataContext);

  if (show) {
    document.querySelector(".edit-delete").style.display = "flex";
  }

  return (
    <div className="modal edit-delete">
      <div className="modal-content">
        <div className="close">
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            &times;
          </button>
        </div>
        <Search books={books}/>
      </div>
    </div>
  );
};

export default Delete;
