import React from "react";
import bottle from "../assets/bottle.svg";
import venue from "../assets/venue.svg";
import nexovateRegister from "../assets/nexovate-register.svg";

function Prize() {
  return (
    <div className="prize-container">
      <div className="prize-card">
        <section className="card-center">
          <img src={bottle} alt="bottle"></img>
          <p>Cash Prize - 20 K</p>
          <button>Register & Play</button>
        </section>
        <section className="card-top-right">
          <img src={nexovateRegister} alt="nexovateRegister"></img>
        </section>
        <section className="card-bottom-left">
          <img src={venue} alt="venue"></img>
        </section>
        <section className="card-bottom-right">♥ A</section>
      </div>
    </div>
  );
}

export default Prize;
