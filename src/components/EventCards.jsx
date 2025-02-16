import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import backCard from "../assets/back-card.svg";

function EventCard({ photo, title, details, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setTimeout(
      () => {
        setIsFlipped((prev) => !prev);
      },
      isFlipped ? 2000 : 10000
    );

    return () => clearTimeout(flipInterval);
  }, [isFlipped]);

  return (
    <div className="event-card">
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="front-side">
          <section className="card-top">
            K<br />♥
          </section>
          <div className="event-card-inside">
            <section className="event-top">
              <img src={photo} alt={`event-logo-${title}`} loading="lazy" />
            </section>
            <section className="event-details">
              <h6>{title}</h6>
              <p>{details}</p>
              <Link to={link}>
                <button>Explore</button>
              </Link>
            </section>
          </div>
          <section className="card-bottom">
            K<br />♥
          </section>
        </div>
        <div className="back-side">
          <img
            src={backCard}
            alt="back-card"
            className="back-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
