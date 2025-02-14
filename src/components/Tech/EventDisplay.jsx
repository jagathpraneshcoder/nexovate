import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import './EventDisplay.css';
import CardsD from './CardsD';
import event from './eventDetails';

export default function EventDisplay() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef}>
      <div className="h2-tag">
        <h2>Event Name</h2>
      </div>
      <div className="card-column">
        {event.map((evt, index) => {
          return (
            <CardsD
              key={evt.id}
              suit={evt.suit}
              rank={evt.rank}
              image={evt.image}
              name={evt.name}
              description={evt.description}
              index={index}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}