import logo from "../logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h2>ENook</h2>
      </div>
      <div className="header-right">
        <h3>welcome</h3>
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
