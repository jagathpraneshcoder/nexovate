import React from "react";
import './Cards.css'

function Cards({ photo, title, details }) {
  return (
    <div className="event-card">
      <section className="card-top">
        K<br></br>♥
      </section>
      <div className="event-card-inside">
        <section className="event-top">
          <img src={photo} alt={"event-logo-" + title}></img>
        </section>
        <section className="event-details">
          <h5>{title}</h5>
          <p>{details}</p>
          <button>Explore</button>
        </section>
      </div>
      <section className="card-bottom">
        ♥<br></br>K
      </section>
    </div>
  );
}

export default Cards;
