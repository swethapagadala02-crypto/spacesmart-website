import "./Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar({ openPopup }) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="SpaceSmart Logo" className="logo" />

        <div className="company-name">
          <h2>SpaceSmart</h2>
          <p>PROP MANAGEMENT LLP</p>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button
  className="quote-btn"
  onClick={openPopup}
>
  Get a Quote
</button>
    </nav>
  );
}

export default Navbar;