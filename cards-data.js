export const card = {
    name: "Charmander",
    evoLvl: "Basic Pokemon",
    hp: "50",
    type: "fire",
    attributes: `Lizard Pokemon. Length: 2'0", Weight: 19 lbs.`,
    moves: [
        {
            moveName: `Scratch`,
            moveInfo: "",
            moveAction: `none`,
            moveEnergy: ["normal"],
            moveDmg: 10,
        },
        {
            moveName: `Ember`,
            moveInfo: `Discard 1 Energy card attached to Charmander in order to use this attack.`,
            moveAction: `none`,
            moveEnergy: ["fire", "normal"],
            moveDmg: 30,
        },
    ],
    weakness: ["water", "normal"],
    resistance: ["water"],
    retreatCost: ["normal", "normal"],
    description: `Obviously prefers hot places. If it gets caught in the
    rain, steam is said to spout from the tip of its tail.
    LV.10 #4`,
    info: `Blah, blah, blah, blah, blah, blah, blah, blah, blah,
    blah, blah, blah, blah, b`,
    rarity: "common",
};
