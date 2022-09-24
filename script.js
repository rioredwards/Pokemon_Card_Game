// import functions and grab DOM elements
// import { card } from "./cards-data.js";
import { renderCard } from "./card-render.js";

const cardSectionEl = document.getElementById("cardSection");
cardSectionEl.classList.add("card-section");

function displayCard() {
    cardSectionEl.innerHTML = "";

    const cardEl = renderCard();
    cardEl.style.setProperty("--card-height", "200px");
    cardSectionEl.append(cardEl);
}
// for (let i = 0; i < 2; i++) {
//     displayCard();
// }
displayCard();
