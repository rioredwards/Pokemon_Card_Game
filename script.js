// import
import { cards } from "./cards-data.js";
import { renderCard } from "./card-render.js";

// DOM Elements
const cardSectionEl = document.getElementById("cardSection");

// State Variables
const cardStyle = {
    height: "30rem",
    display: "front",
};

function displayCard(card) {
    const cardEl = renderCard(card);
    // style.setProperty("--card-height", cardStyle.height);
    document.documentElement.style.setProperty(
        "--card-height",
        cardStyle.height
    );
    cardSectionEl.append(cardEl);
}

function loadPage() {
    for (let i = 0; i < 6; i++) {
        for (let card of cards) {
            displayCard(card);
        }
    }
}

loadPage();
loadPage();
