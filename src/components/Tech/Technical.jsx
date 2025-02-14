import Navbar from "../Navbar.jsx";
import './Technical.css'
import Cards from "./Cards";
import events from "./event.js"

export default function Technical(){

  return(
    <div>
      <div className="technical-container">
        <div>
          <h1>Technical</h1>
        </div>
      </div>
        <div className="app">
          {
            events.map(event => (
              <Cards
                key={event.id}
                suit={event.suit}
                rank={event.rank}
                image={event.image}
                name={event.name}
                description={event.description}
              />
            )
          )
          }
        </div>
    </div>
  )
}