// import { card } from "./cards-data.js";

function createCardElTemplates(card) {
    const elTemplates = [
        {
            el: "div",
            id: "cardGrid",
            classes: `card-grid ` + card.type,
            parent: `cardContainer`,
        },
        {
            el: "div",
            id: "cardTop",
            classes: "card-top",
            parent: `cardGrid`,
        },
        {
            el: "h3",
            id: "cardEvoLvl",
            classes: "card-evolution-level",
            parent: `cardTop`,
            txt: "Basic Pokémon",
        },
        {
            el: "h1",
            id: "cardName",
            classes: "card-pokemon-name",
            parent: `cardTop`,
            txt: `${card.name}`,
        },
        {
            el: "h2",
            id: "cardHP",
            classes: "card-HP",
            parent: `cardTop`,
            txt: `${card.hp}`,
        },
        {
            el: "img",
            id: "cardEnergyIcon1",
            src: `./Assets/Pokemon-Energy-Icons/${card.type}.webp`,
            alt: `${card.type}-type`,
            classes: "card-energy-icon card-type",
            parent: `cardTop`,
        },
        {
            el: "div",
            id: "cardPhotoSection",
            classes: "card-photo-section",
            parent: `cardGrid`,
        },
        {
            el: "img",
            id: "cardEnergyIcon1",
            src: `./Assets/Pokemon-Pics/${card.name}.png`,
            alt: `${card.name}`,
            classes: "card-photo",
            parent: `cardPhotoSection`,
        },
        {
            el: "div",
            id: "cardAttributesSection",
            classes: "card-attributes-section",
            parent: `cardGrid`,
        },
        {
            el: "p",
            id: "cardPokemonAttributes",
            classes: "card-pokemon-attributes",
            parent: `cardAttributesSection`,
            txt: card.attributes,
        },
        {
            el: "div",
            id: "cardMovesContainer",
            classes: "card-moves-container",
            parent: `cardGrid`,
        },
        {
            el: "ul",
            id: "cardMovesList",
            classes: "card-moves-list",
            parent: `cardMovesContainer`,
        },
        {
            el: "li",
            id: "cardMove_1",
            classes: "card-move",
            parent: `cardMovesList`,
        },
        {
            el: "ul",
            id: "cardMoveEnergyList_1",
            classes: "card-move-energy-list",
            parent: `cardMove_1`,
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_1",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_1`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_1",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[0].moveEnergy[0]}.webp`,
            alt: `${card.moves[0].moveEnergy[0]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyList_1`,
            exists: card.moves[0].moveEnergy[0],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_2",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_1`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_2",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[0].moveEnergy[1]}.webp`,
            alt: `${card.moves[0].moveEnergy[1]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_2`,
            exists: card.moves[0].moveEnergy[1],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_3",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_1`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_3",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[0].moveEnergy[2]}.webp`,
            alt: `${card.moves[0].moveEnergy[2]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_3`,
            exists: card.moves[0].moveEnergy[2],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_4",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_1`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_4",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[0].moveEnergy[3]}.webp`,
            alt: `${card.moves[0].moveEnergy[3]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_4`,
            exists: card.moves[0].moveEnergy[3],
        },
        {
            el: "p",
            id: "cardMoveText_1",
            classes: "card-move-text",
            parent: `cardMove_1`,
            txt: card.moves[0].moveInfo,
        },
        {
            el: "span",
            id: "cardMoveTitle",
            classes: "card-move-title",
            parent: `cardMoveText_1`,
            txt: card.moves[0].moveName,
            prepend: true,
        },
        {
            el: "h2",
            id: "cardMoveDmg_1",
            classes: "card-move-dmg",
            parent: `cardMove_1`,
            txt: card.moves[0].moveDmg,
        },
        {
            el: "li",
            id: "cardMove_2",
            classes: "card-move",
            parent: `cardMovesList`,
        },
        {
            el: "ul",
            id: "cardMoveEnergyList_2",
            classes: "card-move-energy-list",
            parent: `cardMove_2`,
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_5",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_2`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_5",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[1].moveEnergy[0]}.webp`,
            alt: `${card.moves[1].moveEnergy[0]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_5`,
            exists: card.moves[1].moveEnergy[0],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_6",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_2`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_6",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[1].moveEnergy[1]}.webp`,
            alt: `${card.moves[1].moveEnergy[1]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_6`,
            exists: card.moves[1].moveEnergy[1],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_7",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_2`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_7",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[1].moveEnergy[2]}.webp`,
            alt: `${card.moves[1].moveEnergy[2]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_7`,
            exists: card.moves[1].moveEnergy[2],
        },
        {
            el: "li",
            id: "cardMoveEnergyListItem_8",
            classes: "card-move-energy-list-item",
            parent: `cardMoveEnergyList_2`,
        },
        {
            el: "img",
            id: "cardMoveEnergyIcon_8",
            src: `./Assets/Pokemon-Energy-Icons/${card.moves[1].moveEnergy[3]}.webp`,
            alt: `${card.moves[1].moveEnergy[3]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardMoveEnergyListItem_8`,
            exists: card.moves[1].moveEnergy[3],
        },
        {
            el: "p",
            id: "cardMoveText_2",
            classes: "card-move-text",
            parent: `cardMove_2`,
            txt: card.moves[1].moveInfo,
        },
        {
            el: "span",
            id: "cardMoveTitle",
            classes: "card-move-title",
            parent: `cardMoveText_2`,
            txt: card.moves[1].moveName,
            prepend: true,
        },
        {
            el: "h2",
            id: "cardMoveDmg_2",
            classes: "card-move-dmg",
            parent: `cardMove_2`,
            txt: card.moves[1].moveDmg,
        },
        {
            el: "div",
            id: "cardEffectivenessSection",
            classes: "card-effectiveness-section",
            parent: `cardGrid`,
        },
        {
            el: "p",
            id: "cardWeakness",
            classes: "card-weakness",
            parent: `cardEffectivenessSection`,
            txt: "Weakness",
        },
        {
            el: "ul",
            id: "cardWeaknessEnergyList",
            classes: "card-effectiveness-energy-list",
            parent: `cardEffectivenessSection`,
        },
        {
            el: "li",
            id: "cardWeaknessEnergyListItem_1",
            class: "card-effectiveness-energy-list-item",
            parent: "cardWeaknessEnergyList",
        },
        {
            el: "img",
            id: "cardWeaknessEnergyIcon_1",
            src: `./Assets/Pokemon-Energy-Icons/${card.weakness[0]}.webp`,
            alt: `${card.weakness[0]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardWeaknessEnergyListItem_1`,
            exists: card.weakness[0],
        },
        {
            el: "li",
            id: "cardWeaknessEnergyListItem_2",
            class: "card-effectiveness-energy-list-item",
            parent: "cardWeaknessEnergyList",
        },
        {
            el: "img",
            id: "cardWeaknessEnergyIcon_2",
            src: `./Assets/Pokemon-Energy-Icons/${card.weakness[1]}.webp`,
            alt: `${card.weakness[1]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardWeaknessEnergyListItem_2`,
            exists: card.weakness[1],
        },
        {
            el: "li",
            id: "cardWeaknessEnergyListItem_3",
            class: "card-effectiveness-energy-list-item",
            parent: "cardWeaknessEnergyList",
        },
        {
            el: "img",
            id: "cardWeaknessEnergyIcon_3",
            src: `./Assets/Pokemon-Energy-Icons/${card.weakness[2]}.webp`,
            alt: `${card.weakness[2]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardWeaknessEnergyListItem_3`,
            exists: card.weakness[2],
        },
        {
            el: "p",
            id: "cardResistance",
            classes: "card-resistance",
            parent: `cardEffectivenessSection`,
            txt: "Resistance",
        },
        {
            el: "ul",
            id: "cardResistanceEnergyList",
            classes: "card-effectiveness-energy-list",
            parent: `cardEffectivenessSection`,
        },
        {
            el: "li",
            id: "cardResistanceEnergyListItem_1",
            class: "card-effectiveness-energy-list-item",
            parent: "cardResistanceEnergyList",
        },
        {
            el: "img",
            id: "cardResistanceEnergyIcon_1",
            src: `./Assets/Pokemon-Energy-Icons/${card.resistance[0]}.webp`,
            alt: `${card.resistance[0]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardResistanceEnergyListItem_1`,
            exists: card.resistance[0],
        },
        {
            el: "li",
            id: "cardResistanceEnergyListItem_2",
            class: "card-effectiveness-energy-list-item",
            parent: "cardResistanceEnergyList",
        },
        {
            el: "img",
            id: "cardResistanceEnergyIcon_2",
            src: `./Assets/Pokemon-Energy-Icons/${card.resistance[1]}.webp`,
            alt: `${card.resistance[1]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardResistanceEnergyListItem_2`,
            exists: card.resistance[1],
        },
        {
            el: "li",
            id: "cardResistanceEnergyListItem_3",
            class: "card-effectiveness-energy-list-item",
            parent: "cardResistanceEnergyList",
        },
        {
            el: "img",
            id: "cardResistanceEnergyIcon_3",
            src: `./Assets/Pokemon-Energy-Icons/${card.resistance[2]}.webp`,
            alt: `${card.resistance[2]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardResistanceEnergyListItem_3`,
            exists: card.resistance[2],
        },
        {
            el: "p",
            id: "cardRetreatCost",
            classes: "card-retreat-cost",
            parent: `cardEffectivenessSection`,
            txt: "Retreat Cost",
        },
        {
            el: "ul",
            id: "cardRetreatCostEnergyList",
            classes: "card-effectiveness-energy-list",
            parent: `cardEffectivenessSection`,
        },
        {
            el: "li",
            id: "cardRetreatCostEnergyListItem_1",
            class: "card-effectiveness-energy-list-item",
            parent: "cardRetreatCostEnergyList",
        },
        {
            el: "img",
            id: "cardRetreatCostEnergyIcon_1",
            src: `./Assets/Pokemon-Energy-Icons/${card.retreatCost[0]}.webp`,
            alt: `${card.retreatCost[0]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardRetreatCostEnergyListItem_1`,
            exists: card.retreatCost[0],
        },
        {
            el: "li",
            id: "cardRetreatCostEnergyListItem_2",
            class: "card-effectiveness-energy-list-item",
            parent: "cardRetreatCostEnergyList",
        },
        {
            el: "img",
            id: "cardRetreatCostEnergyIcon_2",
            src: `./Assets/Pokemon-Energy-Icons/${card.retreatCost[1]}.webp`,
            alt: `${card.retreatCost[1]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardRetreatCostEnergyListItem_2`,
            exists: card.retreatCost[1],
        },
        {
            el: "li",
            id: "cardRetreatCostEnergyListItem_3",
            class: "card-effectiveness-energy-list-item",
            parent: "cardRetreatCostEnergyList",
        },
        {
            el: "img",
            id: "cardRetreatCostEnergyIcon_3",
            src: `./Assets/Pokemon-Energy-Icons/${card.retreatCost[2]}.webp`,
            alt: `${card.retreatCost[2]} Energy`,
            classes: "card-energy-icon energy-med",
            parent: `cardRetreatCostEnergyListItem_3`,
            exists: card.retreatCost[2],
        },
        {
            el: "div",
            id: "cardDescriptionSection",
            class: "card-description-section",
            parent: "cardGrid",
        },
        {
            el: "p",
            id: "cardDescription",
            classes: "card-description",
            parent: `cardDescriptionSection`,
            txt: card.description,
        },
        {
            el: "div",
            id: "cardInfoSection",
            class: "card-info-section",
            parent: "cardGrid",
        },
        {
            el: "p",
            id: "cardInfo",
            classes: "card-info",
            parent: `cardInfoSection`,
            txt: card.info,
        },
        {
            el: "img",
            id: "cardRarityIcon",
            src: `./Assets/Pokemon-Rarity-Icons/${card.rarity}.png`,
            alt: `${card.rarity} Pokemon`,
            classes: "card-rarity-icon",
            parent: `cardInfo`,
            exists: card.rarity,
        },
    ];
    return elTemplates;
}

export function renderCard(card) {
    // Create Template Element Objects
    const elTemplates = createCardElTemplates(card);

    // Create Parent Element
    const cardContainer = document.createElement("article");
    cardContainer.classList.value = `card-container`;
    cardContainer.id = `cardContainer_${card.name}`;

    // Create Elements
    const cardEls = [];
    for (let elTemplate of elTemplates) {
        if (!("exists" in elTemplate) || elTemplate.exists) {
            const element = document.createElement(elTemplate.el);
            element.id = `${elTemplate.id}_${card.name}`;
            element.classList.value = elTemplate.classes || null;
            element.textContent = elTemplate.txt || null;
            element.src = elTemplate.src || null;
            element.alt = elTemplate.alt || null;
            element.dataset.parent =
                `${elTemplate.parent}_${card.name}` || null;
            element.dataset.prepend = elTemplate.prepend || null;
            cardEls.push(element);
        }
    }

    // Append children to parents
    for (let childEl of cardEls) {
        // Find Parent Element
        const parentEl = cardEls.find(
            (item) => item.id === childEl.dataset.parent
        );

        // Append Child Element
        if (parentEl !== undefined) {
            if (childEl.dataset.prepend === "true") {
                parentEl.prepend(childEl);
            } else {
                parentEl.append(childEl);
            }
        }
    }
    cardContainer.append(cardEls[0]);

    return cardContainer;
}
