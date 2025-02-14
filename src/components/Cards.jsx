import React from "react";
import "./Cards.css"

const Cards = ({ suit, rank, image, name, description }) => {
  return (
    <div className="card">
      <div className="card-corner top-left">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>
      <img src={image} alt={name} className="event-image" />
      <h2 className="event-name">{name}</h2>
      <p className="event-description">{description}</p>
      <div className="card-corner bottom-right">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>
    </div>
  );
};

export default Cards;
