import React from "react";
import "./NonTech.css";
import coin from "../../assets/bg-coin-2.svg";
import Header from "./Header";
import Deck from "./Deck";
import card_ace from "../../assets/ace-card-2.svg";
import bg_img from "../../assets/bg-card-1.svg";
import ace from "../../assets/clever.svg";
import { useParams } from "react-router-dom";
const NonTech = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10);
  //console.log(eventId);
  const cardcontent = [
    [
      {
        no: "6",
        color: "black",
        img: card_ace,
        header: "Story Spade",
        content: [
          <div className="card-txt">The team must contain two members.</div>,
          <div className="card-txt">
            ⦁ Participants will receive an unfinished story and be tasked with
            finishing it within the allotted time.
          </div>,
          <div className="card-txt">
            ⦁ The results are based on your creativity, Engaging narration, and
            concept.{" "}
          </div>,
        ],
      },
      {
        no: "7",
        color: "black",
        img: card_ace,
        header: "Co-ordinator",
        content: [
          <div className="strong">Aakash</div>,
          <div className="strong">Ph: 90803 52052</div>,
          <div className="strong">Aakash</div>,
          <div className="strong">Ph: 90803 52052</div>,
        ],
      },
      {
        no: "5",
        color: "black",
        img: card_ace,
        header: "2 MEMBERS",
        content: [
          <div className="card-txt">⦁ Maximum 2 members per team</div>,
          <div className="card-txt">⦁ Event duration 1 Hr</div>,
          <div className="card-txt">⦁ Venue - TBA</div>,
        ],
      },
    ],
    [],
    [],
  ];
  return (
    <div id="non-tech">
      <link
        href="https://fonts.googleapis.com/css2?family=Jaro&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <img className="ace-img" src={ace} alt="ace" loading="lazy" />
      <img className="ace-img img-1" src={ace} alt="ace" loading="lazy" />
      <Header />
      <Deck deck={cardcontent[eventId - 1]} />
      <img src={coin} alt="" className="bg-coin" loading="lazy" />
      <img src={bg_img} alt="" className="bg-card" loading="lazy" />
    </div>
  );
};

export default NonTech;
