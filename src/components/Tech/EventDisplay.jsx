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
            "Registration: Only one per team (by the leader).",
            "Team Size: 2 to 4 members.",
            "Abstract: Mandatory; no filtration based on it.",
            "Slides: 6-8 slides.",
            "Slides Format: 1 - Title & Participant Details, 2 - Abstract, 3 - Existing Methods, 4 - Proposed Methods, 5 - Conclusion & Result, 6 - Future Plans.",
            "Time Limit: 5 minutes presentation + 2 minutes Q&A.",
            "Event Updates: Shared via WhatsApp (1 day before).",
            "Certificates: Only for attendees (based on attendance).",
            "Prizes: 1st – ₹1200, 2nd – ₹1000, 3rd – ₹800.",
          ],
        },
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSevorsQC8Xu2nz3T0zYgBkItCK3cHRc14ZByRbpmdVc5rN4yg/viewform",
    },
    {
      title: "Matching UI",
      teamSize: "2 members",
      totalRounds: 2,
      rounds: [
        {
          roundTitle: "Poster Design Challenge",
          details: [
            "Participants will design visually stunning posters in Canva.",
            "Bonus mini-tasks can earn extra points.",
            "Stay updated via WhatsApp for event details and submissions.",
          ],
        },
        {
          roundTitle: "Interactive UI Design Challenge",
          details: [
            "Participants will create interactive UI components in Figma (3-5 essential components).",
            "Judging is based on creativity, usability, and innovation.",
            "Only one registration per team (by the leader).",
            "Certificates: Only for attendees (based on attendance).",
            "Prizes: 1st – ₹1200, 2nd – ₹1000, 3rd – ₹800.",
          ],
        },
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeaNy-eBzJ335fTFc7oKCLPmLMGj5ZwXcTr9qnbMST3p1hc6w/viewform?usp=header&authuser=1",
    },
    {
      title: "Code Clever",
      teamSize: "2 members",
      totalRounds: 3,
      rounds: [
        {
          roundTitle: "MCQ Round",
          details: [
            "Quiz on programming, DSA & web development (via Quizizz).",
            "Participants will be tested on fundamental concepts and problem-solving skills.",
          ],
        },
        {
          roundTitle: "Debugging Round",
          details: [
            "Fix errors in given C, Java, or Python code.",
            "Focus on logic correction and code efficiency.",
          ],
        },
        {
          roundTitle: "Bug Hunt",
          details: [
            "Find and report bugs on a website.",
            "Extra points for fixing the reported bugs.",
            "Prizes: 1st – ₹1200, 2nd – ₹1000, 3rd – ₹800.",
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
