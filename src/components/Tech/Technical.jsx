import Navbar from "../Navbar.jsx";
import "./Technical.css";
import Cards from "./Cards";
import events from "./event.js";
import { useEffect } from "react";
export default function Technical({ data, title }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is rendered
  }, []);
  return (
    <div>
      <div className="technical-container">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="app">
        {data.map((event) => (
          <Cards
            key={event.id}
            suit={event.suit}
            rank={event.rank}
            image={event.image}
            name={event.name}
            description={event.description}
            link={event.link}
            contact={event.contact}
          />
        ))}
      </div>
    </div>
  );
}
