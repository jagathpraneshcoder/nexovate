import Navbar from "./Navbar";
import "./Technical.css";
import king from "../assets/king.svg";
import queen from "../assets/queen.svg";
import Cards from "./Cards";

export default function Technical({ data, title }) {
  return (
    <div>
      <div className="technical-container">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="events-tech">
        {data.map((event, index) => (
          <Cards
            key={index}
            photo={event.photo}
            title={event.eventName}
            details={event.details}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}
