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

    return articleCardContainer;
}
