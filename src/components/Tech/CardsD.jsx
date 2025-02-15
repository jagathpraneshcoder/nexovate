import React from "react";
import { motion, useTransform } from "framer-motion";
import "./CardsD.css";

const CardsD = ({ suit, rank, event, index, progress }) => {
  const translateY = useTransform(progress, [0, 1], [0, -50 * index]);
  const rotate = useTransform(progress, [0, 1], [0, -4 * index]);

  return (
    <motion.div className="card-container-tech" style={{ translateY, rotate }}>
      <div className="card-content-tech">
        <div className="card-header-tech">
          <span className="card-rank">{rank}</span>
          <span className="card-suit">{suit}</span>
        </div>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-teamSize">
          <b>Team Size:</b> {event.teamSize}
        </p>
        <p>
          <b>Total Rounds:</b> {event.totalRounds}
        </p>

        {event.rounds.map((round, i) => (
          <div key={i} className="card-round">
            <h4>
              <b>
                Round {i + 1} – {round.roundTitle}
              </b>
            </h4>
            <ul>
              {round.details.map((detail, j) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
            {i !== event.rounds.length - 1 && <hr className="round-divider" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CardsD;
