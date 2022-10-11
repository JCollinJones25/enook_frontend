import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Create from "./Create";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
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
              <button class="dropbtn">Admin</button>
              <div class="dropdown-content">
                <a href="/">Enter book</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
          </li>
          <hr></hr>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
