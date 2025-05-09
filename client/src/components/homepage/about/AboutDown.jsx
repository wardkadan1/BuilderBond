import React from "react";
import about from "../../../assets/about2.png";

export default function AboutDown() {
  return (
    <section id="about-down-color" className="about-down ">
      <img className="about-down-img" src={about} alt="" />
      <section className="about-down-content">
        <h1 className="about-down-h">Why Choose Us?</h1>
        <ul className="about-down-list">
          <li>
            <span className="about-marker">Verified</span> workers and
            contractors
          </li>
          <li>
            <span className="about-marker">Fast</span> job matching
          </li>
          <li>
            No <span className="about-marker">middlemen</span>
          </li>
          <li>
            Transparent and fair{" "}
            <span className="about-marker">opportunities</span> for all
          </li>
        </ul>
      </section>
    </section>
  );
}
