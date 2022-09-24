// import functions and grab DOM elements
// import { card } from "./cards-data.js";
import { renderCard } from "./card-render.js";

const cardSectionEl = document.getElementById("cardSection");
cardSectionEl.classList.add("card-section");
let cardID = 0;

function displayCard() {
    const cardEl = renderCard(cardID);
    cardEl.style.setProperty("--card-height", "20rem");
    cardSectionEl.append(cardEl);
}

for (let i = 0; i < 6; i++) {
    displayCard();
    cardID++;
}
