import Navbar from "../Navbar.jsx";
import "./Technical.css";
import Cards from "./Cards";
import events from "./event.js";

export default function Technical({ data }) {
  return (
    <div>
      <div className="technical-container">
        <div>
          <h1>Technical</h1>
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
          />
        ))}
      </div>
    </div>
  );
}
