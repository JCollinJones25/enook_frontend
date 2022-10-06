import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <img src={logo} alt="logo" />
        <h2>ENook</h2>
      </div>
      <h3>welcome</h3>
    </div>
  );
};

export default Header;
