// import functions and grab DOM elements
import { card } from "./cards-data.js";
import { renderCard } from "./card-render.js";

const cardSectionEl = document.getElementById("cardSection");

function displayCard() {
    cardSectionEl.innerHTML = "";

    const cardEl = renderCard(card);
    cardSectionEl.append(cardEl);
}

displayCard();
