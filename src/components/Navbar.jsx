import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import csda from "../assets/csda.svg";
import cdcc from "../assets/cdcc.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <div className="header-container">
        <section className="csda-logo">
          <img src={csda} alt="csda-logo" />
        </section>
        <section className="event-name-logo">
          <h1>NEXOVATE 2K25</h1>
        </section>
        <section className="cdcc-logo">
          <img src={cdcc} alt="cdcc-logo" />
        </section>
      </div>
      <div className="menu-container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Register</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
