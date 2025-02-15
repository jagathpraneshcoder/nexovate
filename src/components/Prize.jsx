import React from "react";
import bottle from "../assets/bottle.svg";
import venue from "../assets/venue.svg";
import nexovateRegister from "../assets/nexovate-register.svg";
import { motion } from "framer-motion";
function Prize() {
  return (
    <div className="prize-container">
      <div className="prize-card">
        <section className="card-center">
          <img src={bottle} alt="bottle" loading="lazy"></img>
          <p>Cash Prize - 20 K</p>
          <button>Register & Play</button>
        </section>
        <section className="card-top-right">
          <motion.img
            src={nexovateRegister}
            alt="nexovateRegister"
            className="nexovateRegister"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </section>
        <section className="card-bottom-left">
          <motion.img
            src={venue}
            alt="venue"
            className="venue"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </section>
        <section className="card-bottom-right">♥ A</section>
      </div>
    </div>
  );
}

export default Prize;
