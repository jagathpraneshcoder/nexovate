import React from "react";
import './EventDisplay.css'
import Card from './Cards'
import event from './eventDetails'

export default function EventDisplay(){

  return(
    <div>
      <div className="h2-tag">
        <h2>Tech</h2>
      </div>
      <div className="card-column">
          {event.map((evt) => (
            <Card key={evt.id}
              suit={evt.suit}
              rank={evt.rank}
              image={evt.image}
              name={evt.name}
              description={evt.description}
            />
          ))}
      </div>
    </div>
  )
}