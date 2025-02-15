import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Landing from "./components/Landing";
import Technical from "./components/Tech/Technical";
import king from "./assets/king.svg";
import queen from "./assets/queen.svg";
import NonTech from "./components/NonTech/NonTech";
import Workshops from "./components/Workshop";
import Navbar from "./components/Navbar";
import EventDisplay from "./components/Tech/EventDisplay";
function App() {
  const dataTech = [
    {
      id: 1,
      suit: "♥",
      rank: "K",
      image: "srcassetsace.svg",
      name: "Poker Night Championship",
      description: "Biggest game of the year",
      link: "/tech/1",
    },
    {
      id: 2,
      suit: "♠",
      rank: "Q",
      image: "srcassetsace.svg",
      name: "High Stakes Showdown",
      description: "Play, win, and become legend",
      link: "/tech/1",
    },
    {
      id: 3,
      suit: "♠",
      rank: "J",
      image: "srcassetsace.svg",
      name: "High Stakes Showdown 2",
      description: "Play, win, and become legend",
      link: "/tech/1",
    },
  ];

  const dataNonTech = [
    {
      id: 1,
      suit: "♥",
      rank: "K",
      image: "srcassetsace.svg",
      name: "Poker Night Championship",
      description: "Biggest game of the year",
      link: "/non-tech/1",
    },
    {
      id: 2,
      suit: "♠",
      rank: "Q",
      image: "srcassetsace.svg",
      name: "High Stakes Showdown",
      description: "Play, win, and become legend",
      link: "/non-tech/1",
    },
    {
      id: 3,
      suit: "♠",
      rank: "J",
      image: "srcassetsace.svg",
      name: "High Stakes Showdown 2",
      description: "Play, win, and become legend",
      link: "/non-tech/1",
    },
  ];

  // References for scrolling
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const registerRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (section) => {
    const refs = { about: aboutRef, events: eventsRef, register: registerRef };
    const ref = refs[section];

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Router>
      {/* Navbar receives the scroll function */}
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        {/* Passing the refs to Landing so it can assign them to sections */}
        <Route
          path="/"
          element={
            <Landing
              aboutRef={aboutRef}
              eventsRef={eventsRef}
              registerRef={registerRef}
            />
          }
        />
        <Route
          path="/tech"
          element={<Technical data={dataTech} title="Tech" />}
        />
        <Route
          path="/non-tech"
          element={<Technical data={dataNonTech} title="Non-Tech" />}
        />
        <Route path="/non-tech/:id" element={<NonTech />} />
        <Route path="/tech/:id" element={<EventDisplay />} />
        <Route path="/work-shop" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;
