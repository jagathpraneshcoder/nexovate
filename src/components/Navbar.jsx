import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import csda from "../assets/csda.svg";
import cdcc from "../assets/cdcc.svg";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ scrollToSection }) {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/");
    scrollToSection(data);
  };
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
            <li onClick={() => handleClick("about")}>About</li>
            <li onClick={() => handleClick("events")}>Events</li>
            <li>
              <a
                href="https://forms.gle/Hb5Xoacd4VmRL8oG9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
