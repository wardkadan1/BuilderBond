import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar({
  onScrollToHomeMain,
  onScrollToAbout,
  onScrollContactUs,
  activeSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
                  onScrollToHomeMain();
                }}
                className={`nav-button ${
                  activeSection === "home" ? "active" : ""
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
                  onScrollToAbout();
                }}
                className={`nav-button ${
                  activeSection === "about" ? "active" : ""
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
                  onScrollContactUs();
                }}
                className={`nav-button ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/suggestions" className="nav-button">
                Suggestions
              </Link>
            </li>
          </ul>
        </nav>
        <button className="sign-in__button">Login</button>
      </div>
    </header>
  );
}
