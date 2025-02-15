import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./EventCard.css";
import backCard from "../assets/back-card.svg";

function EventCard({ photo, title, details, link }) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(isFlipped);
  useEffect(() => {
    const flipInterval = setTimeout(
      () => {
        setIsFlipped((prev) => !prev);
      },
      isFlipped ? 2000 : 10000
    ); // 2s for back side, 10s for front side

    return () => clearTimeout(flipInterval);
  }, [isFlipped]);

  return (
    <motion.div
      className="event-card"
      animate={{
        rotateY: isFlipped ? 180 : 0, // Flip between front (0°) and back (180°)
        x: [-3, -2, 2, -2, 2, -2],
      }}
      transition={{
        duration: 0.5, // 1-second flip animation
        ease: "easeInOut",
      }}
    >
      {isFlipped ? (
        <div
          className="back-side event-card-inside"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <img src={backCard} alt="back-card" className="back-image" />
        </div>
      ) : (
        <>
          <section className="card-top">
            K<br />♥
          </section>
          <div className="event-card-inside">
            <section className="event-top">
              <img src={photo} alt={"event-logo-" + title} />
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
            ♥<br />K
          </section>
        </>
      )}
    </motion.div>
  );
}

export default EventCard;
