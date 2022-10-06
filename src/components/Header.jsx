import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h2>ENook</h2>
      </div>
      <h3>welcome</h3>
    </div>
  );
};

export default Header;
