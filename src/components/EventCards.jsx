import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard({ photo, title, details, link }) {
  return (
    <motion.div
      className="event-card"
      animate={{
        rotateY: [180, 180, 0, 0], // Start from back (180°), stay, then flip (0°)
        x: [-3, -2, 2, -2, 2, -2],
      }}
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 12, // Total cycle (2s back + 10s front)
        ease: "easeInOut",
        times: [0, 0.167, 0.167, 1], // 2s (back) + 10s (front)
      }}
    >
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
    </motion.div>
  );
}

export default EventCard;
