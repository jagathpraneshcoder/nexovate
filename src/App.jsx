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

function App() {
  // Event data
  const dataTech = [
    {
      eventName: "Event 1",
      photo: king,
      details: "event 1 details",
      link: "/tech-event/1",
    },
    {
      eventName: "Event 2",
      photo: queen,
      details: "Event 2 details",
      link: "/tech-event/2",
    },
    {
      eventName: "Event 3",
      photo: king,
      details: "Event 3 Details",
      link: "/tech-event/3",
    },
  ];

  const dataNonTech = [
    {
      eventName: "Event 1",
      photo: king,
      details: "event 1 details",
      link: "/non-tech-event/1",
    },
    {
      eventName: "Event 2",
      photo: queen,
      details: "Event 2 details",
      link: "/non-tech-event/2",
    },
    {
      eventName: "Event 3",
      photo: king,
      details: "Event 3 Details",
      link: "/non-tech-event/3",
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
        <Route path="/non-tech-event/:id" element={<NonTech />} />
        <Route path="/work-shop" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;
