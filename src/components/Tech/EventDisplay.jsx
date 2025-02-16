import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useScroll } from "framer-motion";
import "./EventDisplay.css";
import CardsD from "./CardsD";
export default function EventDisplay() {
  const events = [
    {
      title: "Paper Poker",
      teamSize: "2-4 members",
      totalRounds: 1,
      rounds: [
        {
          roundTitle: "Idea Pitch",
          details: [
            "Teams will present their research and innovative ideas in a structured format.",
            "Presentations should follow a 6-8 slide format covering Title, Abstract, Existing Methods, Proposed Methods, Conclusion & Results, and Future Plans.",
            "Each team gets a maximum of 5 minutes for the presentation followed by a 2-minute Q&A session.",
            "No abstract filtration—every team gets a fair chance.",
            "Top teams will be awarded based on idea quality, clarity, and impact.",
          ],
        },
      ],
    },
    {
      title: "Matching UI",
      teamSize: "2 members",
      totalRounds: 1,
      rounds: [
        {
          roundTitle: "Creative UI Challenge",
          details: [
            "Participants will design visually stunning and interactive UI components.",
            "Use tools like Canva for posters and Figma for interactive designs.",
            "Judging is based on creativity, usability, and innovation.",
            "Bonus mini-tasks can earn extra points.",
            "Stay updated via WhatsApp for event details and submissions.",
          ],
        },
      ],
    },
    {
      title: "Code Clash",
      teamSize: "Individual or 2 members",
      totalRounds: 1,
      rounds: [
        {
          roundTitle: "Coding Showdown",
          details: [
            "Participants will solve algorithmic and problem-solving challenges.",
            "Expect debugging, logic-based tasks, and optimization problems.",
            "Each problem carries different difficulty levels with corresponding points.",
            "The leaderboard will track live rankings based on accuracy and speed.",
            "Winners are decided based on the highest cumulative score.",
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
        <h1>{events[eventId - 1].title}</h1>
      </div>
      <div className="card-column">
        <CardsD
          key={eventId}
          suit="♠"
          rank={`J`}
          event={events[eventId - 1]}
          index={eventId}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
}
