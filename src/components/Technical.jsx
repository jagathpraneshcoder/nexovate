import Navbar from "./Navbar";
import './Technical.css'
import king from "../assets/king.svg";
import queen from "../assets/queen.svg";
import Cards from "./Cards";

export default function Technical(){

  const data = [
    {
     
      eventName: "Event 1",
      photo : king,
      details:"event 1 details",
    },
    {
      
      eventName : "event 2",
      photo : queen,
      details:
        "Event 2 details"
    },
    {
      
      eventName : "event 3",
      photo : king,
      details : "Event 3 Details"
    }
  ];

  return(
    <div>
      <Navbar />
      <div className="technical-container">
        <div>
          <h1>Technical</h1>
        </div>
      </div>
        <div className="events">
          {data.map((event, index) => (
              <Cards key={index} photo={event.photo} title={event.eventName} details={event.details} />
          ))}
        </div>
    </div>
  )
}