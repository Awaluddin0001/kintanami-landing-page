import "./Navbar.scss";
import Logo from "./../../assets/images/awal-logo.svg";
function Navbar() {
  return (
    <nav className="header__nav">
      <ul className="navbar">
        <li>
          <a href="#about" className="navbar__link">
            About
          </a>
        </li>
        <li>
          <img src={Logo} alt="awal logo" className="navbar__logo" />
        </li>
        <li>
          <a href="#journal" className="navbar__link">
            Journal
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
