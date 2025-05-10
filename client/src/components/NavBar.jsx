import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar({
  onScrollToHomeMain,
  onScrollToAbout,
  onScrollContactUs,
  activeSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollOrNavigate = (scrollFunc) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollFunc();
      }, 100);
    } else {
      scrollFunc();
    }
    setMenuOpen(false);
  };

  return (
    <header className="app-header">
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className="logo-and-nav">
        <img src={logo} alt="Logo" className="logo" />
        <nav className={menuOpen ? "nav-open" : ""}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrNavigate(onScrollToHomeMain);
                }}
                className={`nav-button ${
                  activeSection === "home" && location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrNavigate(onScrollToAbout);
                }}
                className={`nav-button ${
                  activeSection === "about" && location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrNavigate(onScrollContactUs);
                }}
                className={`nav-button ${
                  activeSection === "contact" && location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/suggestions"
                className={`nav-button ${
                  location.pathname === "/suggestions" ? "active" : ""
                }`}
              >
                Suggestions
              </Link>
            </li>
          </ul>
        </nav>
        <section className="nav-buttons">
          <button className="sign-in-left-button">Sign In</button>
          <button className="sign-in-right-button">Sign Up</button>
        </section>
      </div>
    </header>
  );
}
