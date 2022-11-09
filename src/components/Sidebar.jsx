import { useState, useContext } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";
import Search from "./Search";
import { DataContext } from "./DataContext";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
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
                onClick={() => setShow(true)}
              >
                Enter New Book
              </button>
              <Create show={show} setShow={setShow} />
              <button className="btn dropdown-item">Edit Book</button>
              <button className="btn dropdown-item">Delete Book</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
