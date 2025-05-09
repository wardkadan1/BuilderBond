import React from "react";
import footer_logo from "../assets/footer_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-all">
      <section className="footer-up">
        <img className="footer-img" src={footer_logo} alt="" />
        <button className="footer-button">Download APP</button>
      </section>
      <section className="footer-down">
        <section className="footer-down-left-sec">
          <ul>
            <li className="footer-down-font footer-down-first-margin-left">
              <Link>Terms & Conditions</Link>
            </li>
            <li className="footer-down-font footer-down-li-margin-left">
              <Link>Contact</Link>
            </li>
            <li className="footer-down-font footer-down-li-margin-left">
              <Link>FAQ Us</Link>
            </li>
            <li className="footer-down-font footer-down-li-margin-left">
              <Link>About</Link>
            </li>
          </ul>
        </section>
        <section className="footer-down-right-sec">
          <p>© 2025 BuilderBond. All rights reserved.</p>
        </section>
      </section>
    </section>
  );
};

export default Footer;
