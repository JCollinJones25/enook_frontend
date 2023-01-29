import { useContext } from "react";
import { DataContext } from "./DataContext";
import $ from "jquery";

const EditForm = ({ show, setShow, book }) => {
  const { editBook } = useContext(DataContext);
  const $editForm = $(".edit-form");

  const closeModal = () => {
    setShow((prevState) => !prevState);
    $editForm.hide();
    console.log("closing modal......" + show); // REMOVE =============================================
  };

  const updateBook = () => {
    editBook(book);
  };

  show ? $editForm.show() : $editForm.hide();

  return (
    <div className="modal edit-form">
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
          <button onClick={() => updateBook}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
