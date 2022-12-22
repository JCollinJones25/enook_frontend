import { useContext } from "react";
import { DataContext } from "./DataContext";
import Search from "./Search";

const EditDelete = ({ show, setShow }) => {
  // const { deleteBook } = useContext(DataContext);
  const { books } = useContext(DataContext);

  const closeModal = () => {
    setShow(false);
    document.querySelector(".edit-delete").style.display = "none";
  };

  if (show) {
    document.querySelector(".edit-delete").style.display = "flex";
  }

  return (
    <div className="modal edit-delete">
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
        <Search books={books} modalSearch={true} />
      </div>
    </div>
  );
};

export default EditDelete;
