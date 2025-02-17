import React from "react";
import bottle from "../assets/bottle.svg";
import { motion } from "framer-motion";
import "./Prize.css"; // Import the new CSS file
import { useRef } from "react";
function Prize() {
  return (
    <div className="prize-container-a">
      <div className="prize-card-a">
        <section className="card-top-left-a">♠</section>
        <section className="card-top-right-a">♦</section>
        <section className="card-center-a">
          <section className="price-content-a">
            <div className="prize-details-a">
              <p>♠️♦️ All-in-One Jackpot! ♣️♥️ 🃏</p>
              <p>💰 Prize Pool: ₹20,000 – Win Big! 🏆 🃏</p>
              <p>🎟️ Entry Fee: Just ₹250 for Full Access 🎫 🃏</p>
              <p>
                ♠️ Participate in: Tech Events 🔧 Non-Tech Events 🎭 Workshops
                📚 🃏
              </p>
              <p>
                🎖️ Perks for All Players: Participation & Winning Certificates
                📜 Exclusive Kit 🎁 Refreshments & Lunch 🍽️
              </p>
              <p>🎲 Don't Fold – Play Your Best Hand! Register Now! 🚀</p>
            </div>
          </section>
          <a
            href="https://forms.gle/Hb5Xoacd4VmRL8oG9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Register & Play</button>
          </a>
        </section>
        <section className="card-bottom-left-a">♣</section>
        <section className="card-bottom-right-a">♥</section>
      </div>
    </div>
  );
}

export default Prize;
