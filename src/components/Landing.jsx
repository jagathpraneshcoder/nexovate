import React from "react";
import Counter from "./Counter";
import EventCard from "./EventCards";
import kingFrame from "../assets/king-frame.svg";
import king from "../assets/king.svg";
import queen from "../assets/queen.svg";
import Prize from "./Prize";
import "./Landing.css";
import Contact from "./Contact";
import joker from "../assets/joker.gif";
import AboutUs from "./AboutUs.jsx";
function Landing({ aboutRef, eventsRef, registerRef }) {
  const data = [
    {
      photo: king,
      frame: kingFrame,
      link: "/tech",
      title: "TECH",
      details:
        "Our technical events cover a wide range of domains like CyberSecurity, Artificial intelligence, UI/UX etc making sure that everyone gets a glimpse of the wide technological world that we are catering to.",
    },
    {
      photo: queen,
      frame: kingFrame,
      link: "/non-tech",
      title: "NON-TECH",
      details:
        "Experience the vibrant non-technical events at Hackerz! Take a break from the daily grind and dive into excitement. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
    },
    {
      photo: king,
      frame: kingFrame,
      link: "/work-shop",
      title: "WORK SHOP",
      details:
        "Our technical events cover a wide range of domains like CyberSecurity, Artificial intelligence, UI/UX etc making sure that everyone gets a glimpse of the wide technological world that we are catering to.",
    },
  ];
  return (
    <>
      <div className="landing-container">
        {/* <div>
          <span>THE</span>
          <span> SYMPOSIUM</span>
        </div> */}
        <div className="poster-container">
          <section className="poster-gif">
            <img src={joker} alt="poster" loading="lazy"></img>
          </section>
          <section className="poster-content">
            <h1>NEXOVATE'25</h1>
          </section>
          <section className="land-btn">
            <button>Deal Me In</button>
          </section>
        </div>
      </div>
      <div className="marque">
        <p>
          Registration Fee: ₹230 per head. A participation certificate will be
          provided for all.
        </p>
      </div>
      <Counter />
      <Prize />
      <section ref={aboutRef}>
        <AboutUs />
      </section>
      <div className="event-card-container" ref={eventsRef}>
        {data.map((data, index) => (
          <EventCard
            key={index}
            photo={data.photo}
            frame={data.frame}
            title={data.title}
            details={data.details}
            link={data.link}
          />
        ))}
      </div>
      <Contact />
    </>
  );
}
export default Landing;
