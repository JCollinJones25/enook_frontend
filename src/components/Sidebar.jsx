import { useState, useContext } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";
import EditDelete from "./EditDelete";
import Search from "./Search";
import { DataContext } from "./DataContext";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(false);
  const { books } = useContext(DataContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const openDropdown = () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
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
