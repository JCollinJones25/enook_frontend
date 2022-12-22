import logo from "../icons/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h4>ENook</h4>
      </div>
      <div className="header-right">
        <h5>welcome</h5>
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
