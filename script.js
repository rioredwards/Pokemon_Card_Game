// import
import { cards } from "./cards-data.js";
import { renderCard } from "./card-render.js";

// DOM Elements
const cardSectionEl = document.getElementById("cardSection");

// State Variables
const cardStyle = {
    height: "20rem",
    display: "front",
};

function displayCard(card) {
    const cardEl = renderCard(card);
    cardEl.style.setProperty("--card-height", "20rem");
    cardSectionEl.append(cardEl);
}

function loadPage() {
    for (let card of cards) {
        displayCard(card);
    }
}

loadPage();
