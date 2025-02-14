import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
function Cards({ photo, title, details, link }) {
  return (
    <div className="event-card-tech">
      <section className="card-top-tech">
        K<br></br>♥
      </section>
      <div className="event-card-inside-tech">
        <section className="event-top-tech">
          <img src={photo} alt={"event-logo-" + title}></img>
        </section>
        <section className="event-details-tech">
          <h5>{title}</h5>
          <p>{details}</p>
          <Link to={link}>
            <button>Explore</button>
          </Link>
        </section>
      </div>
      <section className="card-bottom-tech">
        ♥<br></br>K
      </section>
    </div>
  );
}

export default Cards;
