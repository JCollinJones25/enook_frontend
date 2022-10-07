import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className="hamburger">
        <Hamburger 
          size={25}
          onClick={showSidebar}
          toggled={sidebar}
          toggle={setSidebar}>
        </Hamburger>
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
          </ul>
        </nav>
      </div>
    )
}

export default Sidebar;