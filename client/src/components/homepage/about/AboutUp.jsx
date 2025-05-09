import React from "react";
import about from "../../../assets/about.png";

export default function AboutUp() {
  return (
    <section className="about-up">
      <section className="about-up-content">
        <h1 className="about-up-h">About Us</h1>
        <p className="about-up-p">
          We’re a team focused on solving a real<br></br> problem in the
          construction industry: matching<br></br> the{" "}
          <span className="about-marker">right workers</span> with the{" "}
          <span className="about-marker">right jobs.</span>
        </p>
        <p className="about-up-p">
          Whether you’re a <span className="about-marker">contractor</span> who
          needs skilled<br></br> help fast, or a{" "}
          <span className="about-marker">worker</span> looking for a steady
          <br></br>
          stream of jobs—this is the place for you.
        </p>
      </section>
      <img className="about-up-img" src={about} alt="" />
    </section>
  );
}
