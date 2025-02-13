import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const cardIcons = ["♕", "♖", "♥", "♠"];

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter-container">
      <section className="counter-head">
        <div>
          BEGINS <span>IN</span>
        </div>
        <div>
          <span>COUNT</span> DOWN
        </div>
      </section>
      <section className="timer">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div className="card" key={unit} data-icon={cardIcons[index]}>
            <span className="value">{value}</span>
            <p className="unit">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Counter;
