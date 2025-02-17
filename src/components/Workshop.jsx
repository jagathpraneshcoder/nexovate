import React from "react";
import { motion } from "framer-motion";
import GeometricPoker from "../assets/Nexovate-games.svg";
import GreenPoker from "../assets/Green Poker Chipes.svg";
import Queen from "../assets/Black Spade Queen.svg";
import "./Workshop.css";

const workshops = [
  {
    title: "Design Deck",
    description1: `
        Solo participation with a dedicated PC. Design a UI for an app (e.g., transportation or remote learning) using Figma, guided by experts.
      `,
    description2: `
        Instructor-led session with live demos and projector explanations. Certificates upon completion. 
      `,
    coordinator: "Sri Ram 63801 29058",
    image: Queen,
    suit: "♣",
    rank: "Q",
    chipImage: GreenPoker,
    badgeImage: GeometricPoker,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScIuDwEA8jMaS94f5NOZRlmABXC64_gDP1PygIEK7QoSlyFjQ/viewform?usp=header&authuser=1",
  },
  {
    title: "Immersion Play",
    description1: `
        Technical workshop with a dedicated PC for each participant. Hands-on experience and practical learning.
      `,
    description2: `
        Be punctual, attend all sessions, and receive e-materials. Participation certificates given. Clarify doubts during Q&A sessions.
      `,
    coordinator: "Pradeeppa 80156 46479",
    image: Queen,
    suit: "♣",
    rank: "Q",
    chipImage: GreenPoker,
    badgeImage: GeometricPoker,
    link: "https://forms.gle/6rHb7GqXJWptE3cX8",
  },
];

const Workshops = () => {
  return (
    <>
      <h1 className="workshop-title">Workshops</h1>
      <div className="workshops-container">
        {workshops.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <div className="cards">
              <div className="card-corner top-left">
                <span className="rank">{workshop.rank}</span>
                <span className="suit">{workshop.suit}</span>
              </div>

              <div className="card-border">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-content">
                  <h3>{workshop.title}</h3>
                  <p className="description">{workshop.description1}</p>
                  <p className="description">{workshop.description2}</p>
                  <p className="description">
                    <strong>First 60 participants, register early!</strong>
                  </p>
                  <a
                    href={workshop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Register Now</button>
                  </a>
                  <p className="coordinator">
                    Co-Ordinator <br></br> {workshop.coordinator}
                  </p>
                </div>
              </div>

              <div className="card-corner bottom-right">
                <span className="rank">{workshop.rank}</span>
                <span className="suit">{workshop.suit}</span>
              </div>

              <motion.img
                src={workshop.badgeImage}
                alt="Badge"
                className="badge"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.img
                src={workshop.chipImage}
                alt="Poker Chip"
                className="chip"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Workshops;
