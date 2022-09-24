// import functions and grab DOM elements
import { cards } from "./cards-data.js";
import { renderCard } from "./card-render.js";

const cardSectionEl = document.getElementById("cardSection");
cardSectionEl.classList.add("card-section");

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
