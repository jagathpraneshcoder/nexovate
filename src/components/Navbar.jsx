import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import csda from "../assets/csda.svg";
import cdcc from "../assets/cdcc.svg";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ scrollToSection }) {
  return (
    <div>
      <div className="header-container">
        <section className="csda-logo">
          <img src={csda} alt="csda-logo" />
        </section>
        <section className="event-name-logo">
          <img src={logo} alt="logo" />
        </section>
        <section className="cdcc-logo">
          <img src={cdcc} alt="cdcc-logo" />
        </section>
      </div>

      <div className="menu-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("events")}>Events</li>
            <li onClick={() => scrollToSection("register")}>Register</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
