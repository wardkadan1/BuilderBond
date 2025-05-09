import React from "react";
import HomeMainContent from "./HomeMainContent";

export default function HomeMain() {
  return (
    <div className="home-hero">
      <section>
        <h1 className="home-name">
          <span className="home-left-name">Builder</span>
          <span className="home-right-name">Bond</span>
        </h1>
        <HomeMainContent />
        <section className="home-button">
          <button className="home-button-left">Worker</button>
          <button className="home-button-right">Contractor</button>
        </section>
      </section>
    </div>
  );
}
