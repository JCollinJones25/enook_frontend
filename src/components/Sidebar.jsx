import { useState, useContext } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";
import EditDelete from "./EditDelete";
import Search from "./Search";
import { DataContext } from "./DataContext";
import $ from "jquery";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(false);
  const { books } = useContext(DataContext);
  const $dropdown = $(".dropdown-content");
  let display = false;

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // document.addEventListener("click", (event) => {
  //   if (display && !event.target.classList.contains("dropdown-content")) {
  //     $dropdown.hide();
  //     display = false;
  //   }
  // });

  const openDropdown = () => {
    if (!display) {
      $dropdown.show();
      display = true
    } else {
      $dropdown.hide()
      display = false
    }
  };

  return (
    <div className="hamburger">
      <Hamburger
        size={25}
        onClick={showSidebar}
        toggled={sidebar}
        toggle={setSidebar}
      ></Hamburger>
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Hamburger
              size={25}
              onClick={showSidebar}
              toggled={sidebar}
              toggle={setSidebar}
            ></Hamburger>
          </li>
          <hr></hr>
          <li>
            <Search books={books} />
          </li>
          <li className="dropdown">
            <button onClick={openDropdown} className="dropbtn">
              Admin
            </button>
            <div className="dropdown-content">
              <button
                type="button"
                className="btn dropdown-item"
                data-toggle="modal"
                onClick={() => setShowCreate(true)}
              >
                Enter New Book
              </button>
              <Create show={showCreate} setShow={setShowCreate} />
              <button
                type="button"
                className="btn dropdown-item"
                data-toggle="modal"
                onClick={() => setShowEditDelete(true)}
              >
                Edit / Delete Book
              </button>
              <EditDelete show={showEditDelete} setShow={setShowEditDelete} />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
