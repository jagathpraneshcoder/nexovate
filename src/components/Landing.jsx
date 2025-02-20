import React, { useRef } from "react";
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
import Footer from "./Footer.jsx";

function Landing({ aboutRef, eventsRef, registerRef }) {
  const prizeRef = useRef(null);

  const scrollToPrize = () => {
    prizeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
      photo: king,
      frame: kingFrame,
      link: "/tech",
      title: "TECH",
      details:
        "Join Paper Poker, Matching UI, and the Coding Event to showcase your ideas, design skills, and coding expertise while competing for exciting prizes! 🎭💻✨ Limited slots—register now",
    },
    {
      photo: queen,
      frame: kingFrame,
      link: "/non-tech",
      title: "NON-TECH",
      details:
        "Take on thrilling challenges that test your creativity, teamwork, and quick thinking! Face surprise twists, hands-on tasks, and compete for glory. Join the fun and claim your rewards! 🏆✨",
    },
    {
      photo: king,
      frame: kingFrame,
      link: "/work-shop",
      title: "WORK SHOP",
      details:
        "Gain hands-on UI design and tech skills through expert sessions, live demos, and practical exercises. Master stunning UIs in Design Deck or explore deep tech in Immersion Play—upskill and earn a certificate!",
    },
  ];
  const openEventLink = () => {
    window.open("https://docs.google.com/document/d/1oixQe2qnsqku7OS07lXC_LRsh0nAl8z7/edit?usp=sharing&ouid=107264256920533900159&rtpof=true&sd=truehttps://docs.google.com/document/d/1oixQe2qnsqku7OS07lXC_LRsh0nAl8z7/edit?usp=sharing&ouid=107264256920533900159&rtpof=true&sd=true", "_blank");
  }
  return (
    <>
      <div className="landing-container">
        <div className="poster-container">
          <section className="poster-gif">
            <img src={joker} alt="poster" loading="lazy"></img>
          </section>
          <section className="poster-content">
            <h1>NEXOVATE'25</h1>
            <section className="land-btn">
              <button onClick={scrollToPrize}>Deal Me In</button>
            </section>
            <div className="date-container">
              <p>
                📅 <strong>Mark Your Calendars on</strong> March 1, 2025
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="marque">
        <p>
          Registration Fee: ₹250 per head. A participation certificate will be
          provided for all.
        </p>
      </div>
      <Counter />
      <div ref={prizeRef}>
        <Prize />
      </div>
      <section ref={aboutRef}>
        <AboutUs />
      </section>
      <div className="rules">
        <a
          href="https://docs.google.com/document/d/134m7ZQUWZ0BQvKPJ1CE9BHtQ1f9NuzaU/edit?usp=sharing&ouid=107264256920533900159&rtpof=true&sd=true&authuser=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rules-button">Rules & Guidelines</button>
          <button className="rules-button" onClick={openEventLink}>Events agenda</button>
        </a>
        <p>Kindly go through the guidelines before registering</p>
      </div>
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
      <Footer />
    </>
  );
}

export default Landing;
