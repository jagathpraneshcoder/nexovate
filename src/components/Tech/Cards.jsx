import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
const Cards = ({ suit, rank, image, name, description, link, contact }) => {
  return (
    <div className="card">
      <div className="card-corner top-left">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>
      <img src={image} className="event-image" loading="lazy" />
      <h2 className="event-name">{name}</h2>
      <p className="event-description">{description}</p>
      <p className="co-name">{contact}</p>
      <Link to={link}>
        <button className="explore-button">Explore</button>
      </Link>
      <div className="card-corner bottom-right">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>
    </div>
  );
};

export default Cards;
