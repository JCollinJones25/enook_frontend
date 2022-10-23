import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const openDropdown = () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
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
            <button onClick={openDropdown} className="dropbtn">
              Admin
            </button>
            <div className="dropdown-content">
              <Create />
              <a href="/">Edit Book</a>
              <a href="/">Delete Book</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
