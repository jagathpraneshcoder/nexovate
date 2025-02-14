import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Landing from "./components/Landing";
import Technical from "./components/Technical";
import king from "./assets/king.svg";
import queen from "./assets/queen.svg";
import NonTech from "./components/NonTech/NonTech";
import Workshops from "./components/Workshop";
function App() {
  const dataTech = [
    {
      eventName: "Event 1",
      photo: king,
      details: "event 1 details",
      link: "/tech-event/1",
    },
    {
      eventName: "event 2",
      photo: queen,
      details: "Event 2 details",
      link: "/tech-event/2",
    },
    {
      eventName: "event 3",
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
      eventName: "event 2",
      photo: queen,
      details: "Event 2 details",
      link: "/non-tech-event/2",
    },
    {
      eventName: "event 3",
      photo: king,
      details: "Event 3 Details",
      link: "/non-tech-event/3",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
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
