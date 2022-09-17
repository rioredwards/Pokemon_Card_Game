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

    const divCardPokemonAttributes = document.createElement("div");
    divCardPokemonAttributes.classList.add("card-pokemon-attributes");
    divCardPokemonAttributes.textContent = card.attributes;
    divCardAttributesSection.append(divCardPokemonAttributes);

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

        // for (let moveEnergy in move)
    }
    return articleCardContainer;
}
