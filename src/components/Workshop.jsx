import React from "react";
import { motion } from "framer-motion";
import GeometricPoker from "../assets/Nexovate-games.svg";
import GreenPoker from "../assets/Green Poker Chipes.svg";
import designDeck from "../assets/design-deck.webp";
import immersionPlay from "../assets/imm-play.webp";
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
    image: designDeck,
    suit: "♣",
    rank: "Q",
    chipImage: GreenPoker,
    badgeImage: GeometricPoker,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScIuDwEA8jMaS94f5NOZRlmABXC64_gDP1PygIEK7QoSlyFjQ/viewform?usp=header&authuser=1",
  },
  {
    title: "Immersion Play: AR/VR Workshop",
    description1:
      "Step into the future with an immersive AR/VR experience! Each participant gets hands-on training with Meta Oculus VR headsets, exploring cutting-edge technology.",
    description2:
      "Be on time, attend all sessions, and receive e-materials. Participation certificates will be provided. Engage in Q&A sessions to clarify doubts.",
    coordinator: "Pradeeppa 80156 46479",
    image: immersionPlay,
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
