import { useContext } from "react";
import { DataContext } from "./DataContext";
import Search from "./Search";
import $ from "jquery";

const EditDelete = ({ show, setShow }) => {
  const { deleteBook } = useContext(DataContext);
  const { books } = useContext(DataContext);
  const $editDelete = $(".edit-delete");

  const closeModal = () => {
    setShow(false);
    $editDelete.hide();
  };

  if (show) {
    $editDelete.show()
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
        <Search books={books} modalSearch={true} deleteBook={deleteBook}/>
      </div>
    </div>
  );
};

export default EditDelete;
