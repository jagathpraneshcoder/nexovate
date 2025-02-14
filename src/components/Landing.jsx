import React from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import EventCard from "./EventCards";
import kingFrame from "../assets/king-frame.svg";
import king from "../assets/king.svg";
import queen from "../assets/queen.svg";
import Prize from "./Prize";
import "./Landing.css";
import Contact from "./Contact";
import flyer from "../assets/flyer.webp";
import AboutUs from "./AboutUs.jsx";
function Landing() {
  const data = [
    {
      photo: king,
      frame: kingFrame,
      title: "TECH",
      details:
        "Our technical events cover a wide range of domains like CyberSecurity, Artificial intelligence, UI/UX etc making sure that everyone gets a glimpse of the wide technological world that we are catering to.",
    },
    {
      photo: queen,
      frame: kingFrame,
      title: "NON-TECH",
      details:
        "Experience the vibrant non-technical events at Hackerz! Take a break from the daily grind and dive into excitement. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
    },
    {
      photo: king,
      frame: kingFrame,
      title: "WORK SHOP",
      details:
        "Our technical events cover a wide range of domains like CyberSecurity, Artificial intelligence, UI/UX etc making sure that everyone gets a glimpse of the wide technological world that we are catering to.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div>
          <span>THE</span>
          <span> SYMPOSIUM</span>
        </div>
        <div className="poster-container">
          <img src={flyer} alt="poster"></img>
        </div>
      </div>
      <Counter />
      <Prize />
      <div className="event-card-container">
        {data.map((data, index) => (
          <EventCard
            key={index}
            photo={data.photo}
            frame={data.frame}
            title={data.title}
            details={data.details}
          />
        ))}
      </div>
      <Contact />
      <AboutUs />
    </>
  );
}
export default Landing;
