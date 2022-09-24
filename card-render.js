import { card } from "./cards-data.js";

const elTemplates = [
    {
        el: "div",
        id: "cardGrid",
        classes: "card-grid boob",
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
        id: "cardMove",
        classes: "card-move",
        parent: `cardMovesList`,
        num: card.moves.length,
    },
    {
        el: "ul",
        id: "cardMoveEnergyList",
        classes: "card-move-energy-list",
        parent: `cardMove`,
        num: card.moves.length,
        loopDepth: 1,
    },
    /* {
        // num: card.moves,
        el: "li",
        id: "cardMoveEnergyListItem",
        classes: "card-move-energy-list-item",
        parent: `cardMoveEnergyList`,
        num: card.moves[0].length + card.moves[1].length,
        loopDepth: 2,
    }, */
    {
        el: "p",
        id: "cardMoveText",
        classes: "card-move-text",
        parent: `cardMove`,
        txtSource: card.moves,
        key: `moveName`,
        num: card.moves.length,
        loopDepth: 1,
    },
    {
        el: "h2",
        id: "cardMoveDmg",
        classes: "card-move-dmg",
        parent: `cardMove`,
        txtSource: card.moves,
        key: "moveDmg",
        num: card.moves.length,
        loopDepth: 1,
    },
    /* 
    {
        num: card.moves[0].moveEnergy.length,
        el: "img",
        id: "cardEnergyIcon2",
        src: `./Assets/Pokemon-Energy-Icons/${card.moves[0].moveEnergy[0]}.webp`,
        alt: `${card.name}`,
        classes: "card-energy-icon energy-med",
        parent: `cardMoveEnergyListItem`,
    }, */
];

export function renderCard() {
    // Create Parent Element
    const cardContainer = document.createElement("article");
    cardContainer.classList.add("card-container");

    // Create Elements
    const cardEls = [];
    for (let elTemplate of elTemplates) {
        let numElements = elTemplate.num || 1;
        // Render list of elements
        for (let i = 0; i < numElements; i++) {
            // Create Element
            const element = document.createElement(elTemplate.el);
            element.src = elTemplate.src || null;
            element.alt = elTemplate.alt || null;
            element.src = elTemplate.src || null;
            element.alt = elTemplate.alt || null;
            element.dataset.parent = elTemplate.parent || null;
            if (numElements > 1) {
                element.id = elTemplate.id + "_" + i || null;
                element.dataset.listNum = i;
                if (elTemplate.txtSource) {
                    element.textContent =
                        elTemplate.txtSource[i][elTemplate.key];
                }
                if (elTemplate.loopDepth) {
                    element.dataset.parent += `_${
                        i % (elTemplate.loopDepth + 1)
                    }`;
                }
            } else {
                element.id = elTemplate.id || null;
                element.textContent = elTemplate.txt || null;
            }
            element.classList.value = elTemplate.classes || null;
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
        console.log(childEl, parentEl);
        if (parentEl !== undefined) parentEl.append(childEl);
    }
    cardContainer.append(cardEls[0]);

    return cardContainer;
}

/* 
export function renderCard(card) {
    const articleCardContainer = document.createElement("article");
    articleCardContainer.classList.add("card-container");

    const divCardGrid = document.createElement("div");
    divCardGrid.classList.add("card-grid");
    articleCardContainer.append(divCardGrid);

    const divCardTop = document.createElement("div");
    divCardTop.classList.add("card-top");
    divCardGrid.append(divCardTop);

    const h1CardName = document.createElement("h1");
    h1CardName.classList.add("card-pokemon-name");
    h1CardName.textContent = card.name;

    const h3CardEvoLvl = document.createElement("h3");
    h3CardEvoLvl.classList.add("card-evolution-level");
    h3CardEvoLvl.textContent = card.evoLvl;

    const h2CardHP = document.createElement("h2");
    h2CardHP.classList.add("card-HP");
    h2CardHP.textContent = card.hp;

    const imgCardType = document.createElement("img");
    imgCardType.src = `./Assets/Pokemon-Energy-Icons/${card.type}.webp`;
    imgCardType.alt = `${card.type} energy`;
    imgCardType.classList.add("card-energy-icon", "card-type");
    divCardTop.append(h3CardEvoLvl, h1CardName, h2CardHP, imgCardType);

    const divCardPhotoSection = document.createElement("div");
    divCardPhotoSection.classList.add("card-photo-section");
    divCardGrid.append(divCardPhotoSection);

    const imgCardPhoto = document.createElement("img");
    imgCardPhoto.src = `./Assets/Pokemon-Pics/${card.name}.png`;
    imgCardPhoto.alt = `${card.name}`;
    imgCardPhoto.classList.add("card-photo");
    divCardPhotoSection.append(imgCardPhoto);

    const divCardAttributesSection = document.createElement("div");
    divCardAttributesSection.classList.add("card-attributes-section");
    divCardGrid.append(divCardAttributesSection);

    const pCardPokemonAttributes = document.createElement("p");
    pCardPokemonAttributes.classList.add("card-pokemon-attributes");
    pCardPokemonAttributes.textContent = card.attributes;
    divCardAttributesSection.append(pCardPokemonAttributes);

    const divCardMovesContainer = document.createElement("div");
    divCardMovesContainer.classList.add("card-moves-container");
    divCardGrid.append(divCardMovesContainer);

    const ulCardMovesList = document.createElement("ul");
    ulCardMovesList.classList.add("card-moves-list");
    divCardMovesContainer.append(ulCardMovesList);

    for (let i = 0; i < card.moves.length; i++) {
        const liCardMove = document.createElement("li");
        liCardMove.classList.add("card-move");
        ulCardMovesList.append(liCardMove);

        const pCardMoveText = document.createElement("p");
        pCardMoveText.classList.add("card-move-text");
        pCardMoveText.textContent = card.moves[i].moveInfo;
        liCardMove.append(pCardMoveText);

        const spanCardMoveTitle = document.createElement("span");
        spanCardMoveTitle.classList.add("card-move-title");
        spanCardMoveTitle.textContent = card.moves[i].moveName;
        pCardMoveText.prepend(spanCardMoveTitle);

        const h2CardMoveDmg = document.createElement("h2");
        h2CardMoveDmg.classList.add("card-move-dmg");
        h2CardMoveDmg.textContent = card.moves[i].moveDmg;
        liCardMove.append(h2CardMoveDmg);

        const ulCardMoveEnergyList = document.createElement("ul");
        ulCardMoveEnergyList.classList.add("card-move-energy-list");
        liCardMove.append(ulCardMoveEnergyList);

        for (let j = 0; j < card.moves[i].moveEnergy.length; j++) {
            const liCardMoveEnergyListItem = document.createElement("li");
            liCardMoveEnergyListItem.classList.add(
                "card-move-energy-list-item"
            );
            ulCardMoveEnergyList.append(liCardMoveEnergyListItem);

            const imgCardMoveEnergyIcon = document.createElement("img");
            imgCardMoveEnergyIcon.src = `./Assets/Pokemon-Energy-Icons/${card.moves[i].moveEnergy[j]}.webp`;
            imgCardMoveEnergyIcon.alt = `${card.moves[i].moveEnergy[i]} energy`;
            imgCardMoveEnergyIcon.classList.add(
                "card-energy-icon",
                "energy-med"
            );
            liCardMoveEnergyListItem.append(imgCardMoveEnergyIcon);
        }
    }

    const divCardEffectivenessSection = document.createElement("div");
    divCardEffectivenessSection.classList.add("card-effectiveness-section");
    divCardGrid.append(divCardEffectivenessSection);

    const pCardWeakness = document.createElement("p");
    pCardWeakness.classList.add("card-weakness");
    pCardWeakness.textContent = "weakness";
    divCardEffectivenessSection.append(pCardWeakness);

    const ulCardWeaknessEnergyList = document.createElement("ul");
    ulCardWeaknessEnergyList.classList.add("card-effectiveness-energy-list");
    divCardEffectivenessSection.append(ulCardWeaknessEnergyList);

    for (let i = 0; i < card.weakness.length; i++) {
        const liCardWeaknessListItem = document.createElement("li");
        liCardWeaknessListItem.classList.add(
            "card-effectiveness-energy-list-item"
        );
        ulCardWeaknessEnergyList.append(liCardWeaknessListItem);

        const imgCardWeaknessEnergyIcon = document.createElement("img");
        imgCardWeaknessEnergyIcon.src = `./Assets/Pokemon-Energy-Icons/${card.weakness[i]}.webp`;
        imgCardWeaknessEnergyIcon.alt = `${card.weakness[i]} energy`;
        imgCardWeaknessEnergyIcon.classList.add(
            "card-energy-icon",
            "energy-med"
        );
        liCardWeaknessListItem.append(imgCardWeaknessEnergyIcon);
    }

    const pCardResistance = document.createElement("p");
    pCardResistance.classList.add("card-resistance");
    pCardResistance.textContent = "resistance";
    divCardEffectivenessSection.append(pCardResistance);

    const ulCardResistanceEnergyList = document.createElement("ul");
    ulCardResistanceEnergyList.classList.add("card-effectiveness-energy-list");
    divCardEffectivenessSection.append(ulCardResistanceEnergyList);

    for (let i = 0; i < card.resistance.length; i++) {
        const liCardResistanceListItem = document.createElement("li");
        liCardResistanceListItem.classList.add(
            "card-effectiveness-energy-list-item"
        );
        ulCardResistanceEnergyList.append(liCardResistanceListItem);

        const imgCardResistanceEnergyIcon = document.createElement("img");
        imgCardResistanceEnergyIcon.src = `./Assets/Pokemon-Energy-Icons/${card.resistance[i]}.webp`;
        imgCardResistanceEnergyIcon.alt = `${card.resistance[i]} energy`;
        imgCardResistanceEnergyIcon.classList.add(
            "card-energy-icon",
            "energy-med"
        );
        liCardResistanceListItem.append(imgCardResistanceEnergyIcon);
    }

    const pCardRetreatCost = document.createElement("p");
    pCardRetreatCost.classList.add("card-retreat-cost");
    pCardRetreatCost.textContent = "retreat cost";
    divCardEffectivenessSection.append(pCardRetreatCost);

    const ulCardRetreatCostEnergyList = document.createElement("ul");
    ulCardRetreatCostEnergyList.classList.add("card-effectiveness-energy-list");
    divCardEffectivenessSection.append(ulCardRetreatCostEnergyList);

    for (let i = 0; i < card.retreatCost.length; i++) {
        const liCardRetreatCostListItem = document.createElement("li");
        liCardRetreatCostListItem.classList.add(
            "card-effectiveness-energy-list-item"
        );
        ulCardRetreatCostEnergyList.append(liCardRetreatCostListItem);

        const imgCardRetreatCostEnergyIcon = document.createElement("img");
        imgCardRetreatCostEnergyIcon.src = `./Assets/Pokemon-Energy-Icons/${card.retreatCost[i]}.webp`;
        imgCardRetreatCostEnergyIcon.alt = `${card.retreatCost[i]} energy`;
        imgCardRetreatCostEnergyIcon.classList.add(
            "card-energy-icon",
            "energy-med"
        );
        liCardRetreatCostListItem.append(imgCardRetreatCostEnergyIcon);
    }

    const divCardDescriptionSection = document.createElement("div");
    divCardDescriptionSection.classList.add("card-description-section");
    divCardGrid.append(divCardDescriptionSection);

    const pCardDescription = document.createElement("p");
    pCardDescription.classList.add("card-description");
    pCardDescription.textContent = card.description;
    divCardDescriptionSection.append(pCardDescription);

    const divCardInfoSection = document.createElement("div");
    divCardInfoSection.classList.add("card-Info-section");
    divCardGrid.append(divCardInfoSection);

    const pCardInfo = document.createElement("p");
    pCardInfo.classList.add("card-info");
    pCardInfo.textContent = card.info;
    divCardInfoSection.append(pCardInfo);

    const imgCardRarityIcon = document.createElement("img");
    imgCardRarityIcon.src = `./Assets/Pokemon-Rarity-Icons/${card.rarity}.png`;
    imgCardRarityIcon.alt = card.rarity;
    imgCardRarityIcon.classList.add("card-rarity-icon");
    pCardInfo.append(imgCardRarityIcon);

    return articleCardContainer;
} */
