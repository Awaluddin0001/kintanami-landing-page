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
<<<<<<< HEAD
          <img src={Logo} alt="awal logo" className="navbar__logo" />
        </li>
        <li>
          <a href="#journal" className="navbar__link">
=======
          <img src={Logo} alt="awal logo" className="navbar__logo"/>
        </li>
        <li>
          <a href="" className="navbar__link">
>>>>>>> 8ec3ee0ae205d2fa6c4fab8e8080e5c98016e546
            Journal
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
