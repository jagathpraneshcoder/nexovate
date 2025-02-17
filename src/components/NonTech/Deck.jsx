import React from "react";
import Card from "./Card";

let cardFlag = false;
const view = (id) => {
  console.log(cardFlag);
  if (cardFlag) return;
  cardFlag = true;
  const card = document.querySelector(`.${id}`);
  const toth = window.innerHeight; // Total height of the viewport
  const totw = window.innerWidth; // Total width of the viewport
  const ch = card.offsetHeight; // Card height
  const cw = card.offsetWidth; // Card width

  // Check if an overlay already exists
  if (document.querySelector(".overlay-nt")) {
    return; // Prevent multiple overlays
  }

  // Create an overlay to make the background dull
  const overlay = document.createElement("div");
  overlay.classList.add("overlay-nt");
  overlay.style.position = "fixed";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  (overlay.style.transition = "background-color 0.5s ease"),
    (overlay.style.zIndex = "9");
  document.body.appendChild(overlay);

  // Save the card's current position and styles
  const rect = card.getBoundingClientRect(); // Get the card's current position relative to the viewport
  const previousStyle = {
    transform: card.style.transform,
    zIndex: card.style.zIndex,
    width: card.style.width,
    height: card.style.height,
    fontSize: card.style.fontSize,
  };

  card.style.transition =
    "transform 0.5s ease, z-index 0.5s ease, width 0.5s ease, height 0.5s ease, font-size 0.5s ease";

  // Calculate the center position
  const centerX = totw / 2 - (rect.left + cw / 2); // Horizontal translation
  const centerY = toth / 2 - (rect.top + ch / 2); // Vertical translation

  // Calculate offset based on card ID
  let offset = 1.25; // default offset in rem
  switch (id) {
    case "card-1-nt":
      offset = 1.25;
      break;
    case "card-2-nt":
      offset = 2.5;
      break;
    case "card-3-nt":
      offset = 3.75;
      break;
  }

  // Center the card using transform and keep it relative
  card.style.position = "relative"; // Maintain position as relative
  card.style.transform = `translate(calc(${
    centerX / 16
  }rem - ${offset}rem), calc(${centerY / 16 - 2}rem ))`; // Move the card to the center
  card.style.zIndex = "10000"; // Bring the card to the front

  // Expand the card
  card.style.width = "85%";
  card.style.minHeight = "20rem";
  card.style.height = "fit-content";
  card.style.fontSize = "1.2rem";

  // Event to restore the card on overlay click
  const closeCard = () => {
    setTimeout(() => {
      // Restore the card's previous position and styles
      card.style.transform = previousStyle.transform; // Reset transform
      card.style.zIndex = previousStyle.zIndex; // Reset z-index
      card.style.width = previousStyle.width; // Reset width
      card.style.height = previousStyle.height; // Reset height
      card.style.fontSize = previousStyle.fontSize; // Reset font size

      // Remove the overlay
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }

      // Remove event listener from the card to avoid stacking
      card.removeEventListener("click", closeCard);
      cardFlag = false;
    }, 50);
  };

  // Attach event listeners to close the card
  overlay.addEventListener("click", closeCard);
  card.addEventListener("click", closeCard); // Allow closing by clicking the card itself
};

const Deck = (props) => {
  return (
    <div className="deck-nt">
      <Card
        color={props.deck[0].color}
        no={props.deck[0].no}
        img={props.deck[0].img}
        header={props.deck[0].header}
        content={props.deck[0].content}
        className="card-1-nt"
        id="card-1-nt"
        onClick={view}
      />
      <Card
        color={props.deck[1].color}
        no={props.deck[1].no}
        img={props.deck[1].img}
        header={props.deck[1].header}
        content={props.deck[1].content}
        className="card-1-nt"
        id="card-2-nt"
        onClick={view}
      />
      <Card
        color={props.deck[2].color}
        no={props.deck[2].no}
        img={props.deck[2].img}
        header={props.deck[2].header}
        content={props.deck[2].content}
        className="card-1-nt"
        id="card-3-nt"
        onClick={view}
      />
    </div>
  );
};

export default Deck;
