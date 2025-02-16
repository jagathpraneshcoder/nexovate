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
import paper from "./assets/paper-poker.webp";
import ui from "./assets/ui.webp";
import coding from "./assets/coding.webp";
function App() {
  const dataTech = [
    {
      id: 1,
      suit: "♥",
      rank: "K",
      image: paper,
      name: "Paper Poker",
      description:
        "Paper Poker 🃏 Pitch, impress, and win! No abstract filtration—just a fair stage for your innovation. Register now! 🚀💡",
      link: "/tech/1",
    },
    {
      id: 2,
      suit: "♠",
      rank: "Q",
      image: ui,
      name: "Matching UI",
      description:
        "Matching UI 🎨⚡ Design stunning UIs, impress the judges, and win! Limited slots—register now! 🚀",
      link: "/tech/2",
    },
    {
      id: 3,
      suit: "♠",
      rank: "J",
      image: coding,
      name: "Code Clever",
      description:
        "Code Clash 💻⚡ Solve, debug, and conquer challenges in a fun-packed coding showdown! Show your skills and win big. Register now! 🚀",
      link: "/tech/3",
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
