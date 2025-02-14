import React from "react";
import { motion, useTransform } from "framer-motion";
import "./CardsD.css";

const CardsD = ({ suit, rank, image, name, description, index, progress }) => {
  const translateY = useTransform(progress, [0, 1], [0, -120 * index]);
  const rotate = useTransform(progress, [0, 1], [0, -10 * index]);

  return (
    <motion.div className="card-container" style={{ translateY, rotate }}>
      <div className="card" style={{ top: `calc(-5vh + ${index * 25}px)` }}>
        <div className="card-corner top-left">
          <span>{rank}</span>
          <span>{suit}</span>
        </div>
        <div className="image-container">
          <img src={image} alt="image" className="event-image" />
        </div>
        <h2 className="event-name">{name}</h2>
        <p className="event-description">{description}</p>
        <button className="explore-button">Explore</button>
        <div className="card-corner bottom-right">
          <span>{rank}</span>
          <span>{suit}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardsD;

