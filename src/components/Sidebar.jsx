import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const openDropdown = () => {
    document.querySelector(".dropdown-content").style.display = "flex";
  };

  window.onclick = function closeDropdown(event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  
  // const openModal = () => {
    // setShow(true);
  // }

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
          <li className="dropdown">
            <button onClick={(openDropdown)} className="dropbtn">
              Admin
            </button>
            <div className="dropdown-content">
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                onClick={() => setShow(true)}>
                  Enter New Book
              </button> 
              <Create show={show}/>
              <button className="btn">Edit Book</button>
              <button className="btn">Delete Book</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
