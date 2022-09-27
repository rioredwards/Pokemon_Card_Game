const charmander = {
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
            moveEnergy: [`normal`],
            moveDmg: 10,
        },
        {
            moveName: `Ember`,
            moveInfo: `Discard 1 Energy card attached to Charmander in order to use this attack.`,
            moveAction: `discard_energy`,
            moveEnergy: ["fire", "normal"],
            moveDmg: 30,
        },
    ],
    weakness: ["water"],
    resistance: [],
    retreatCost: ["normal"],
    description: `Obviously prefers hot places. If it gets caught in the
    rain, steam is said to spout from the tip of its tail.
    LV.10 #4`,
    info: `Blah, blah, blah, blah, blah, blah, blah, blah, blah,
    blah, blah, blah, blah, b`,
    rarity: "common",
};

const squirtle = {
    name: "Squirtle",
    evoLvl: "Basic Pokemon",
    hp: "50",
    type: "water",
    attributes: `Tiny Turtle Pokemon. Length: 1'8", Weight: 30 lbs.`,
    moves: [
        {
            moveName: `Bubble`,
            moveInfo:
                "Flip a coin. If heads, the defending pokemon is now paralyzed.",
            moveAction: `flip_paralyze`,
            moveEnergy: [`water`],
            moveDmg: 10,
        },
        {
            moveName: `Withdraw`,
            moveInfo: `Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)`,
            moveAction: `none`,
            moveEnergy: ["water", "normal"],
            moveDmg: 0,
        },
    ],
    weakness: ["lightning"],
    resistance: [],
    retreatCost: ["normal"],
    description: `After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.  LV.8 #7`,
    info: `Blah, blah, blah, blah, blah, blah, blah, blah, blah,
    blah, blah, blah, blah, b`,
    rarity: "common",
};

export const cards = [charmander, squirtle];
