import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useScroll } from "framer-motion";
import "./EventDisplay.css";
import CardsD from "./CardsD";
export default function EventDisplay() {
  const event = [
    {
      title: "Bluff the Brain",
      teamSize: "2 members",
      totalRounds: 3,
      rounds: [
        {
          roundTitle: "BrainTease",
          details: [
            "Participants will answer multiple-choice questions related to non-technical topics like movies, general fun quizzes, and logo identification.",
          ],
        },
        {
          roundTitle: "SeekSphere",
          details: [
            "A team will be given 3 objects.",
            "Participants will be blindfolded and are asked to figure out what the objects are.",
            "Teams that discover the highest number of objects within the shortest time frame will move to the next round.",
          ],
        },
        {
          roundTitle: "GuessGrove",
          details: [
            "One team member will be given a secret word and must convey it to the other team member using indirect clues.",
            "Each team will get 5 chances for each word.",
            "The teams that find the most words in the shortest time will be considered as winners.",
            "Any use of external resources during the game will result in immediate disqualification.",
          ],
        },
      ],
    },
  ];
  const { id } = useParams();
  const eventId = parseInt(id, 10);
  const containerRef = useRef(null);
  //console.log(event[0].title, "____", eventId);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef}>
      <div className="h1-tag">
        <h1>{event[0].title}</h1>
      </div>
      <div className="card-column">
        <CardsD
          key={eventId}
          suit="♠"
          rank={`J`}
          event={event[eventId - 1]}
          index={eventId}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
}
