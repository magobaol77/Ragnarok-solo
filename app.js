const TAGS = ["Animal", "Artefact", "Destiny", "Equipment", "Glory", "Warrior"];
const TYPES = ["Giant", "Beast", "Undead", "Elite"];
const HIGH_SCORES_KEY = "ragnarok-solo-completed-games-v1";

const heimdallDeck = [
  card("veille", "Eternal Vigil", "Event", "Glory", 3, "1 x Giant", "Gain 1 Viking.", { gainFlat: 1 }, { perMonster: "Giant", value: 1 }),
  card("rig", "Rig", "Character", "Warrior", 2, "4 x Equipment", "Gain Vikings equal to your majority icon count.", { gainMajority: true }, { perTag: "Equipment", value: 4 }),
  card("dents", "Golden Teeth", "Item", "Artefact", 1, "1 x Undead", "Gain 1 Viking per Undead Monster.", { gainMonster: "Undead" }, { perMonster: "Undead", value: 1 }),
  card("yeux", "Piercing Eyes", "Event", "Glory", 1, "1 x different icons", "You may fight any visible Monster.", { fightAny: true }, { uniqueTags: 1 }),
  card("combat", "Fight to the Death", "Event", null, 2, "2 x Elite", "Gain 3 Vikings minus Elite icons among Monsters.", { gainFlat: 3, losePerMonster: "Elite" }, { perMonster: "Elite", value: 2 }),
  card("meres", "The Nine Mothers", "Character", "Destiny", 5, "9 VP", "Gain 1 Viking per Event in Valhalla.", { gainCardType: "Event" }, { fixed: 9 }),
  card("bifrost", "Bifrost", "Item", null, 0, "1 x Event", "Gain 1 Viking, then 1 Viking per Glory.", { gainFlat: 1, gainTag: "Glory" }, { perCardType: "Event", value: 1 }),
  card("evel", "Ragnarok's Awakening", "Event", "Glory", 3, "4 VP", "Gain 1 Viking per different square icon.", { gainUniqueTags: true }, { fixed: 4 }),
  card("epee", "Resonating Sword", "Item", "Equipment", 3, "1 x Beast", "Gain 1 Viking.", { gainFlat: 1 }, { perMonster: "Beast", value: 1 }),
  card("gulltopp", "Gulltopp", "Character", "Animal", 1, "2 VP", "Undead costs -1 this turn.", { discountTypes: ["Undead"] }, { fixed: 2 }),
  card("gjall", "Gjallarhorn", "Item", "Equipment", 2, "3 x Glory", "No immediate effect.", {}, { perTag: "Glory", value: 3 }),
  card("gardien", "Guardian of the Worlds", "Event", null, 4, "3 x Worlds", "Gain 1 Viking, then 1 Viking per Character in Valhalla.", { gainFlat: 1, gainCardType: "Character" }, { perWorld: 3 }),
  card("heimdall", "Heimdall", "God", null, 0, "2 x different square icons", "God card: gain 1 Viking and all square icons cost -1 this round.", { god: true, allTagDiscount: true, gainFlat: 1 }, { uniqueTags: 2 }),
];

const tyrDeck = [
  card("tyr-pact", "Pact of Binding", "Event", "Destiny", 4, "2 x Event", "Gain 1 Viking per different Monster type.", { gainUniqueMonsterTypes: true }, { perCardType: "Event", value: 2 }),
  card("tyr-gleipnir", "Gleipnir", "Item", "Artefact", 2, "1 x Beast", "Fight 1 additional Beast.", { restrictedExtraFight: "Beast" }, { perMonster: "Beast", value: 1 }),
  card("tyr-hand", "Severed Hand", "Event", "Destiny", 2, "5 VP", "Gain 1 Viking, then 1 Viking per Equipment icon.", { gainFlat: 1, gainTag: "Equipment" }, { fixed: 5 }),
  card("tyr-sword", "Sword of Tyr", "Item", "Equipment", 1, "1 x Giant", "Gain 1 Viking.", { gainFlat: 1 }, { perMonster: "Giant", value: 1 }),
  card("tyr-death", "Fight to the Death", "Event", null, 2, "1 x Undead", "No immediate effect.", {}, { perMonster: "Undead", value: 1 }),
  card("tyr-stone", "Oath Stone", "Item", "Artefact", 2, "2 x Artefact", "Gain 1 Viking per Destiny icon.", { gainTag: "Destiny" }, { perTag: "Artefact", value: 2 }),
  card("tyr-duel", "Loyal Duel", "Event", null, 1, "1 x majority Monster type", "Gain 1 Viking.", { gainFlat: 1 }, { maxMonsterType: 1 }),
  card("tyr-armour", "Armour of Tyr", "Item", "Equipment", 3, "2 x Worlds", "Gain 1 Viking, then 1 Viking per Destiny icon.", { gainFlat: 1, gainTag: "Destiny" }, { perWorld: 2 }),
  card("tyr-thing", "Assembly of the Thing", "Event", "Destiny", 1, "", "No immediate effect.", {}, {}),
  card("tyr-hermod", "Hermod", "Character", null, 2, "3 x Destiny", "Gain 1 Viking per Item card in Valhalla.", { gainCardType: "Item" }, { perTag: "Destiny", value: 3 }),
  card("tyr-oath", "Oath of Tyr", "Event", "Destiny", 3, "3 VP", "Gain 3 Vikings minus Artefact icons.", { gainFlat: 3, losePerTag: "Artefact" }, { fixed: 3 }),
  card("tyr-vidar", "Vidar", "Character", null, 3, "2 x majority Monster type", "Gain 1 Viking per different Monster type.", { gainUniqueMonsterTypes: true }, { maxMonsterType: 2 }),
  card("tyr", "Tyr", "God", null, 0, "2 x majority Monster type", "God card: gain 1 Viking and activate Tyr's combat power this round.", { god: true, tyrPower: true, gainFlat: 1 }, { maxMonsterType: 2 }),
];

const friggDeck = [
  card("frigg-weaving", "Weaving the Future", "Event", "Destiny", 1, "", "Each time you banish a card, gain 1 additional Viking.", {}, {}),
  card("frigg-belt", "Hlin's Belt", "Item", "Artefact", 0, "1 x majority card type", "You may fight any visible Monster.", { fightAny: true }, { maxCardType: 1 }),
  card("frigg-hlin", "Hlin", "Character", null, 2, "4 x Artefact", "Gain 1 Viking, then 1 Viking per Artefact icon.", { gainFlat: 1, gainTag: "Artefact" }, { perTag: "Artefact", value: 4 }),
  card("frigg-prophecy", "Prophecy", "Event", "Destiny", 2, "3 VP", "Gain 1 Viking.", { gainFlat: 1 }, { fixed: 3 }),
  card("frigg-council", "Council of Queens", "Event", null, 3, "3 x Item", "Gain 1 Viking per Event in Valhalla.", { gainCardType: "Event" }, { perCardType: "Item", value: 3 }),
  card("frigg-blessing", "Blessing", "Event", null, 4, "3 x majority card type", "Gain Vikings equal to your majority card-type count.", { gainCardMajority: true }, { maxCardType: 3 }),
  card("frigg-veil", "Veil of Destiny", "Item", "Destiny", 4, "3 x Character", "Gain 1 Viking per Item card in Valhalla.", { gainCardType: "Item" }, { perCardType: "Character", value: 3 }),
  card("frigg-fulla", "Fulla", "Character", null, 0, "", "Each time you banish a card, gain 1 additional Viking.", {}, {}),
  card("frigg-gna", "Gna", "Character", null, 3, "3 x Event", "Gain 1 Viking per Character card in Valhalla.", { gainCardType: "Character" }, { perCardType: "Event", value: 3 }),
  card("frigg-ring", "Odin's Ring", "Item", "Artefact", 4, "3 x Destiny", "Gain 1 Viking, then 1 Viking per Destiny icon.", { gainFlat: 1, gainTag: "Destiny" }, { perTag: "Destiny", value: 3 }),
  card("frigg-key", "Palace Key", "Item", "Artefact", 2, "", "Gain 1 Viking.", { gainFlat: 1 }, {}),
  card("frigg-eir", "Eir", "Character", "Destiny", 2, "4 VP", "Gain 1 Viking, then 2 Vikings per complete Character, Item, and Event set.", { gainFlat: 1, gainMixedSet: ["Character", "Item", "Event"], value: 2 }, { fixed: 4 }),
  card("frigg", "Frigg", "God", null, 0, "4 x majority card type", "God card: gain 2 Vikings or play 1 banished card in Valhalla for free.", { god: true, friggChoice: true }, { maxCardType: 4 }),
];

const thorDeck = [
  card("thor-magni", "Magni & Modi", "Character", "Warrior", 2, "2 x Undead", "Discount 1 on Undead.", { discountTypes: ["Undead"] }, { perMonster: "Undead", value: 2 }),
  card("thor-lightning", "Lightning", "Event", null, 3, "2 x Monster set", "Discount 1 on Beasts, Undead, and Giants.", { discountTypes: ["Beast", "Undead", "Giant"] }, { monsterSets: 2 }),
  card("thor-tanngnjostr", "Tanngnjostr", "Character", "Animal", 1, "1 x Giant", "Gain 1 Viking per Giant. Discount 1 on Giants.", { discountTypes: ["Giant"], gainMonster: "Giant" }, { perMonster: "Giant", value: 1 }),
  card("thor-belt", "Megingjord", "Item", "Equipment", 2, "3 x Warrior", "Gain 1 Viking.", { gainFlat: 1 }, { perTag: "Warrior", value: 3 }),
  card("thor-thrud", "Thrud", "Character", null, 4, "4 x Equipment", "Gain 3 Vikings minus Equipment icons.", { gainFlat: 3, losePerTag: "Equipment" }, { perTag: "Equipment", value: 4 }),
  card("thor-char", "Char", "Item", null, 4, "6 VP", "You may fight any visible Monster. Gain 1 Viking, then 1 Viking per Warrior icon.", { fightAny: true, gainFlat: 1, gainTag: "Warrior" }, { fixed: 6 }),
  card("thor-tanngrisnir", "Tanngrisnir", "Character", "Animal", 1, "1 x Beast", "Gain 1 Viking per Beast. Discount 1 on Beasts.", { discountTypes: ["Beast"], gainMonster: "Beast" }, { perMonster: "Beast", value: 1 }),
  card("thor-mjolnir", "Mjolnir", "Item", "Equipment", 3, "2 x Elite", "Gain 1 Viking, then 1 Viking per different Monster type.", { gainFlat: 1, gainUniqueMonsterTypes: true }, { perMonster: "Elite", value: 2 }),
  card("thor-sif", "Sif", "Character", null, 3, "3 VP", "Fight 1 additional Monster. Gain 1 Viking, then 1 Viking per Equipment icon.", { extraFight: 1, gainFlat: 1, gainTag: "Equipment" }, { fixed: 3 }),
  card("thor-goats", "Resurrection of the Goats", "Event", null, 0, "2 x Animal", "Gain 1 Viking, then 1 Viking per Animal icon.", { gainFlat: 1, gainTag: "Animal" }, { perTag: "Animal", value: 2 }),
  card("thor-death", "Fight to the Death", "Event", "Warrior", 0, "1 x Elite", "Gain 1 Viking.", { gainFlat: 1 }, { perMonster: "Elite", value: 1 }),
  card("thor-gloves", "Jarngreipr", "Item", "Equipment", 2, "", "Gain 1 Viking per Elite. Discount 1 on Elite Monsters.", { discountTypes: ["Elite"], gainMonster: "Elite" }, {}),
  card("thor", "Thor", "God", null, 0, "3 x Elite", "God card: gain 2 Vikings and activate Thor's power this round.", { god: true, gainFlat: 2, thorPower: true }, { perMonster: "Elite", value: 3 }),
];

const odinDeck = [
  card("odin-helmet", "Odin's Helmet", "Item", null, 0, "", "Discount 1 on Event cards.", { discountCardTypes: ["Event"] }, {}),
  card("odin-voyage", "Journey through the Nine Worlds", "Event", null, 4, "4 x Glory", "Fight 1 additional Monster. Gain 2 Vikings minus Worlds.", { extraFight: 1, gainFlat: 2, losePerWorld: true }, { perTag: "Glory", value: 4 }),
  card("odin-gungnir", "Gungnir", "Item", "Artefact", 1, "1 x Giant", "Discount 1 on Giants. Gain 1 Viking per Animal icon.", { discountTypes: ["Giant"], gainTag: "Animal" }, { perMonster: "Giant", value: 1 }),
  card("odin-sleipnir", "Sleipnir", "Character", "Animal", 2, "2 x Artefact", "Discount 1 on Glory icons. Gain 3 Vikings minus Artefact icons.", { discountTypes: ["Glory"], gainFlat: 3, losePerTag: "Artefact" }, { perTag: "Artefact", value: 2 }),
  card("odin-runes", "Wisdom of the Runes", "Event", null, 1, "3 VP", "Discount 1 on Elite Monsters. Gain Vikings equal to your majority icon count.", { discountTypes: ["Elite"], gainMajority: true }, { fixed: 3 }),
  card("odin-draupnir", "Draupnir", "Item", "Artefact", 2, "", "Discount 1 on Beasts and Undead. Gain 1 Viking, then 1 Viking per World.", { discountTypes: ["Beast", "Undead"], gainFlat: 1, gainWorlds: true }, {}),
  card("odin-heidrun", "Heidrun", "Character", "Animal", 5, "3 x Animal", "Discount 1 on Artefact icons. Gain 1 Viking, then 1 Viking per Animal icon.", { discountTypes: ["Artefact"], gainFlat: 1, gainTag: "Animal" }, { perTag: "Animal", value: 3 }),
  card("odin-wolves", "Geri & Freki", "Character", "Animal", 2, "2 x Beast", "Discount 1 on Beasts.", { discountTypes: ["Beast"] }, { perMonster: "Beast", value: 2 }),
  card("odin-death", "Fight to the Death", "Event", "Glory", 1, "2 VP", "Discount 1 on Giants. Gain 1 Viking.", { discountTypes: ["Giant"], gainFlat: 1 }, { fixed: 2 }),
  card("odin-throne", "Hlidskjalf Throne", "Item", "Glory", 4, "2 x Event", "Discount 1 on Animal icons. Gain 1 Viking per Character card.", { discountTypes: ["Animal"], gainCardType: "Character" }, { perCardType: "Event", value: 2 }),
  card("odin-ravens", "Hugin & Munin", "Character", "Animal", 2, "5 VP", "Discount 1 on Undead. Gain 1 Viking.", { discountTypes: ["Undead"], gainFlat: 1 }, { fixed: 5 }),
  card("odin-mimir", "Mimir's Well", "Event", null, 3, "2 x Worlds", "Discount 1 on Worlds. Gain 1 Viking, then 1 Viking per Artefact icon.", { worldDiscount: 1, gainFlat: 1, gainTag: "Artefact" }, { perWorld: 2 }),
  card("odin", "Odin", "God", null, 0, "4 x Worlds", "God card: gain 1 Viking and draw and play 1 additional card this turn.", { god: true, gainFlat: 1, odinPower: true }, { perWorld: 4 }),
];

const freyaDeck = [
  card("freya-song", "Song of the Valkyries", "Event", null, 3, "3 x Warrior", "Gain 1 Viking per Warrior icon.", { gainTag: "Warrior" }, { perTag: "Warrior", value: 3 }),
  card("freya-hildr", "Hildr", "Character", "Warrior", 2, "2 x Monster set", "Discount 1 on Event cards.", { discountCardTypes: ["Event"] }, { monsterSets: 2 }),
  card("freya-cat-a", "Cat", "Character", "Animal", 1, "", "Discount 1 on Character, Item, and Event cards.", { discountCardTypes: ["Character", "Item", "Event"] }, {}),
  card("freya-char", "Char", "Item", null, 2, "4 x Glory", "Gain 1 Viking, then 1 Viking per Animal icon.", { gainFlat: 1, gainTag: "Animal" }, { perTag: "Glory", value: 4 }),
  card("freya-cat-b", "Cat", "Character", "Animal", 0, "1 x Beast", "Gain Vikings equal to your majority icon count.", { gainMajority: true }, { perMonster: "Beast", value: 1 }),
  card("freya-gunnr", "Gunnr", "Character", "Warrior", 2, "", "Discount 1 on Beasts and Undead.", { discountTypes: ["Beast", "Undead"] }, {}),
  card("freya-seal", "Sessrumnir Seal", "Item", null, 1, "3 VP", "Gain 1 Viking per Character card.", { discountCardTypes: ["Character"], gainCardType: "Character" }, { fixed: 3 }),
  card("freya-tears", "Golden Tears", "Event", null, 4, "3 x Monster set", "Discount 1 on Giants.", { discountTypes: ["Giant"] }, { monsterSets: 3 }),
  card("freya-brynhildr", "Brynhildr", "Character", "Warrior", 4, "4 VP", "Gain 2 Vikings per Event card. Discount 1 on Giants and Beasts.", { discountTypes: ["Giant", "Beast"], gainCardType: "Event", gainMultiplier: 2 }, { fixed: 4 }),
  card("freya-skuld", "Skuld", "Character", "Warrior", 3, "2 VP", "Gain 1 Viking per Animal icon. Discount 1 on Giants and Undead.", { discountTypes: ["Giant", "Undead"], gainTag: "Animal" }, { fixed: 2 }),
  card("freya-cloak", "Fjadrhamr", "Item", null, 3, "2 x Character", "Discount 1 on Beasts.", { discountTypes: ["Beast"] }, { perCardType: "Character", value: 2 }),
  card("freya-necklace", "Brisingamen", "Item", null, 0, "1 x Giant", "Gain 2 Vikings minus Item cards.", { gainFlat: 2, losePerCardType: "Item" }, { perMonster: "Giant", value: 1 }),
  card("freya", "Freya", "God", null, 0, "4 x Monster set", "God card: gain 2 Vikings and activate Freya's cumulative power.", { god: true, gainFlat: 2, freyaPower: true }, { monsterSets: 4 }),
];

const CARD_UI = {
  veille: { ongoing: { discount: ["Giant", "Beast"] }, instant: { gain: 1 } },
  rig: { ongoing: null, instant: { gainMajority: true } },
  dents: { ongoing: { discount: ["Undead"] }, instant: { gainMonster: "Undead" } },
  yeux: { ongoing: null, instant: { fightAny: true } },
  combat: { ongoing: null, instant: { gain: 3, minus: "Elite" } },
  meres: { ongoing: { heimdallPower: true, allTagDiscount: true }, instant: { gainCardType: "Event" } },
  bifrost: { ongoing: null, instant: { gain: 1, gainTag: "Glory" } },
  evel: { ongoing: { extraFight: 1 }, instant: { gainUniqueTags: true } },
  epee: { ongoing: { discount: ["Giant", "Beast"] }, instant: { gain: 1 } },
  gulltopp: { ongoing: { discount: ["Undead"] }, instant: null },
  gjall: { ongoing: { cardDiscount: ["Event"] }, instant: null },
  gardien: { ongoing: { worldDiscount: 1 }, instant: { gain: 1, gainCardType: "Character" } },
  heimdall: { ongoing: null, instant: { gain: 1, heimdallPower: true, allTagDiscount: true } },
  "tyr-pact": { ongoing: null, instant: { gainUniqueMonsterTypes: true } },
  "tyr-gleipnir": { ongoing: { cardDiscount: ["Event"] }, instant: { restrictedExtraFight: "Beast" } },
  "tyr-hand": { ongoing: null, instant: { gain: 1, gainTag: "Equipment" } },
  "tyr-sword": { ongoing: null, instant: { gain: 1 } },
  "tyr-death": { ongoing: { discount: ["Equipment", "Artefact"] }, instant: null },
  "tyr-stone": { ongoing: { discount: ["Destiny"] }, instant: { gainTag: "Destiny" } },
  "tyr-duel": { ongoing: null, instant: { gain: 1 } },
  "tyr-armour": { ongoing: { worldDiscount: 1 }, instant: { gain: 1, gainTag: "Destiny" } },
  "tyr-thing": { ongoing: { cardDiscount: ["Character", "Item"] }, instant: null },
  "tyr-hermod": { ongoing: null, instant: { gainCardType: "Item" } },
  "tyr-oath": { ongoing: { extraFight: 1 }, instant: { gain: 3, minusTag: "Artefact" } },
  "tyr-vidar": { ongoing: { fightAny: true }, instant: { gainUniqueMonsterTypes: true } },
  tyr: { ongoing: null, instant: { gain: 1, tyrPower: true } },
  "frigg-weaving": { ongoing: { exileBonus: 1 }, instant: null },
  "frigg-belt": { ongoing: { discount: ["Artefact"] }, instant: { fightAny: true } },
  "frigg-hlin": { ongoing: null, instant: { gain: 1, gainTag: "Artefact" } },
  "frigg-prophecy": { ongoing: { extraFight: 1 }, instant: { gain: 1 } },
  "frigg-council": { ongoing: { discount: ["Beast"] }, instant: { gainCardType: "Event" } },
  "frigg-blessing": { ongoing: null, instant: { gainCardMajority: true } },
  "frigg-veil": { ongoing: { discount: ["Undead"] }, instant: { gainCardType: "Item" } },
  "frigg-fulla": { ongoing: { exileBonus: 1 }, instant: null },
  "frigg-gna": { ongoing: { discount: ["Giant"] }, instant: { gainCardType: "Character" } },
  "frigg-ring": { ongoing: null, instant: { gain: 1, gainTag: "Destiny" } },
  "frigg-key": { ongoing: { discount: ["Giant", "Undead"] }, instant: { gain: 1 } },
  "frigg-eir": { ongoing: { discount: ["Beast"] }, instant: { gain: 1, gainMixedSet: ["Character", "Item", "Event"], value: 2 } },
  frigg: { ongoing: null, instant: { friggChoice: true } },
  "thor-magni": { ongoing: { discount: ["Undead"] }, instant: null },
  "thor-lightning": { ongoing: { discount: ["Beast", "Undead", "Giant"] }, instant: null },
  "thor-tanngnjostr": { ongoing: { discount: ["Giant"] }, instant: { gainMonster: "Giant" } },
  "thor-belt": { ongoing: null, instant: { gain: 1 } },
  "thor-thrud": { ongoing: null, instant: { gain: 3, minusTag: "Equipment" } },
  "thor-char": { ongoing: { fightAny: true }, instant: { gain: 1, gainTag: "Warrior" } },
  "thor-tanngrisnir": { ongoing: { discount: ["Beast"] }, instant: { gainMonster: "Beast" } },
  "thor-mjolnir": { ongoing: null, instant: { gain: 1, gainUniqueMonsterTypes: true } },
  "thor-sif": { ongoing: { extraFight: 1 }, instant: { gain: 1, gainTag: "Equipment" } },
  "thor-goats": { ongoing: null, instant: { gain: 1, gainTag: "Animal" } },
  "thor-death": { ongoing: null, instant: { gain: 1 } },
  "thor-gloves": { ongoing: { discount: ["Elite"] }, instant: { gainMonster: "Elite" } },
  thor: { ongoing: null, instant: { gain: 2, thorPower: true } },
  "odin-helmet": { ongoing: { cardDiscount: ["Event"] }, instant: null },
  "odin-voyage": { ongoing: { extraFight: 1 }, instant: { gain: 2, minusWorlds: true } },
  "odin-gungnir": { ongoing: { discount: ["Giant"] }, instant: { gainTag: "Animal" } },
  "odin-sleipnir": { ongoing: { discount: ["Glory"] }, instant: { gain: 3, minusTag: "Artefact" } },
  "odin-runes": { ongoing: { discount: ["Elite"] }, instant: { gainMajority: true } },
  "odin-draupnir": { ongoing: { discount: ["Beast", "Undead"] }, instant: { gain: 1, gainWorlds: true } },
  "odin-heidrun": { ongoing: { discount: ["Artefact"] }, instant: { gain: 1, gainTag: "Animal" } },
  "odin-wolves": { ongoing: { discount: ["Beast"] }, instant: null },
  "odin-death": { ongoing: { discount: ["Giant"] }, instant: { gain: 1 } },
  "odin-throne": { ongoing: { discount: ["Animal"] }, instant: { gainCardType: "Character" } },
  "odin-ravens": { ongoing: { discount: ["Undead"] }, instant: { gain: 1 } },
  "odin-mimir": { ongoing: { worldDiscount: 1 }, instant: { gain: 1, gainTag: "Artefact" } },
  odin: { ongoing: null, instant: { gain: 1, odinPower: true } },
  "freya-song": { ongoing: null, instant: { gainTag: "Warrior" } },
  "freya-hildr": { ongoing: { cardDiscount: ["Event"] }, instant: null },
  "freya-cat-a": { ongoing: { cardDiscount: ["Event", "Character", "Item"] }, instant: null },
  "freya-char": { ongoing: null, instant: { gain: 1, gainTag: "Animal" } },
  "freya-cat-b": { ongoing: null, instant: { gainMajority: true } },
  "freya-gunnr": { ongoing: { discount: ["Beast", "Undead"] }, instant: null },
  "freya-seal": { ongoing: { cardDiscount: ["Character"] }, instant: { gainCardType: "Character" } },
  "freya-tears": { ongoing: { discount: ["Giant"] }, instant: null },
  "freya-brynhildr": { ongoing: { discount: ["Giant", "Beast"] }, instant: { gainCardType: "Event", multiplier: 2 } },
  "freya-skuld": { ongoing: { discount: ["Giant", "Undead"] }, instant: { gainTag: "Animal" } },
  "freya-cloak": { ongoing: { discount: ["Beast"] }, instant: null },
  "freya-necklace": { ongoing: null, instant: { gain: 2, minusCardType: "Item" } },
  freya: { ongoing: null, instant: { gain: 2, freyaPower: true } },
};

const DECKS = {
  heimdall: {
    id: "heimdall",
    name: "Heimdall",
    subtitle: "Icon variety, broad discounts, and control over visible Monsters.",
    cards: heimdallDeck,
    image: "assets/heimdall-deck.jpg",
    recap: "assets/heimdall-recap.jpg",
    startingVikings: 2,
    available: true,
  },
  tyr: {
    id: "tyr",
    name: "Tyr",
    subtitle: "Monster-type mastery, escalating combat discounts, and set scoring.",
    cards: tyrDeck,
    image: "assets/tyr-deck.jpg",
    recap: "assets/tyr-recap.jpg?v=2",
    startingVikings: 4,
    available: true,
  },
  frigg: {
    id: "frigg",
    name: "Frigg",
    subtitle: "Exile recovery, flexible Viking generation, and icon-based scoring.",
    cards: friggDeck,
    image: "assets/frigg-deck.jpg",
    recap: "assets/frigg-recap.jpg",
    startingVikings: 4,
    available: true,
  },
  thor: {
    id: "thor", name: "Thor", subtitle: "Elite combat and Event synergy.", cards: thorDeck,
    image: "assets/thor-deck.jpg", recap: "assets/thor-recap.jpg", startingVikings: 2, available: true,
  },
  odin: {
    id: "odin", name: "Odin", subtitle: "World scoring and knowledge of the deck.", cards: odinDeck,
    image: "assets/odin-deck.jpg", recap: "assets/odin-recap.jpg", startingVikings: 3, available: true,
  },
  freya: {
    id: "freya", name: "Freya", subtitle: "Warrior icons and cumulative combat bonuses.", cards: freyaDeck,
    image: "assets/freya-deck.jpg", recap: "assets/freya-recap.jpg", startingVikings: 3, available: true,
  },
};

// Physical base deck, in the same order as the supplied monster sheet (51 cards).
const monsters = [
  monster("Hel's Army", "Undead", ["Elite", "Artefact"], 6, 7),
  monster("Aegir", "Giant", ["Elite"], 7, 11),
  monster("Falkon", "Beast", ["Animal"], 2, { perMonster: "Giant", value: 1 }),
  monster("Hrym", "Giant", ["Elite"], 8, { perMonster: "Giant", value: 3 }),
  monster("Hrungnir", "Giant", ["Elite"], 7, { perCardType: "Item", value: 3 }),
  monster("Frost Giant", "Giant", [], 4, { perMonster: "Giant", value: 1 }),
  monster("Frost Giant", "Giant", [], 4, 5),
  monster("Mountain Giant", "Giant", [], 3, { perMonster: "Undead", value: 1 }),
  monster("Fire Giant", "Giant", [], 5, { perMonster: "Beast", value: 2 }),
  monster("Giant", "Giant", ["Glory"], 2, 1),
  monster("Fire Giant", "Giant", [], 5, 7),

  monster("Nair", "Undead", [], 3, 3),
  monster("Nair", "Undead", ["Animal"], 3, 3),
  monster("Nair", "Undead", ["Equipment"], 3, 1),
  monster("Nair", "Undead", [], 3, { perMonster: "Beast", value: 1 }),
  monster("Skoll", "Beast", ["Elite"], 6, { maxIcons: 3 }),
  monster("Sea Serpent", "Beast", [], 5, { perAnyMonster: 2 }),
  monster("Sea Serpent", "Beast", [], 5, { perMonster: "Undead", value: 2 }),
  monster("Nidhogg", "Beast", ["Elite"], 8, { maxIcons: 4 }),
  monster("Thrymr", "Giant", ["Elite"], 6, 9),
  monster("Surt", "Giant", ["Elite"], 9, 15),

  monster("Naglfar", "Undead", ["Elite"], 6, { perMonster: "Undead", value: 2 }),
  monster("Hrimfaxi", "Undead", ["Elite", "Equipment"], 6, 7),
  monster("Hel", "Undead", ["Elite", "Destiny"], 8, 11),
  monster("Garmr", "Beast", ["Elite"], 7, { perCardType: "Event", value: 3 }),
  monster("Spawns of Nidhogg", "Beast", ["Glory"], 3, { perWorld: 1 }),
  monster("Spawns of Nidhogg", "Beast", [], 3, { cardSets: 2 }),
  monster("Spawns of Nidhogg", "Beast", [], 3, { monsterSets: 2 }),
  monster("Spawns of Nidhogg", "Beast", [], 3, { perMonster: "Giant", value: 1 }),
  monster("Geirrod", "Giant", ["Elite"], 6, 8),
  monster("Frost Giant", "Giant", ["Destiny"], 4, 4),

  monster("Haugbui", "Undead", [], 4, { perMonster: "Undead", value: 1 }),
  monster("Haugbui", "Undead", ["Glory"], 4, 3),
  monster("Haugbui", "Undead", ["Animal"], 4, 3),
  monster("Haugbui", "Undead", [], 4, 3),
  monster("Bear", "Beast", ["Warrior"], 4, { uniqueTags: 1 }),
  monster("Bear", "Beast", [], 4, { perMonster: "Beast", value: 1 }),
  monster("Bear", "Beast", [], 4, { monsterSets: 3 }),
  monster("Bear", "Beast", [], 4, { cardSets: 3 }),
  monster("Mountain Giant", "Giant", ["Artefact"], 3, 2),
  monster("Mountain Giant", "Giant", [], 3, 3),

  monster("Draugar", "Undead", ["Warrior"], 5, 5),
  monster("Draugar", "Undead", [], 5, { perMonster: "Undead", value: 2 }),
  monster("Lady of the Barrow", "Undead", ["Destiny"], 2, 0),
  monster("Lady of the Barrow", "Undead", ["Artefact"], 2, 0),
  monster("Jormungandr", "Beast", ["Elite"], 6, { perMonster: "Beast", value: 2 }),
  monster("Hati", "Beast", ["Elite"], 6, { perAnyMonster: 2 }),
  monster("Fenrir", "Beast", ["Elite"], 7, { perCardType: "Character", value: 3 }),
  monster("Falkon", "Beast", ["Equipment"], 2, 0),
  monster("Beli", "Giant", ["Elite"], 6, { perMonster: "Giant", value: 2 }),
  monster("Giant", "Giant", ["Warrior"], 2, 0),
];

// Physical base deck, in the same order as the supplied world sheet (18 cards).
const worlds = [
  world("Yggdrasil", ["MonsterTotal"], 5, 3, ["Animal"]),
  world("Vanaheim", ["Item", "Beast"], 6, 4),
  world("Yggdrasil", ["CardTotal"], 8, 7, ["Artefact"]),
  world("Yggdrasil", ["Banished"], 4, 5, ["Destiny"]),
  world("Asgard", ["Character", "Giant"], 8, 8),

  world("Niflheim", ["Item", "Undead"], 8, 8),
  world("Midgard", ["Character", "Beast"], 7, 6),
  world("Yggdrasil", ["MajorityCardType"], 4, 3, ["Equipment"]),
  world("Yggdrasil", ["Elite"], 5, 5, ["Glory"]),
  world("Alfheim", ["Event", "Beast"], 8, 8),

  world("Nidavellir", ["Event", "Undead"], 7, 6),
  world("Helheim", ["Character", "Undead"], 6, 4),
  world("Yggdrasil", ["SquareTotal"], 9, 7),
  world("Yggdrasil", ["MonsterTotal"], 8, 7, ["Warrior"]),

  world("Muspelheim", ["Item", "Giant"], 7, 6),
  world("Jotunheim", ["Event", "Giant"], 5, 4),
  world("Yggdrasil", ["MajorityTag"], 5, 5),
  world("Yggdrasil", ["DifferentTags"], 5, 3),
];

let state;
let selectedDeckId = "heimdall";
let selectedPlayerCount = 1;
let playerSetup = [{ controller: "human", deckId: "heimdall" }];

const els = {
  deckTitle: document.querySelector("#deckTitle"),
  startScreen: document.querySelector("#startScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  deckChoices: document.querySelector("#deckChoices"),
  playerCountControl: document.querySelector("#playerCountControl"),
  playerSetup: document.querySelector("#playerSetup"),
  setupDescription: document.querySelector("#setupDescription"),
  setupStatus: document.querySelector("#setupStatus"),
  startGameBtn: document.querySelector("#startGameBtn"),
  menuBtn: document.querySelector("#menuBtn"),
  deckViewerBtn: document.querySelector("#deckViewerBtn"),
  menuDeckViewerBtn: document.querySelector("#menuDeckViewerBtn"),
  monsterDeckViewerBtn: document.querySelector("#monsterDeckViewerBtn"),
  worldDeckViewerBtn: document.querySelector("#worldDeckViewerBtn"),
  deckDialog: document.querySelector("#deckDialog"),
  deckDialogTitle: document.querySelector("#deckDialogTitle"),
  deckViewer: document.querySelector("#deckViewer"),
  closeDeckBtn: document.querySelector("#closeDeckBtn"),
  hand: document.querySelector("#hand"),
  reservedSlot: document.querySelector("#reservedSlot"),
  battlefield: document.querySelector("#battlefield"),
  availableWorlds: document.querySelector("#availableWorlds"),
  passMonsterBtn: document.querySelector("#passMonsterBtn"),
  passWorldBtn: document.querySelector("#passWorldBtn"),
  valhallaCharacter: document.querySelector("#valhallaCharacter"),
  valhallaItem: document.querySelector("#valhallaItem"),
  valhallaEvent: document.querySelector("#valhallaEvent"),
  valhalla: document.querySelector("#valhalla"),
  trophies: document.querySelector("#trophies"),
  log: document.querySelector("#log"),
  phaseTitle: document.querySelector("#phaseTitle"),
  advanceBtn: document.querySelector("#advanceBtn"),
  mulliganBtn: document.querySelector("#mulliganBtn"),
  valhallaBtn: document.querySelector("#valhallaBtn"),
  banishBtn: document.querySelector("#banishBtn"),
  newGameBtn: document.querySelector("#newGameBtn"),
  rulesBtn: document.querySelector("#rulesBtn"),
  closeRulesBtn: document.querySelector("#closeRulesBtn"),
  referenceDialog: document.querySelector("#referenceDialog"),
  roundStat: document.querySelector("#roundStat"),
  vikingsStat: document.querySelector("#vikingsStat"),
  combatStat: document.querySelector("#combatStat"),
  vpStat: document.querySelector("#vpStat"),
  deckStat: document.querySelector("#deckStat"),
  valhallaTitle: document.querySelector("#valhallaTitle"),
  trophyTitle: document.querySelector("#trophyTitle"),
  godRecapImg: document.querySelector("#godRecapImg"),
  finalScoreBreakdown: document.querySelector("#finalScoreBreakdown"),
  highScoresList: document.querySelector("#highScoresList"),
  completedGamesCount: document.querySelector("#completedGamesCount"),
  friggChoiceDialog: document.querySelector("#friggChoiceDialog"),
  friggVikingsBtn: document.querySelector("#friggVikingsBtn"),
  friggExileChoices: document.querySelector("#friggExileChoices"),
  resetScoresBtn: document.querySelector("#resetScoresBtn"),
  resetScoresDialog: document.querySelector("#resetScoresDialog"),
  cancelResetScoresBtn: document.querySelector("#cancelResetScoresBtn"),
  confirmResetScoresBtn: document.querySelector("#confirmResetScoresBtn"),
  deckStatistics: document.querySelector("#deckStatistics"),
  scoresStatsBtn: document.querySelector("#scoresStatsBtn"),
  scoresStatsDialog: document.querySelector("#scoresStatsDialog"),
  closeScoresStatsBtn: document.querySelector("#closeScoresStatsBtn"),
  exileViewerBtn: document.querySelector("#exileViewerBtn"),
  exileDialog: document.querySelector("#exileDialog"),
  exileViewer: document.querySelector("#exileViewer"),
  closeExileBtn: document.querySelector("#closeExileBtn"),
};

function card(id, name, type, tag, cost, scoreText, playText, play, score) {
  return { id, name, type, tag, cost, scoreText, playText, play, score };
}

function monster(name, type, tags, cost, score) {
  return {
    id: `${name}-${Math.random()}`,
    name,
    type,
    tags,
    cost,
    score: typeof score === "number" ? { fixed: score } : score,
  };
}

function world(name, criteria, cost, vp, tags = []) {
  return { id: `${name}-${Math.random()}`, name, criteria, cost, vp, tags };
}

function newGame() {
  const supportedAutomaDecks = ["heimdall", "tyr"];
  const unsupportedAutoma = playerSetup.find((player) => player.controller === "automa" && !supportedAutomaDecks.includes(player.deckId));
  if (selectedPlayerCount > 1 && unsupportedAutoma) {
    renderPlayerSetup(`No Automa is available for ${DECKS[unsupportedAutoma.deckId].name} yet. Choose Heimdall or Tyr, or set this seat to Human.`);
    return;
  }
  if (selectedPlayerCount > 1) return newMultiplayerGame();
  const chosenDeck = DECKS[selectedDeckId];
  state = {
    round: 1,
    maxRounds: 7,
    vikings: chosenDeck.startingVikings,
    deckId: chosenDeck.id,
    deckName: chosenDeck.name,
    deck: shuffle([...chosenDeck.cards]),
    discard: [],
    hand: [],
    reservedId: null,
    playedThisTurn: [],
    valhalla: [],
    banished: [],
    trophies: [],
    savedWorlds: [],
    availableWorlds: [],
    monsterDeck: shuffle([...monsters]),
    worldDeck: shuffle([...worlds]),
    battlefield: [],
    phase: "choose",
    mulliganUsed: false,
    pendingFriggChoice: false,
    odinBonusDrawn: false,
    gameRecorded: false,
    temp: blankTemp(),
    log: [`Game started with ${chosenDeck.name}. Choose 1 card from your hand.`],
  };
  setupBattlefield();
  drawToFour();
  els.startScreen.classList.add("is-hidden");
  els.gameScreen.classList.remove("is-hidden");
  if (els.friggChoiceDialog.open) els.friggChoiceDialog.close();
  render();
}

function createPlayer(index, config) {
  const chosenDeck = DECKS[config.deckId];
  return {
    index, controller: config.controller, vikings: chosenDeck.startingVikings,
    deckId: chosenDeck.id, deckName: chosenDeck.name, deck: shuffle([...chosenDeck.cards]),
    discard: [], hand: [], reservedId: null, playedThisTurn: [], valhalla: [], banished: [],
    trophies: [], savedWorlds: [], phase: "choose", mulliganUsed: false,
    pendingFriggChoice: false, odinBonusDrawn: false, temp: blankTemp(), cardsDone: false,
    monsterDone: false, worldDone: false,
  };
}

function newMultiplayerGame() {
  const players = playerSetup.map((config, index) => createPlayer(index, config));
  state = {
    multiplayer: true, players, activePlayerIndex: 0, priorityIndex: 0,
    round: 1, maxRounds: 7, availableWorlds: [], monsterDeck: shuffle([...monsters]),
    worldDeck: shuffle([...worlds]), battlefield: [], phase: "choose", gameRecorded: false,
    log: ["Multiplayer game started. Player 1 chooses a reserved card."],
  };
  loadPlayer(0, "choose");
  setupBattlefield();
  for (let index = 0; index < players.length; index += 1) {
    loadPlayer(index, "choose");
    drawToFour();
    syncActivePlayer();
  }
  loadPlayer(0, "choose");
  els.startScreen.classList.add("is-hidden");
  els.gameScreen.classList.remove("is-hidden");
  render();
}

function isMultiplayer() {
  return Boolean(state?.multiplayer);
}

function syncActivePlayer() {
  if (!isMultiplayer()) return;
  const player = state.players[state.activePlayerIndex];
  for (const key of ["vikings", "deckId", "deckName", "deck", "discard", "hand", "reservedId", "playedThisTurn", "valhalla", "banished", "trophies", "savedWorlds", "mulliganUsed", "pendingFriggChoice", "odinBonusDrawn", "temp"]) player[key] = state[key];
}

function loadPlayer(index, phase) {
  if (!state.multiplayer) return;
  state.activePlayerIndex = index;
  const player = state.players[index];
  for (const key of ["vikings", "deckId", "deckName", "deck", "discard", "hand", "reservedId", "playedThisTurn", "valhalla", "banished", "trophies", "savedWorlds", "mulliganUsed", "pendingFriggChoice", "odinBonusDrawn", "temp"]) state[key] = player[key];
  state.phase = phase;
}

function showMenu() {
  els.startScreen.classList.remove("is-hidden");
  els.gameScreen.classList.add("is-hidden");
  els.deckTitle.textContent = "Choose Deck";
  renderDeckChoices();
  renderPlayerSetup();
  renderHighScores();
}

function setPlayerCount(count) {
  selectedPlayerCount = count;
  const deckIds = Object.keys(DECKS);
  while (playerSetup.length < count) {
    const usedDecks = new Set(playerSetup.map((player) => player.deckId));
    playerSetup.push({
      controller: playerSetup.length === 0 ? "human" : "automa",
      deckId: deckIds.find((deckId) => !usedDecks.has(deckId)) || deckIds[0],
    });
  }
  playerSetup = playerSetup.slice(0, count);
  selectedDeckId = playerSetup[0].deckId;
  renderDeckChoices();
  renderPlayerSetup();
}

function renderPlayerSetup(statusMessage = "") {
  els.playerCountControl.querySelectorAll("[data-player-count]").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.playerCount) === selectedPlayerCount);
  });
  const multiplayer = selectedPlayerCount > 1;
  els.playerSetup.classList.toggle("is-hidden", !multiplayer);
  els.setupDescription.textContent = multiplayer
    ? "Assign a controller and a unique God deck to each seat."
    : "Choose a God deck, inspect its cards, and begin a solo game.";
  els.startGameBtn.textContent = multiplayer ? "Confirm Table" : "Start Game";
  els.setupStatus.textContent = statusMessage;
  els.setupStatus.classList.toggle("is-hidden", !statusMessage);
  if (!multiplayer) return;
  els.playerSetup.innerHTML = playerSetup.map((player, index) => `
    <div class="player-slot" data-player-slot="${index}">
      <strong>Player ${index + 1}</strong>
      <select data-player-controller aria-label="Player ${index + 1} controller">
        <option value="human" ${player.controller === "human" ? "selected" : ""}>Human</option>
        <option value="automa" ${player.controller === "automa" ? "selected" : ""}>Automa</option>
      </select>
      <select data-player-deck aria-label="Player ${index + 1} deck">
        ${Object.values(DECKS).map((deck) => `<option value="${deck.id}" ${player.deckId === deck.id ? "selected" : ""}>${deck.name}</option>`).join("")}
      </select>
    </div>
  `).join("");
}

function blankTemp() {
  return {
    combatLeft: 1,
    restrictedFights: [],
    fightAny: false,
    fightAnyTypes: [],
    discounts: {},
    cardDiscounts: {},
    worldDiscount: 0,
    heimdallPower: 0,
    tyrPower: 0,
    thorPower: 0,
    godActive: false,
  };
}

function drawToFour() {
  while (state.hand.length < 4 && (state.deck.length || state.discard.length)) {
    if (!state.deck.length) {
      state.deck = shuffle(state.discard);
      state.discard = [];
      addLog("Discard reshuffled into the deck.");
    }
    state.hand.push(state.deck.pop());
  }
  if (state.deckId === "odin" && state.hand.some((cardInHand) => cardInHand.id === "odin") && !state.odinBonusDrawn) {
    if (state.deck.length) state.hand.push(state.deck.pop());
    state.odinBonusDrawn = true;
    addLog("Odin was drawn: draw 1 additional card before choosing.");
  }
}

function setupBattlefield() {
  state.battlefield = [];
  for (let i = 0; i < 3 && state.worldDeck.length; i += 1) {
    state.battlefield.push({
      world: state.worldDeck.pop(),
      left: drawMonsters(2),
      right: drawMonsters(2),
    });
  }
}

function drawMonsters(amount) {
  const drawn = [];
  while (drawn.length < amount && state.monsterDeck.length) drawn.push(state.monsterDeck.pop());
  return drawn;
}

function selectReserve(id) {
  if (state.phase !== "choose") return;
  const selectedCard = state.hand.find((handCard) => handCard.id === id);
  if (!selectedCard || selectedCard.type === "God") return;
  state.reservedId = id;
  render();
}

function useMulligan() {
  if (state.phase !== "choose" || state.mulliganUsed || state.hand.length !== 4) return;
  state.discard.push(...state.hand);
  state.hand = [];
  state.reservedId = null;
  state.mulliganUsed = true;
  drawToFour();
  addLog("Mulligan used: discarded 4 cards and drew a new hand.");
  render();
}

function playThree() {
  if (state.phase !== "choose" || !state.reservedId) return;
  const reserved = state.hand.find((c) => c.id === state.reservedId);
  const played = state.hand.filter((c) => c.id !== state.reservedId);
  state.hand = [reserved];
  state.playedThisTurn = played;
  state.temp = blankTemp();
  for (const playedCard of played) resolvePlayEffect(playedCard);
  state.phase = "reserve";
  addLog(`Played: ${played.map((c) => c.name).join(", ")}.`);
  render();
}

function resolvePlayEffect(playedCard) {
  const effect = playedCard.play;
  const instant = CARD_UI[playedCard.id]?.instant || {};
  if (effect.god) {
    state.temp.godActive = true;
    if (effect.allTagDiscount) {
      state.temp.heimdallPower += 1;
    }
    if (effect.tyrPower) state.temp.tyrPower += 1;
    if (effect.thorPower) state.temp.thorPower += 1;
    if (effect.freyaPower) resolveFreyaPower();
    if (effect.friggChoice) state.pendingFriggChoice = true;
    if (effect.allTagDiscount) addLog("Heimdall active: square icons cost -1 this round.");
    if (effect.tyrPower) addLog("Tyr active: Monsters cost -1 per defeated Monster of the same type this round.");
    if (effect.thorPower) addLog("Thor active: Elite Monsters cost -1 per Equipment icon this round.");
    if (effect.friggChoice) addLog("Frigg active: choose 2 Vikings or a free card from exile.");
  }
  if (effect.fightAny && instant.fightAny) state.temp.fightAny = true;
  if (effect.extraFight && instant.extraFight) state.temp.combatLeft += effect.extraFight;
  if (effect.restrictedExtraFight && instant.restrictedExtraFight) {
    state.temp.combatLeft += 1;
    state.temp.restrictedFights.push(effect.restrictedExtraFight);
  }
  if (effect.worldDiscount && instant.worldDiscount) state.temp.worldDiscount += effect.worldDiscount;
  if (effect.discountTypes && instant.discount) {
    for (const type of effect.discountTypes) state.temp.discounts[type] = (state.temp.discounts[type] || 0) + 1;
  }
  if (effect.discountCardTypes && instant.cardDiscount) {
    for (const type of effect.discountCardTypes) state.temp.cardDiscounts[type] = (state.temp.cardDiscounts[type] || 0) + 1;
  }
  let gain = effect.gainFlat || 0;
  if (effect.gainTag) gain += countTag(effect.gainTag);
  if (effect.gainMonster) gain += countMonsterType(effect.gainMonster);
  if (effect.gainCardType) gain += countCardType(effect.gainCardType) * (effect.gainMultiplier || 1);
  if (effect.gainUniqueTags) gain += uniqueTags();
  if (effect.gainUniqueMonsterTypes) gain += ["Giant", "Beast", "Undead"].filter((type) => countMonsterType(type) > 0).length;
  if (effect.gainMajority) gain += majorityCount();
  if (effect.gainCardMajority) gain += majorityCardCount();
  if (effect.gainMixedSet) gain += Math.min(...effect.gainMixedSet.map(countGameIcon)) * (effect.value || 1);
  if (effect.losePerMonster) gain -= countMonsterType(effect.losePerMonster);
  if (effect.losePerTag) gain -= countTag(effect.losePerTag);
  if (effect.losePerCardType) gain -= countCardType(effect.losePerCardType);
  if (effect.losePerWorld) gain -= state.savedWorlds.length;
  if (effect.gainWorlds) gain += state.savedWorlds.length;
  gain = Math.max(0, gain);
  if (gain) {
    state.vikings += gain;
    addLog(`${playedCard.name}: +${gain} Vikings.`);
  }
}

function resolveFreyaPower() {
  const characters = countCardType("Character");
  if (characters >= 1) state.temp.fightAny = true;
  if (characters >= 2) state.temp.combatLeft += 1;
  if (characters >= 3) state.vikings += 1;
  const access = characters >= 1 ? "fight any Monster" : "no tier unlocked";
  addLog(`Freya active with ${characters} Character card${characters === 1 ? "" : "s"}: ${access}${characters >= 2 ? ", +1 fight" : ""}${characters >= 3 ? ", +1 Viking" : ""}.`);
}

function sendReservedToValhalla() {
  if (state.phase !== "reserve" || state.pendingFriggChoice) return;
  const reserved = state.hand[0];
  if (reserved.type === "God") {
    addLog("The God card cannot go to Valhalla.");
    render();
    return;
  }
  const cost = valhallaCost(reserved);
  if (state.vikings < cost) {
    addLog(`${reserved.name} needs ${cost} Vikings.`);
    render();
    return;
  }
  state.vikings -= cost;
  state.valhalla.push(reserved);
  state.hand = [];
  state.phase = "monster";
  state.temp.combatLeft += countOngoingExtraFight();
  addLog(`${reserved.name} enters Valhalla for ${cost}.`);
  if (isMultiplayer()) return completeMultiplayerCardChoice();
  render();
}

function banishReserved() {
  if (state.phase !== "reserve" || state.pendingFriggChoice) return;
  const reserved = state.hand[0];
  if (!reserved || reserved.type === "God") {
    addLog("God cards cannot be banished.");
    render();
    return;
  }
  const exileBonus = countOngoingExileBonus();
  state.vikings += 2 + exileBonus;
  state.banished.push(reserved);
  state.hand = [];
  state.phase = "monster";
  state.temp.combatLeft += countOngoingExtraFight();
  addLog(`${reserved.name} banished: +${2 + exileBonus} Vikings${exileBonus ? ` (${exileBonus} exile bonus)` : ""}.`);
  if (isMultiplayer()) return completeMultiplayerCardChoice();
  render();
}

function completeMultiplayerCardChoice() {
  const current = state.players[state.activePlayerIndex];
  current.cardsDone = true;
  syncActivePlayer();
  const next = state.players.find((player) => !player.cardsDone);
  if (next) {
    loadPlayer(next.index, "choose");
    addLog(`Player ${next.index + 1} chooses a reserved card.`);
  } else {
    loadPlayer(state.priorityIndex, "monster");
    addLog(`Monster phase: Player ${state.priorityIndex + 1} has priority.`);
  }
  render();
}

function fightMonster(laneIndex, side, monsterIndex) {
  if (state.phase !== "monster" || state.temp.combatLeft <= 0) return;
  const lane = state.battlefield[laneIndex];
  const target = lane[side][monsterIndex];
  if (!target || !canUseFightOn(target)) return;
  const cost = monsterCost(target);
  if (state.vikings < cost) {
    addLog(`${target.name} needs ${cost} Vikings to fight.`);
    render();
    return;
  }
  state.vikings -= cost;
  consumeFightFor(target);
  state.temp.combatLeft -= 1;
  state.trophies.push(target);
  lane[side].splice(monsterIndex, 1);
  addLog(`Defeated ${target.name}: ${monsterScoreText(target)}.`);
  refillLiberatedWorlds();
  if (state.temp.combatLeft <= 0) {
    if (isMultiplayer()) return completeMultiplayerMonsterPhase();
    state.phase = "world";
  }
  render();
}

function canUseFightOn(monsterToFight) {
  const unrestrictedFights = state.temp.combatLeft - state.temp.restrictedFights.length;
  return unrestrictedFights > 0 || state.temp.restrictedFights.includes(monsterToFight.type);
}

function consumeFightFor(monsterToFight) {
  const restrictedIndex = state.temp.restrictedFights.indexOf(monsterToFight.type);
  if (restrictedIndex >= 0) state.temp.restrictedFights.splice(restrictedIndex, 1);
}

function passMonster() {
  if (state.phase !== "monster") return;
  if (isMultiplayer()) {
    addLog(`Player ${state.activePlayerIndex + 1} passed the Monster phase.`);
    return completeMultiplayerMonsterPhase();
  }
  state.phase = "world";
  addLog("You passed the Monster fight.");
  render();
}

function completeMultiplayerMonsterPhase() {
  state.players[state.activePlayerIndex].monsterDone = true;
  syncActivePlayer();
  loadPlayer(state.activePlayerIndex, "world");
  render();
}

function protectWorld(worldIndex) {
  if (state.phase !== "world") return;
  const target = state.availableWorlds[worldIndex];
  if (!target) {
    addLog("No available World in that slot.");
    render();
    return;
  }
  const cost = worldCost(target);
  if (state.vikings < cost) {
    addLog(`${target.name} needs ${cost} Vikings to protect.`);
    render();
    return;
  }
  state.vikings -= cost;
  state.savedWorlds.push(target);
  state.availableWorlds.splice(worldIndex, 1);
  addLog(`Protected ${target.name}: ${target.vp} VP.`);
  if (isMultiplayer()) return completeMultiplayerWorldPhase();
  resolveWorldAutoma();
  state.phase = "end";
  render();
}

function passWorld() {
  if (state.phase !== "world") return;
  if (isMultiplayer()) {
    addLog(`Player ${state.activePlayerIndex + 1} passed World protection.`);
    return completeMultiplayerWorldPhase();
  }
  resolveWorldAutoma();
  state.phase = "end";
  addLog("You passed World protection.");
  render();
}

function multiplayerTurnOrder() {
  return state.players.map((_, offset) => (state.priorityIndex + offset) % state.players.length);
}

function completeMultiplayerWorldPhase() {
  state.players[state.activePlayerIndex].worldDone = true;
  syncActivePlayer();
  const next = multiplayerTurnOrder().find((index) => !state.players[index].worldDone);
  if (next !== undefined) {
    loadPlayer(next, "monster");
    render();
    return;
  }
  endMultiplayerRound();
}

function endMultiplayerRound() {
  for (const player of state.players) {
    player.discard.push(...player.playedThisTurn);
    player.playedThisTurn = [];
    player.reservedId = null;
    player.temp = blankTemp();
    player.cardsDone = false;
    player.monsterDone = false;
    player.worldDone = false;
    player.odinBonusDrawn = false;
  }
  if (state.round >= state.maxRounds) {
    loadPlayer(state.priorityIndex, "gameover");
    addLog("Multiplayer game over. Final scores are shown for every player.");
    render();
    return;
  }
  state.round += 1;
  state.priorityIndex = (state.priorityIndex + 1) % state.players.length;
  for (const player of state.players) {
    loadPlayer(player.index, "choose");
    drawToFour();
    syncActivePlayer();
  }
  loadPlayer(state.priorityIndex, "choose");
  addLog(`Round ${state.round}. Player ${state.priorityIndex + 1} has priority.`);
  render();
}

function resolveWorldAutoma() {
  if (!state.availableWorlds.length) return null;
  if (Math.random() >= 1 / 3) {
    addLog("World automa did not remove a World.");
    return null;
  }
  const worldIndex = Math.floor(Math.random() * state.availableWorlds.length);
  const [removedWorld] = state.availableWorlds.splice(worldIndex, 1);
  addLog(`World automa removed ${removedWorld.name}.`);
  return removedWorld;
}

function endTurn() {
  if (state.phase !== "end") return;
  const removed = removeRandomMonster();
  state.discard.push(...state.playedThisTurn);
  state.playedThisTurn = [];
  state.reservedId = null;
  state.temp = blankTemp();
  if (state.round >= state.maxRounds) {
    state.phase = "gameover";
    addLog(`Game over. Estimated total: ${totalVp()} VP.`);
    recordCompletedGame();
    render();
    return;
  }
  state.round += 1;
  state.phase = "choose";
  drawToFour();
  addLog(`Round ${state.round}. ${removed ? `Automa removed ${removed.name}.` : "No Monster removed."}`);
  render();
}

function removeRandomMonster() {
  const slots = [];
  state.battlefield.forEach((lane, laneIndex) => {
    ["left", "right"].forEach((side) => {
      lane[side].forEach((monsterCard, monsterIndex) => slots.push({ laneIndex, side, monsterIndex, monsterCard }));
    });
  });
  if (!slots.length) return null;
  const slot = slots[Math.floor(Math.random() * slots.length)];
  const [removed] = state.battlefield[slot.laneIndex][slot.side].splice(slot.monsterIndex, 1);
  refillLiberatedWorlds();
  return removed;
}

function refillLiberatedWorlds() {
  for (const lane of state.battlefield) {
    if (!lane.world || lane.world.name === "Empty" || !isWorldOpen(lane)) continue;
    state.availableWorlds.push(lane.world);
    addLog(`${lane.world.name} is now available.`);
    lane.world = state.worldDeck.pop() || world("Empty", [], 0, 0);
    refillLaneMonsters(lane);
  }
}

function refillLaneMonsters(lane) {
  while (lane.left.length < 2 && state.monsterDeck.length) lane.left.push(state.monsterDeck.pop());
  while (lane.right.length < 2 && state.monsterDeck.length) lane.right.push(state.monsterDeck.pop());
}

function valhallaCost(cardToBuy) {
  const cardTypeDiscount = state.temp.cardDiscounts[cardToBuy.type] || 0;
  const tagDiscount = state.temp.discounts[cardToBuy.tag] || 0;
  const heimdallDiscount = cardHasSquareIcon(cardToBuy) ? countHeimdallPowerSources() : 0;
  return Math.max(0, cardToBuy.cost - cardTypeDiscount - tagDiscount - countOngoingCardDiscount(cardToBuy.type) - countOngoingDiscount(cardToBuy.tag) - heimdallDiscount);
}

function monsterCost(monsterToFight) {
  let discount = state.temp.discounts[monsterToFight.type] || 0;
  for (const tag of monsterToFight.tags) discount += state.temp.discounts[tag] || 0;
  discount += countOngoingDiscount(monsterToFight.type);
  for (const tag of monsterToFight.tags) discount += countOngoingDiscount(tag);
  if (monsterHasSquareIcon(monsterToFight)) discount += countHeimdallPowerSources();
  discount += countTyrPowerSources() * countMonsterType(monsterToFight.type);
  if (monsterToFight.tags.includes("Elite")) discount += state.temp.thorPower * countTag("Equipment");
  return Math.max(0, monsterToFight.cost - discount);
}

function worldCost(worldToProtect) {
  return worldDiscountBreakdown(worldToProtect).cost;
}

function worldDiscountBreakdown(worldToProtect) {
  const criteria = worldToProtect.criteria.reduce((sum, criterion) => sum + worldCriterionCount(criterion), 0);
  const ongoing = state.valhalla.reduce((sum, cardInValhalla) => sum + (CARD_UI[cardInValhalla.id]?.ongoing?.worldDiscount || 0), 0);
  const temporary = state.temp.worldDiscount || 0;
  const heimdall = worldHasSquareIcon(worldToProtect) ? countHeimdallPowerSources() : 0;
  const total = criteria + ongoing + temporary + heimdall;
  return { criteria, ongoing, temporary, heimdall, total, cost: Math.max(0, worldToProtect.cost - total) };
}

function worldDiscountSummary(worldToProtect) {
  const discount = worldDiscountBreakdown(worldToProtect);
  const parts = [`criteria -${discount.criteria}`];
  if (discount.ongoing) parts.push(`ongoing -${discount.ongoing}`);
  if (discount.temporary || discount.heimdall) parts.push(`power -${discount.temporary + discount.heimdall}`);
  return parts.join(" · ");
}

function worldCriterionCount(criterion) {
  if (["Character", "Item", "Event"].includes(criterion)) return countCardType(criterion);
  if (TYPES.includes(criterion)) return countMonsterType(criterion);
  if (TAGS.includes(criterion)) return countTag(criterion);
  if (criterion === "MonsterTotal") return state.trophies.length;
  if (criterion === "CardTotal") return state.valhalla.length;
  if (criterion === "SquareTotal") return TAGS.reduce((sum, tag) => sum + countTag(tag), 0);
  if (criterion === "Banished") return state.banished.length;
  if (criterion === "MajorityCardType") return Math.max(0, ...["Character", "Item", "Event"].map(countCardType));
  if (criterion === "MajorityTag") return Math.max(0, ...TAGS.map(countTag));
  if (criterion === "DifferentTags") return uniqueTags();
  return 0;
}

function countOngoingDiscount(iconName) {
  return state.valhalla.reduce((sum, cardInValhalla) => {
    const ongoing = CARD_UI[cardInValhalla.id]?.ongoing;
    const listed = ongoing?.discount || [];
    return sum + (listed.includes(iconName) ? 1 : 0);
  }, 0);
}

function countHeimdallPowerSources() {
  return state.temp.heimdallPower + state.valhalla.reduce((sum, cardInValhalla) => {
    return sum + (CARD_UI[cardInValhalla.id]?.ongoing?.heimdallPower ? 1 : 0);
  }, 0);
}

function countTyrPowerSources() {
  return state.temp.tyrPower + state.valhalla.reduce((sum, cardInValhalla) => {
    return sum + (CARD_UI[cardInValhalla.id]?.ongoing?.tyrPower ? 1 : 0);
  }, 0);
}

function cardHasSquareIcon(cardToCheck) {
  return TAGS.includes(cardToCheck.tag);
}

function monsterHasSquareIcon(monsterToCheck) {
  return monsterToCheck.tags.some((tag) => TAGS.includes(tag));
}

function worldHasSquareIcon(worldToCheck) {
  return worldToCheck.tags.some((tag) => TAGS.includes(tag));
}

function countOngoingCardDiscount(typeName) {
  return state.valhalla.reduce((sum, cardInValhalla) => {
    const listed = CARD_UI[cardInValhalla.id]?.ongoing?.cardDiscount || [];
    return sum + (listed.includes(typeName) ? 1 : 0);
  }, 0);
}

function countOngoingExtraFight() {
  return state.valhalla.reduce((sum, cardInValhalla) => sum + (CARD_UI[cardInValhalla.id]?.ongoing?.extraFight || 0), 0);
}

function countOngoingExileBonus() {
  return state.valhalla.reduce((sum, cardInValhalla) => sum + (CARD_UI[cardInValhalla.id]?.ongoing?.exileBonus || 0), 0);
}

function hasReq(req) {
  return countTag(req) > 0 || countMonsterType(req) > 0;
}

function countTag(tag) {
  let total = effectiveValhalla().filter((cardInValhalla) => cardInValhalla.tag === tag).length;
  total += state.trophies.reduce((sum, trophy) => sum + (trophy.tags.includes(tag) ? 1 : 0), 0);
  total += state.savedWorlds.reduce((sum, savedWorld) => sum + (savedWorld.tags.includes(tag) ? 1 : 0), 0);
  return total;
}

function countMonsterType(type) {
  if (type === "Elite") return state.trophies.filter((trophy) => trophy.tags.includes("Elite")).length;
  return state.trophies.filter((trophy) => trophy.type === type).length;
}

function countGameIcon(iconName) {
  if (["Character", "Item", "Event"].includes(iconName)) return countCardType(iconName);
  if (TYPES.includes(iconName)) return countMonsterType(iconName);
  return countTag(iconName);
}

function countCardType(type) {
  return effectiveValhalla().filter((cardInValhalla) => cardInValhalla.type === type).length;
}

function effectiveValhalla() {
  return state.valhalla;
}

function majorityCount() {
  return Math.max(0, ...TAGS.map((tag) => countTag(tag)));
}

function majorityCardCount() {
  return Math.max(0, ...["Character", "Item", "Event"].map(countCardType));
}

function uniqueTags() {
  return TAGS.filter((tag) => countTag(tag) > 0).length;
}

function totalVp() {
  if (!state) return 0;
  const breakdown = scoreBreakdown();
  return breakdown.cards + breakdown.monsters + breakdown.worlds + breakdown.hero;
}

function scoreBreakdown() {
  const godCard = DECKS[state.deckId].cards.find((deckCard) => deckCard.type === "God");
  return {
    cards: state.valhalla.reduce((sum, cardInValhalla) => sum + scoreCard(cardInValhalla), 0),
    monsters: state.trophies.reduce((sum, trophy) => sum + scoreMonster(trophy), 0),
    worlds: state.savedWorlds.reduce((sum, savedWorld) => sum + savedWorld.vp, 0),
    hero: godCard ? scoreCard(godCard) : 0,
  };
}

function loadCompletedGames() {
  try {
    const saved = JSON.parse(localStorage.getItem(HIGH_SCORES_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function recordCompletedGame() {
  if (state.gameRecorded || state.phase !== "gameover") return;
  const games = loadCompletedGames();
  games.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    deckId: state.deckId,
    deckName: state.deckName,
    score: totalVp(),
    breakdown: scoreBreakdown(),
    completedAt: new Date().toISOString(),
  });
  try {
    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(games));
    state.gameRecorded = true;
  } catch {
    addLog("The completed game could not be saved locally.");
  }
}

function renderHighScores() {
  const games = loadCompletedGames().sort((a, b) => b.score - a.score || b.completedAt.localeCompare(a.completedAt));
  els.completedGamesCount.textContent = `${games.length} ${games.length === 1 ? "game" : "games"}`;
  renderDeckStatistics(games);
  if (!games.length) {
    els.highScoresList.innerHTML = `<div class="empty-slot compact">No completed games yet</div>`;
    return;
  }
  els.highScoresList.innerHTML = games.slice(0, 10).map((game, index) => `
    <div class="high-score-row">
      <span class="high-score-rank">${index + 1}</span>
      <strong>${escapeHtml(String(game.deckName))}</strong>
      <time datetime="${escapeHtml(String(game.completedAt))}">${formatScoreDate(game.completedAt)}</time>
      <b>${Number(game.score) || 0} VP</b>
    </div>
  `).join("");
}

function renderDeckStatistics(games) {
  els.deckStatistics.innerHTML = Object.values(DECKS).map((deck) => {
    const deckGames = games.filter((game) => game.deckId === deck.id || game.deckName === deck.name);
    const average = deckGames.length ? deckGames.reduce((sum, game) => sum + (Number(game.score) || 0), 0) / deckGames.length : 0;
    return `
      <div class="deck-stat-row">
        <strong>${escapeHtml(deck.name)}</strong>
        <span><b>${deckGames.length}</b> Games</span>
        <span><b>${deckGames.length ? average.toFixed(1) : "-"}</b> Average VP</span>
      </div>
    `;
  }).join("");
}

function openResetScoresConfirmation() {
  if (!els.resetScoresDialog.open) els.resetScoresDialog.showModal();
}

function openScoresAndStatistics() {
  renderHighScores();
  if (!els.scoresStatsDialog.open) els.scoresStatsDialog.showModal();
}

function resetHighScores() {
  try {
    localStorage.removeItem(HIGH_SCORES_KEY);
  } finally {
    els.resetScoresDialog.close();
    renderHighScores();
  }
}

function formatScoreDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function scoreCard(cardToScore) {
  const score = cardToScore.score;
  let total = score.fixed || 0;
  if (score.perTag) total += countTag(score.perTag) * score.value;
  if (score.perCardType) total += countCardType(score.perCardType) * score.value;
  if (score.perMonster) total += countMonsterType(score.perMonster) * score.value;
  if (score.uniqueTags) total += uniqueTags() * score.uniqueTags;
  if (score.perWorld) total += state.savedWorlds.length * score.perWorld;
  if (score.maxIcons) total += Math.max(0, ...TAGS.map(countTag)) * score.maxIcons;
  if (score.maxCardType) total += majorityCardCount() * score.maxCardType;
  if (score.maxMonsterType) total += Math.max(0, ...["Giant", "Beast", "Undead"].map(countMonsterType)) * score.maxMonsterType;
  if (score.monsterSets) total += Math.min(...["Giant", "Beast", "Undead"].map(countMonsterType)) * score.monsterSets;
  return total;
}

function scoreMonster(monsterToScore) {
  const score = monsterToScore.score || {};
  if (Object.hasOwn(score, "fixed")) return score.fixed;
  if (score.perTag) return countTag(score.perTag) * score.value;
  if (score.perCardType) return countCardType(score.perCardType) * score.value;
  if (score.perMonster) return countMonsterType(score.perMonster) * score.value;
  if (score.perAnyMonster) return state.trophies.length * score.perAnyMonster;
  if (score.perWorld) return state.savedWorlds.length * score.perWorld;
  if (score.uniqueTags) return uniqueTags() * score.uniqueTags;
  if (score.maxIcons) return Math.max(0, ...TAGS.map(countTag)) * score.maxIcons;
  if (score.cardSets) return Math.min(...["Character", "Item", "Event"].map(countCardType)) * score.cardSets;
  if (score.monsterSets) return Math.min(...["Giant", "Beast", "Undead"].map(countMonsterType)) * score.monsterSets;
  return 0;
}

function render() {
  if (!state) {
    renderDeckChoices();
    return;
  }
  els.deckTitle.textContent = isMultiplayer() ? `Player ${state.activePlayerIndex + 1} · ${state.deckName}` : state.deckName;
  els.godRecapImg.src = DECKS[state.deckId].recap;
  els.godRecapImg.alt = `${state.deckName} recap`;
  renderStats();
  renderHand();
  renderReserve();
  renderBattlefield();
  renderLists();
  renderLog();
  renderFinalScore();
  renderFriggChoice();
  els.phaseTitle.textContent = phaseTitle();
  const reserved = state.hand.find((handCard) => handCard.id === state.reservedId) || (state.phase !== "choose" ? state.hand[0] : null);
  els.advanceBtn.disabled = state.phase !== "choose" || !state.reservedId;
  els.mulliganBtn.disabled = state.phase !== "choose" || state.mulliganUsed || state.hand.length !== 4;
  els.mulliganBtn.textContent = state.mulliganUsed ? "Mulligan Used" : "Mulligan";
  els.valhallaBtn.disabled = state.phase !== "reserve" || reserved?.type === "God" || state.pendingFriggChoice;
  els.valhallaBtn.hidden = state.phase === "reserve" && reserved?.type === "God";
  els.banishBtn.disabled = state.phase !== "reserve" || state.pendingFriggChoice;
  els.passMonsterBtn.disabled = state.phase !== "monster";
  els.passWorldBtn.disabled = state.phase !== "world";
  els.advanceBtn.disabled = state.phase === "end" ? false : els.advanceBtn.disabled;
  els.advanceBtn.textContent = state.phase === "end" ? "End Turn" : `Play Other ${Math.max(0, state.hand.length - 1)}`;
  els.advanceBtn.onclick = state.phase === "end" ? endTurn : playThree;
  queueAutomaAction();
}

function renderFriggChoice() {
  if (!state.pendingFriggChoice) {
    if (els.friggChoiceDialog.open) els.friggChoiceDialog.close();
    return;
  }
  const availableCards = state.banished
    .map((cardInExile, index) => ({ cardInExile, index }))
    .filter(({ cardInExile }) => cardInExile.type !== "God");
  els.friggExileChoices.innerHTML = availableCards.length
    ? availableCards.map(({ cardInExile, index }) => `<button class="exile-choice game-card type-${cardInExile.type.toLowerCase()}" type="button" data-frigg-exile="${index}">${cardHtml(cardInExile, cardInExile.cost)}</button>`).join("")
    : `<div class="empty-slot compact">No eligible cards in exile</div>`;
  if (!els.friggChoiceDialog.open) els.friggChoiceDialog.showModal();
}

function resolveFriggVikings() {
  if (!state?.pendingFriggChoice) return;
  state.vikings += 2;
  state.pendingFriggChoice = false;
  addLog("Frigg: +2 Vikings.");
  render();
}

function resolveFriggExile(index) {
  if (!state?.pendingFriggChoice) return;
  const selectedCard = state.banished[index];
  if (!selectedCard || selectedCard.type === "God") return;
  state.banished.splice(index, 1);
  state.valhalla.push(selectedCard);
  state.pendingFriggChoice = false;
  addLog(`Frigg returned ${selectedCard.name} from exile to Valhalla for free.`);
  render();
}

function renderFinalScore() {
  const isFinal = state.phase === "gameover";
  els.finalScoreBreakdown.classList.toggle("is-hidden", !isFinal);
  if (!isFinal) return;
  if (isMultiplayer()) {
    const results = multiplayerFinalScores();
    els.finalScoreBreakdown.innerHTML = `
      <div class="section-head compact"><div><p class="eyebrow">Final Scores</p><h2>${results[0]?.deckName || "Game Over"}</h2></div></div>
      <div class="multiplayer-final-list">
        ${results.map((result, rank) => `
          <article class="multiplayer-final-row ${rank === 0 ? "winner" : ""}">
            <div class="final-player"><span>${rank + 1}</span><strong>Player ${result.playerIndex + 1}</strong><small>${result.deckName}</small></div>
            <div><strong>${result.breakdown.cards}</strong><small>Cards</small></div>
            <div><strong>${result.breakdown.monsters}</strong><small>Monsters</small></div>
            <div><strong>${result.breakdown.worlds}</strong><small>Worlds</small></div>
            <div><strong>${result.breakdown.hero}</strong><small>Hero</small></div>
            <div class="final-total"><strong>${result.total}</strong><small>Total VP</small></div>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }
  const score = scoreBreakdown();
  els.finalScoreBreakdown.innerHTML = `
    <div class="section-head compact"><div><p class="eyebrow">Final Score</p><h2>${totalVp()} VP</h2></div></div>
    <div class="score-breakdown-grid">
      <div><strong>${score.cards}</strong><span>Cards</span></div>
      <div><strong>${score.monsters}</strong><span>Monsters</span></div>
      <div><strong>${score.worlds}</strong><span>Worlds</span></div>
      <div><strong>${score.hero}</strong><span>Hero Power</span></div>
    </div>
  `;
}

function multiplayerFinalScores() {
  const originalIndex = state.activePlayerIndex;
  const originalPhase = state.phase;
  syncActivePlayer();
  const results = state.players.map((player) => {
    loadPlayer(player.index, "gameover");
    const breakdown = scoreBreakdown();
    return {
      playerIndex: player.index,
      deckName: player.deckName,
      breakdown,
      total: breakdown.cards + breakdown.monsters + breakdown.worlds + breakdown.hero,
    };
  }).sort((a, b) => b.total - a.total || a.playerIndex - b.playerIndex);
  loadPlayer(originalIndex, originalPhase);
  return results;
}

function renderStats() {
  els.roundStat.textContent = `${state.round}/${state.maxRounds}`;
  els.vikingsStat.textContent = state.vikings;
  els.combatStat.textContent = state.temp.combatLeft;
  els.vpStat.textContent = totalVp();
  els.deckStat.textContent = `${state.deck.length}/${state.discard.length}`;
}

function renderHand() {
  els.hand.innerHTML = "";
  const cardsToShow = state.phase === "choose" ? state.hand : state.playedThisTurn;
  for (const handCard of cardsToShow) {
    const button = document.createElement("button");
    button.type = "button";
    const godLocked = handCard.type === "God";
    button.className = `game-card type-${handCard.type.toLowerCase()} ${state.reservedId === handCard.id ? "selected" : ""} ${godLocked ? "god-locked" : ""}`;
    button.disabled = state.phase !== "choose" || godLocked;
    if (godLocked) button.title = "God cards cannot be reserved or banished";
    button.onclick = () => selectReserve(handCard.id);
    button.innerHTML = cardHtml(handCard, handCard.type === "God" ? "-" : valhallaCost(handCard));
    els.hand.appendChild(button);
  }
}

function renderReserve() {
  const reserved = state.hand.find((handCard) => handCard.id === state.reservedId) || (state.phase !== "choose" ? state.hand[0] : null);
  if (!reserved) {
    els.reservedSlot.textContent = "No card selected";
    return;
  }
  const cost = reserved.type === "God" ? "not allowed" : valhallaCost(reserved);
  els.reservedSlot.innerHTML = `<strong>${reserved.name}</strong><span class="tagline">${iconHtml(reserved.tag)} ${ongoingHtml(reserved)} ${reserved.type === "God" ? "" : scoreHtml(reserved)} ${reserved.type === "God" ? "" : costHtml(cost)}</span>`;
}

function renderBattlefield() {
  renderAvailableWorlds();
  els.battlefield.innerHTML = "";
  state.battlefield.forEach((lane, laneIndex) => {
    const row = document.createElement("section");
    row.className = "world-lane";
    row.innerHTML = `
      <div class="monster-side">${lane.left.map((monsterCard, monsterIndex) => monsterButton(monsterCard, laneIndex, "left", monsterIndex)).join("")}</div>
      ${worldButton(lane)}
      <div class="monster-side">${lane.right.map((monsterCard, monsterIndex) => monsterButton(monsterCard, laneIndex, "right", monsterIndex)).join("")}</div>
    `;
    els.battlefield.appendChild(row);
  });
}

function renderAvailableWorlds() {
  els.availableWorlds.innerHTML = `
    <div class="available-worlds-head">
      <span>Available Worlds</span>
      <strong>${state.availableWorlds.length}</strong>
    </div>
    <div class="available-world-grid">
      ${state.availableWorlds.length ? state.availableWorlds.map(availableWorldButton).join("") : `<div class="empty-slot compact">No freed Worlds</div>`}
    </div>
  `;
}

function monsterButton(monsterCard, laneIndex, side, monsterIndex) {
  const accessible = isMonsterAccessible(laneIndex, side, monsterIndex);
  const allowedFight = canUseFightOn(monsterCard);
  const disabled = state.phase !== "monster" || state.temp.combatLeft <= 0 || !accessible || !allowedFight;
  return `
    <button class="lane-monster ${accessible ? "accessible" : "blocked"}" type="button" ${disabled ? "disabled" : ""} data-lane="${laneIndex}" data-side="${side}" data-index="${monsterIndex}">
      <div class="card-meta">
        <span>${iconHtml(monsterCard.type)} ${monsterCard.tags.map(iconHtml).join("")}</span>
        ${monsterScoreHtml(monsterCard)}
      </div>
      <strong>${monsterCard.name}</strong>
      ${costHtml(monsterCost(monsterCard))}
    </button>
  `;
}

function worldButton(lane) {
  const visibleWorld = lane.world;
  return `
    <button class="lane-world locked" type="button" disabled>
      <div class="card-meta">
        <span>${visibleWorld.tags.map(iconHtml).join("")}</span>
        <span class="pill">${visibleWorld.vp} VP</span>
        ${costHtml(worldCost(visibleWorld))}
      </div>
      <strong>${visibleWorld.name}</strong>
      ${worldCriteriaHtml(visibleWorld)}
      <small>In battle · ${worldDiscountSummary(visibleWorld)}</small>
    </button>
  `;
}

function availableWorldButton(visibleWorld, worldIndex) {
  const disabled = state.phase !== "world";
  return `
    <button class="lane-world open" type="button" ${disabled ? "disabled" : ""} data-available-world="${worldIndex}">
      <div class="card-meta">
        <span>${visibleWorld.tags.map(iconHtml).join("")}</span>
        <span class="pill">${visibleWorld.vp} VP</span>
        ${costHtml(worldCost(visibleWorld))}
      </div>
      <strong>${visibleWorld.name}</strong>
      ${worldCriteriaHtml(visibleWorld)}
      <small>Available · ${worldDiscountSummary(visibleWorld)}</small>
    </button>
  `;
}

function renderLists() {
  els.valhallaTitle.textContent = `${state.valhalla.length} cards`;
  els.valhalla.innerHTML = iconCounterHtml();
  const recap = document.createElement("div");
  recap.className = "valhalla-recap";
  recap.innerHTML = state.valhalla.length ? "" : `<div class="mini-card">Empty</div>`;
  for (const valhallaCard of state.valhalla) recap.appendChild(valhallaRecapRow(valhallaCard));
  els.valhalla.appendChild(recap);

  const trophyVp = state.trophies.reduce((sum, trophy) => sum + scoreMonster(trophy), 0);
  els.trophyTitle.textContent = `${trophyVp} VP`;
  els.trophies.innerHTML = state.trophies.length || state.savedWorlds.length ? "" : `<div class="mini-card">No Monsters</div>`;
  for (const trophy of state.trophies) {
    els.trophies.appendChild(mini(trophy.name, `${iconHtml(trophy.type)} ${trophy.tags.map(iconHtml).join("")} ${monsterScoreHtml(trophy)}`));
  }
  for (const savedWorld of state.savedWorlds) els.trophies.appendChild(mini(savedWorld.name, `World ${savedWorld.vp} VP`));
}

function iconCounterHtml() {
  const squareCounters = TAGS.map((tag) => counterChip(iconHtml(tag), countTag(tag), tag)).join("");
  const monsterCounters = TYPES.map((type) => counterChip(iconHtml(type), countMonsterType(type), type)).join("");
  const typeCounters = ["Character", "Item", "Event"].map((type) => counterChip(iconHtml(type), countCardType(type), type)).join("");
  return `
    <div class="icon-counter">
      <div class="counter-row">${squareCounters}</div>
      <div class="counter-row">${monsterCounters}</div>
      <div class="counter-row">${typeCounters}</div>
    </div>
  `;
}

function counterChip(icon, value, label) {
  return `<span class="counter-chip" title="${label}">${icon}<strong>${value}</strong></span>`;
}

function valhallaRecapRow(cardInValhalla) {
  const row = document.createElement("div");
  row.className = `valhalla-row type-${cardInValhalla.type.toLowerCase()}`;
  row.innerHTML = `
    <div class="valhalla-type">${iconHtml(cardInValhalla.type)}</div>
    <strong>${cardInValhalla.name}</strong>
    <div class="valhalla-icon">${iconHtml(cardInValhalla.tag) || `<span class="effect-chip muted">-</span>`}</div>
    <div class="valhalla-ongoing">${ongoingHtml(cardInValhalla)}</div>
    <div class="valhalla-score">${scoreHtml(cardInValhalla) || `<span class="effect-chip muted">-</span>`}</div>
  `;
  return row;
}

function isWorldOpen(lane) {
  return lane.left.length === 0 || lane.right.length === 0;
}

function isMonsterAccessible(laneIndex, side, monsterIndex) {
  if (state.temp.fightAny || hasOngoingFightAny()) return true;
  const lane = state.battlefield[laneIndex];
  const target = lane?.[side]?.[monsterIndex];
  if (target && state.temp.fightAnyTypes.includes(target.type)) return true;
  if (side === "left") return monsterIndex === 0;
  return monsterIndex === lane.right.length - 1;
}

function hasOngoingFightAny() {
  return state.valhalla.some((cardInValhalla) => CARD_UI[cardInValhalla.id]?.ongoing?.fightAny);
}

function mini(title, text) {
  const div = document.createElement("div");
  div.className = "mini-card";
  div.innerHTML = `<strong>${title}</strong><span>${text}</span>`;
  return div;
}

function renderDeckChoices() {
  els.deckChoices.innerHTML = "";
  for (const deck of Object.values(DECKS)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `deck-choice ${selectedDeckId === deck.id ? "selected" : ""}`;
    button.disabled = !deck.available;
    button.onclick = () => {
      selectedDeckId = deck.id;
      playerSetup[0].deckId = deck.id;
      renderDeckChoices();
      if (selectedPlayerCount > 1) renderPlayerSetup();
    };
    button.innerHTML = `
      <h3>${deck.name}</h3>
      <img src="${deck.recap}" alt="Recap ${deck.name}">
    `;
    els.deckChoices.appendChild(button);
  }
}

function openDeckViewer() {
  const deck = DECKS[selectedDeckId];
  els.deckDialogTitle.textContent = deck.name;
  els.deckViewer.innerHTML = "";
  for (const deckCard of deck.cards) {
    const article = document.createElement("article");
    article.className = `game-card deck-card type-${deckCard.type.toLowerCase()}`;
    article.innerHTML = cardHtml(deckCard, deckCard.type === "God" ? "-" : deckCard.cost);
    els.deckViewer.appendChild(article);
  }
  els.deckDialog.showModal();
}

function openExileViewer() {
  els.exileViewer.innerHTML = "";
  if (!state?.banished?.length) {
    els.exileViewer.innerHTML = `<div class="empty-slot">No cards in exile</div>`;
  } else {
    for (const exiledCard of state.banished) {
      const article = document.createElement("article");
      article.className = `game-card deck-card type-${exiledCard.type.toLowerCase()}`;
      article.innerHTML = cardHtml(exiledCard, exiledCard.type === "God" ? "-" : exiledCard.cost);
      els.exileViewer.appendChild(article);
    }
  }
  els.exileDialog.showModal();
}

function openMonsterDeckViewer() {
  els.deckDialogTitle.textContent = `Monster Deck (${monsters.length})`;
  els.deckViewer.innerHTML = "";
  for (const monsterCard of monsters) {
    const article = document.createElement("article");
    article.className = "archive-card monster-archive-card";
    article.innerHTML = `
      <div class="card-meta">
        <span>${iconHtml(monsterCard.type)} ${monsterCard.tags.map(iconHtml).join("")}</span>
        ${monsterScoreHtml(monsterCard)}
      </div>
      <h3>${monsterCard.name}</h3>
      ${costHtml(monsterCard.cost)}
    `;
    els.deckViewer.appendChild(article);
  }
  els.deckDialog.showModal();
}

function openWorldDeckViewer() {
  els.deckDialogTitle.textContent = `World Deck (${worlds.length})`;
  els.deckViewer.innerHTML = "";
  for (const worldCard of worlds) {
    const article = document.createElement("article");
    article.className = "archive-card world-archive-card";
    article.innerHTML = `
      <div class="card-meta">
        <span>${worldCard.tags.map(iconHtml).join("")}</span>
        <span class="pill">${worldCard.vp} VP</span>
        ${costHtml(worldCard.cost)}
      </div>
      <h3>${worldCard.name}</h3>
      ${worldCriteriaHtml(worldCard, false)}
    `;
    els.deckViewer.appendChild(article);
  }
  els.deckDialog.showModal();
}

function worldCriteriaHtml(worldToRender, showCounts = true) {
  const criteria = worldToRender.criteria.map((criterion) => {
    const count = showCounts && state ? `<b>-${worldCriterionCount(criterion)}</b>` : "";
    return `<span class="world-criterion" title="${criterion}">${worldCriterionIconHtml(criterion)}${count}</span>`;
  }).join("");
  return `<span class="world-reqs" aria-label="Discount criteria">${criteria}</span>`;
}

function worldCriterionIconHtml(criterion) {
  if (criterion === "MonsterTotal") return `<span class="criterion-symbol monster-total" aria-label="All Monsters"></span>`;
  if (criterion === "CardTotal") return `<span class="criterion-symbol card-total" aria-label="All cards"></span>`;
  if (criterion === "SquareTotal") return `<span class="criterion-symbol square-total" aria-label="All square icons"></span>`;
  if (criterion === "Banished") return `<span class="criterion-symbol banished-card" aria-label="Banished cards"></span>`;
  if (criterion === "MajorityCardType") return `<span class="criterion-symbol card-total labelled">MAX</span>`;
  if (criterion === "MajorityTag") return iconHtml("SquareMax");
  if (criterion === "DifferentTags") return iconHtml("SquareDiff");
  return iconHtml(criterion);
}

function cardHtml(cardToRender, currentCost) {
  return `
    <div class="card-top-zone">
      <div class="card-tags">${iconHtml(cardToRender.tag)}</div>
      <div class="card-ongoing">${ongoingHtml(cardToRender)}</div>
      <div class="card-scoring">${cardToRender.type === "God" ? "" : scoreHtml(cardToRender)}</div>
    </div>
    <h3>${cardToRender.name}</h3>
    <div class="card-bottom-zone">
      <div class="card-cost-cell">${currentCost === "-" ? `` : costHtml(currentCost)}</div>
      <div class="card-instant">${instantHtml(cardToRender)}</div>
    </div>
  `;
}

function iconHtml(name) {
  if (!name) return "";
  const imageIcons = {
    Animal: "animal.png",
    Artefact: "artefact.png",
    Destiny: "destiny.png",
    Equipment: "equipment.png",
    Glory: "glory.png",
    Warrior: "warrior.png",
    Giant: "giant.png",
    Beast: "beast.png",
    Undead: "undead.png",
    Elite: "elite.png",
    HeimdallPower: "heimdall-power.png",
    FightAny: "combat-any-monster.png",
    FightPlusOne: "combat-plus-one.png",
    TyrPower: "tyr-power.png",
    ThorPower: "odin-power.png",
    FreyaPower: "freya-power.jpg",
    MonsterSet: "monster-set.png",
    SquareMax: "square-max.png",
    MonsterMax: "monster-max.png",
    SquareDiff: "square-diff.png",
    MonsterDiff: "monster-diff.png",
  };
  if (imageIcons[name]) {
    return `<img class="game-icon" src="assets/icons/${imageIcons[name]}" title="${name}" alt="${name}">`;
  }
  const meta = {
    Event: ["type event type-rect", ""],
    Character: ["type character type-rect", ""],
    Item: ["type item type-rect", ""],
    God: ["type god", "GD"],
    World: ["special world", "W"],
    Animal: ["tag animal", "A"],
    Artefact: ["tag artefact", "AR"],
    Destiny: ["tag destiny", "D"],
    Equipment: ["tag equipment", "EQ"],
    Glory: ["tag glory", "G"],
    Warrior: ["tag warrior", "W"],
    Giant: ["monster giant", "GI"],
    Beast: ["monster beast", "BE"],
    Undead: ["monster undead", "UN"],
    Elite: ["monster elite", ""],
  }[name] || ["tag unknown", "?"];
  return `<span class="proto-icon ${meta[0]}" title="${name}" aria-label="${name}">${meta[1]}</span>`;
}

function costHtml(value) {
  return `<span class="cost-badge" title="Viking cost"><span class="viking-icon" aria-hidden="true"></span><span class="cost-number">${value}</span></span>`;
}

function ongoingHtml(cardToRender) {
  const ongoing = CARD_UI[cardToRender.id]?.ongoing;
  if (!ongoing) return `<span class="effect-chip muted">-</span>`;
  const parts = [];
  if (ongoing.discount) parts.push(...ongoing.discount.map((icon) => discountHtml(icon)));
  if (ongoing.cardDiscount) parts.push(...ongoing.cardDiscount.map((typeName) => discountHtml(typeName)));
  if (ongoing.worldDiscount) parts.push(`<span class="effect-chip">${iconHtml("World")}<span class="minus">-1</span></span>`);
  if (ongoing.fightAny) parts.push(`<span class="effect-chip" title="Fight any visible Monster">${iconHtml("FightAny")}</span>`);
  if (ongoing.extraFight) parts.push(`<span class="effect-chip image-chip" title="+1 fight">${iconHtml("FightPlusOne")}</span>`);
  if (ongoing.rainbow) parts.push(`<span class="effect-chip rainbow-chip" title="Rainbow icon">ALL</span>`);
  if (ongoing.heimdallPower) parts.push(`<span class="effect-chip image-chip" title="Heimdall power">${iconHtml("HeimdallPower")}</span>`);
  if (ongoing.tyrPower) parts.push(`<span class="effect-chip image-chip" title="Tyr power">${iconHtml("TyrPower")}</span>`);
  if (ongoing.exileBonus) parts.push(`<span class="effect-chip" title="+1 Viking whenever you banish a card">${exileBonusIconHtml()}</span>`);
  else if (ongoing.allTagDiscount) parts.push(`<span class="effect-chip rainbow-chip" title="All square icons">ALL</span>`);
  return parts.join("");
}

function instantHtml(cardToRender) {
  const instant = CARD_UI[cardToRender.id]?.instant;
  if (!instant) return `<span class="effect-chip muted">-</span>`;
  const parts = [];
  if (instant.gain) parts.push(vikingGainHtml(instant.gain));
  if (instant.gainTag) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml(instant.gainTag)}</span>`);
  if (instant.gainMonster) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml(instant.gainMonster)}</span>`);
  if (instant.gainCardType) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml(instant.gainCardType)}</span>`);
  if (instant.multiplier) parts.push(`<span class="effect-chip">x${instant.multiplier}</span>`);
  if (instant.gainUniqueTags) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml("SquareDiff")}</span>`);
  if (instant.gainUniqueMonsterTypes) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml("MonsterDiff")}</span>`);
  if (instant.gainMajority) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml("SquareMax")}</span>`);
  if (instant.gainCardMajority) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${maxCardIconHtml()}</span>`);
  if (instant.gainMixedSet) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${instant.value || 1} ${instant.gainMixedSet.map(iconHtml).join("")}</span>`);
  if (instant.minus) parts.push(`<span class="effect-chip"><span class="minus-plain">-${iconHtml(instant.minus)}</span></span>`);
  if (instant.minusTag) parts.push(`<span class="effect-chip"><span class="minus-plain">-${iconHtml(instant.minusTag)}</span></span>`);
  if (instant.minusCardType) parts.push(`<span class="effect-chip"><span class="minus-plain">-${iconHtml(instant.minusCardType)}</span></span>`);
  if (instant.minusWorlds) parts.push(`<span class="effect-chip"><span class="minus-plain">-${iconHtml("World")}</span></span>`);
  if (instant.gainWorlds) parts.push(`<span class="effect-chip">${vikingSymbolHtml()}x${iconHtml("World")}</span>`);
  if (instant.fightAny) parts.push(`<span class="effect-chip image-chip" title="Fight any visible Monster">${iconHtml("FightAny")}</span>`);
  if (instant.extraFight) parts.push(`<span class="effect-chip image-chip" title="+1 fight">${iconHtml("FightPlusOne")}</span>`);
  if (instant.heimdallPower) parts.push(`<span class="effect-chip image-chip" title="Heimdall power">${iconHtml("HeimdallPower")}</span>`);
  if (instant.tyrPower) parts.push(`<span class="effect-chip image-chip" title="Tyr power">${iconHtml("TyrPower")}</span>`);
  if (instant.thorPower) parts.push(`<span class="effect-chip image-chip" title="Thor power">${iconHtml("ThorPower")}</span>`);
  if (instant.odinPower) parts.push(`<span class="effect-chip" title="Draw and play 1 additional card">${odinPowerIconHtml()}<span class="plus-one-token">+1</span></span>`);
  if (instant.freyaPower) parts.push(`<span class="effect-chip image-chip" title="Freya power">${iconHtml("FreyaPower")}</span>`);
  if (instant.restrictedExtraFight) parts.push(`<span class="effect-chip image-chip" title="+1 fight against this type">${iconHtml("FightPlusOne")}${iconHtml(instant.restrictedExtraFight)}</span>`);
  if (instant.friggChoice) parts.push(`<span class="effect-chip" title="Frigg power">${vikingGainHtml(2)} OR ${friggPowerIconHtml()}</span>`);
  else if (instant.allTagDiscount) parts.push(`<span class="effect-chip rainbow-chip">ALL</span>`);
  return parts.join("");
}

function discountHtml(iconName) {
  return `<span class="effect-chip">${iconHtml(iconName)}<span class="minus">-1</span></span>`;
}

function friggPowerIconHtml() {
  return `<span class="frigg-alert-icon" aria-label="Choose Frigg power">!</span>`;
}

function odinPowerIconHtml() {
  return `<span class="odin-eye-icon" aria-label="Odin power"><span></span></span>`;
}

function exileBonusIconHtml() {
  return `<span class="exile-bonus-icon"><span class="banished-card-mini"></span>${vikingSymbolHtml()}<b>+1</b></span>`;
}

function maxCardIconHtml() {
  return `<span class="max-card-icon" aria-label="Most common card type">MAX</span>`;
}

function vikingGainHtml(value) {
  return `<span class="effect-chip">${vikingSymbolHtml()}+${value}</span>`;
}

function vikingSymbolHtml() {
  return `<span class="viking-icon small" aria-hidden="true"></span>`;
}

function scoreHtml(cardToRender) {
  const score = cardToRender.score;
  if (score.fixed) return `<span class="score-badge">${score.fixed} VP</span>`;
  if (score.perTag) return `<span class="score-badge">${score.value}x ${iconHtml(score.perTag)}</span>`;
  if (score.perCardType) return `<span class="score-badge">${score.value}x ${iconHtml(score.perCardType)}</span>`;
  if (score.perMonster) return `<span class="score-badge">${score.value}x ${iconHtml(score.perMonster)}</span>`;
  if (score.uniqueTags) return `<span class="score-badge">${score.uniqueTags}x ${iconHtml("SquareDiff")}</span>`;
  if (score.perWorld) return `<span class="score-badge">${score.perWorld}x <span class="proto-icon special world" title="Worlds">W</span></span>`;
  if (score.maxIcons) return `<span class="score-badge">${score.maxIcons}x ${iconHtml("SquareMax")}</span>`;
  if (score.maxCardType) return `<span class="score-badge">${score.maxCardType}x ${maxCardIconHtml()}</span>`;
  if (score.maxMonsterType) return `<span class="score-badge">${score.maxMonsterType}x ${iconHtml("MonsterMax")}</span>`;
  if (score.monsterSets) return `<span class="score-badge">${score.monsterSets}x ${iconHtml("MonsterSet")}</span>`;
  return "";
}

function monsterScoreHtml(monsterToRender) {
  const score = monsterToRender.score || {};
  if (Object.hasOwn(score, "fixed")) return `<span class="pill">${score.fixed} VP</span>`;
  if (score.perTag) return `<span class="score-badge">${score.value}x ${iconHtml(score.perTag)}</span>`;
  if (score.perCardType) return `<span class="score-badge">${score.value}x ${iconHtml(score.perCardType)}</span>`;
  if (score.perMonster) return `<span class="score-badge">${score.value}x ${iconHtml(score.perMonster)}</span>`;
  if (score.perAnyMonster) return `<span class="score-badge">${score.perAnyMonster}x ${iconHtml("Giant")}${iconHtml("Beast")}${iconHtml("Undead")}</span>`;
  if (score.perWorld) return `<span class="score-badge">${score.perWorld}x ${iconHtml("World")}</span>`;
  if (score.uniqueTags) return `<span class="score-badge">${score.uniqueTags}x ${iconHtml("SquareDiff")}</span>`;
  if (score.maxIcons) return `<span class="score-badge">${score.maxIcons}x ${iconHtml("SquareMax")}</span>`;
  if (score.cardSets) return `<span class="score-badge">${score.cardSets}x ${["Character", "Item", "Event"].map(iconHtml).join("")}</span>`;
  if (score.monsterSets) return `<span class="score-badge">${score.monsterSets}x ${iconHtml("MonsterSet")}</span>`;
  return `<span class="pill">0 VP</span>`;
}

function monsterScoreText(monsterToRender) {
  const score = monsterToRender.score || {};
  if (Object.hasOwn(score, "fixed")) return `${score.fixed} VP`;
  if (score.perTag) return `${score.value} VP x ${score.perTag}`;
  if (score.perCardType) return `${score.value} VP x ${score.perCardType}`;
  if (score.perMonster) return `${score.value} VP x ${score.perMonster}`;
  if (score.perAnyMonster) return `${score.perAnyMonster} VP x Monster`;
  if (score.perWorld) return `${score.perWorld} VP x World`;
  if (score.uniqueTags) return `${score.uniqueTags} VP x different icon`;
  if (score.maxIcons) return `${score.maxIcons} VP x MAX`;
  if (score.cardSets) return `${score.cardSets} VP x card set`;
  if (score.monsterSets) return `${score.monsterSets} VP x Monster set`;
  return "0 VP";
}

function renderLog() {
  els.log.innerHTML = "";
  for (const entry of state.log.slice(0, 12)) {
    const li = document.createElement("li");
    li.textContent = entry;
    els.log.appendChild(li);
  }
}

function phaseTitle() {
  const player = isMultiplayer() ? `Player ${state.activePlayerIndex + 1}: ` : "";
  if (state.phase === "choose") return `${player}Choose 1 card`;
  if (state.phase === "reserve") return `${player}Valhalla or banish`;
  if (state.phase === "monster") return `${player}Fight a Monster or pass`;
  if (state.phase === "world") return `${player}Protect a World or pass`;
  if (state.phase === "end") return "End the turn";
  return "Game over";
}

function addLog(message) {
  state.log.unshift(message);
}

let automaTimer = null;

function activeAutoma() {
  if (!isMultiplayer()) return null;
  const player = state.players[state.activePlayerIndex];
  return player?.controller === "automa" ? player : null;
}

function queueAutomaAction() {
  if (!activeAutoma() || state.phase === "gameover" || automaTimer) return;
  automaTimer = setTimeout(() => {
    automaTimer = null;
    runAutomaAction();
  }, 450);
}

function runAutomaAction() {
  const automa = activeAutoma();
  if (automa?.deckId === "heimdall") return runHeimdallAutomaAction();
  if (automa?.deckId === "tyr") return runTyrAutomaAction();
}

function runHeimdallAutomaAction() {
  const automa = activeAutoma();
  if (!automa || automa.deckId !== "heimdall") return;
  if (state.phase === "choose") return heimdallAutomaChooseCard();
  if (state.phase === "reserve") return heimdallAutomaResolveReserve();
  if (state.phase === "monster") return heimdallAutomaFight();
  if (state.phase === "world") return heimdallAutomaWorld();
}

function heimdallStrategySignals() {
  const has = (id) => state.valhalla.some((cardInValhalla) => cardInValhalla.id === id);
  return {
    swords: countTag("Equipment"), glory: countTag("Glory"), events: countCardType("Event"),
    undead: countMonsterType("Undead"), undeadEngine: Number(has("dents")) + Number(has("gulltopp")),
    squareFocus: Number(has("meres")) + countHeimdallPowerSources(),
  };
}

function heimdallCardValue(cardToEvaluate) {
  const signals = heimdallStrategySignals();
  const early = state.round <= 3;
  const late = state.round >= 6;
  let value = 2 - cardToEvaluate.cost * 0.45 + scoreCard(cardToEvaluate) * 0.18;
  const earlyCards = ["veille", "dents", "meres", "epee", "gulltopp", "gjall"];
  if (early && earlyCards.includes(cardToEvaluate.id)) value += 3;
  if (cardToEvaluate.tag === "Equipment") value += 0.8 + signals.swords * 0.35;
  if (cardToEvaluate.tag === "Glory") value += 0.7 + signals.glory * 0.3;
  if (cardToEvaluate.type === "Event") value += signals.events * 0.35;
  if (signals.squareFocus && cardToEvaluate.tag) value += 1.2 * signals.squareFocus;
  if (["dents", "gulltopp"].includes(cardToEvaluate.id)) value += signals.undeadEngine * 1.5;
  if (cardToEvaluate.id === "rig") value += late ? 4 + signals.swords : -3;
  if (cardToEvaluate.id === "bifrost") value += late ? 2 + signals.events : -1.5;
  value += automaValhallaEffectBias(cardToEvaluate);
  if (cardToEvaluate.type === "God") value = -100;
  return value;
}

function automaValhallaEffectBias(cardToEvaluate) {
  const instant = CARD_UI[cardToEvaluate.id]?.instant;
  if (!instant) return 1.4;
  const strongInstant = instant.gainMajority || instant.gainUniqueTags || instant.gainUniqueMonsterTypes ||
    instant.extraFight || instant.restrictedExtraFight || instant.fightAny || instant.friggChoice;
  return strongInstant ? -0.8 : 0;
}

function estimatePlayedCardVikings(cardToPlay) {
  const effect = cardToPlay.play || {};
  let gain = effect.gainFlat || 0;
  if (effect.gainTag) gain += countTag(effect.gainTag);
  if (effect.gainMonster) gain += countMonsterType(effect.gainMonster);
  if (effect.gainCardType) gain += countCardType(effect.gainCardType) * (effect.gainMultiplier || 1);
  if (effect.gainUniqueTags) gain += uniqueTags();
  if (effect.gainUniqueMonsterTypes) gain += TYPES.filter((type) => countMonsterType(type) > 0).length;
  if (effect.gainMajority) gain += majorityCount();
  if (effect.gainCardMajority) gain += majorityCardCount();
  if (effect.gainMixedSet) gain += Math.min(...effect.gainMixedSet.map(countGameIcon)) * (effect.value || 1);
  if (effect.gainWorlds) gain += state.savedWorlds.length;
  if (effect.losePerMonster) gain -= countMonsterType(effect.losePerMonster);
  if (effect.losePerTag) gain -= countTag(effect.losePerTag);
  if (effect.losePerCardType) gain -= countCardType(effect.losePerCardType);
  if (effect.losePerWorld) gain -= state.savedWorlds.length;
  return Math.max(0, gain);
}

function estimateTurnFights(playedCards) {
  let fights = 1 + countOngoingExtraFight();
  for (const playedCard of playedCards) {
    const instant = CARD_UI[playedCard.id]?.instant || {};
    if (instant.extraFight) fights += instant.extraFight;
    if (instant.restrictedExtraFight) fights += 1;
  }
  return Math.min(3, fights);
}

function visibleAccessibleMonsters() {
  const options = [];
  state.battlefield.forEach((lane, laneIndex) => {
    ["left", "right"].forEach((side) => lane[side].forEach((monsterCard, monsterIndex) => {
      if (isMonsterAccessible(laneIndex, side, monsterIndex)) options.push(monsterCard);
    }));
  });
  return options;
}

function estimateCombatOpportunity(vikings, fights, monsterValueFn) {
  const options = visibleAccessibleMonsters().map((monsterCard) => ({
    card: monsterCard, cost: monsterCost(monsterCard), value: monsterValueFn(monsterCard),
  })).filter((option) => option.cost <= vikings).sort((a, b) => b.value - a.value);
  let remaining = vikings;
  let total = 0;
  let chosen = 0;
  for (const option of options) {
    if (chosen >= fights || option.cost > remaining) continue;
    remaining -= option.cost;
    total += Math.max(0, option.value);
    chosen += 1;
  }
  return total * 0.32;
}

function evaluateReservedTurn(reservedCard, cardValueFn, monsterValueFn) {
  const playedCards = state.hand.filter((cardInHand) => cardInHand.id !== reservedCard.id);
  const generated = playedCards.reduce((sum, cardToPlay) => sum + estimatePlayedCardVikings(cardToPlay), 0);
  const projectedVikings = state.vikings + generated;
  const reserveCost = valhallaCost(reservedCard);
  const affordable = projectedVikings >= reserveCost;
  const afterReserve = affordable ? projectedVikings - reserveCost : projectedVikings + 2;
  const fights = estimateTurnFights(playedCards);
  const immediateValue = playedCards.reduce((sum, cardToPlay) => sum + estimatePlayedCardVikings(cardToPlay) * 0.45, 0);
  const combatValue = estimateCombatOpportunity(afterReserve, fights, monsterValueFn);
  const affordability = affordable ? 1.2 : -Math.min(5, reserveCost - projectedVikings + 2);
  return {
    card: reservedCard, generated, projectedVikings, reserveCost, affordable, fights,
    value: cardValueFn(reservedCard) + immediateValue + combatValue + affordability,
  };
}

function chooseAutomaPlan(deckId) {
  const player = activeAutoma();
  if (!player) return "";
  let candidates;
  if (deckId === "tyr") {
    const signals = tyrStrategySignals();
    candidates = [
      { name: "Destiny engine", value: signals.destiny * 2 + Number(signals.armour) * 2 },
      { name: "Beast / Gleipnir", value: signals.monsterCounts.Beast * 2 + Number(signals.gleipnir) * 4 },
      { name: `${signals.dominantType} concentration`, value: signals.monsterCounts[signals.dominantType] * 2.4 + Number(signals.oath) * 3 },
    ];
  } else {
    const signals = heimdallStrategySignals();
    candidates = [
      { name: "Equipment", value: signals.swords * 2 },
      { name: "Glory", value: signals.glory * 2 },
      { name: "Undead", value: signals.undead * 1.5 + signals.undeadEngine * 3 },
      { name: "Events", value: signals.events * 2 },
    ];
  }
  candidates.sort((a, b) => b.value - a.value);
  const current = candidates.find((candidate) => candidate.name === player.strategyPlan);
  if (!current || candidates[0].value >= current.value + 2.5) player.strategyPlan = candidates[0].name;
  return player.strategyPlan;
}

function heimdallAutomaChooseCard() {
  const plan = chooseAutomaPlan("heimdall");
  const candidates = state.hand.filter((cardInHand) => cardInHand.type !== "God")
    .map((cardInHand) => evaluateReservedTurn(cardInHand, heimdallCardValue, heimdallMonsterValue))
    .sort((a, b) => b.value - a.value);
  if (!candidates.length) return;
  state.reservedId = candidates[0].card.id;
  addLog(`Heimdall plan: ${plan}. Reserves ${candidates[0].card.name} (${candidates[0].value.toFixed(1)}, +${candidates[0].generated} Vikings projected).`);
  playThree();
}

function heimdallAutomaResolveReserve() {
  const reserved = state.hand[0];
  const cost = valhallaCost(reserved);
  const value = heimdallCardValue(reserved);
  const canBuy = state.vikings >= cost;
  const shouldBanish = !canBuy || (value < 1.5 && state.vikings < 3 && state.availableWorlds.length > 0);
  if (shouldBanish) {
    addLog(`Heimdall Automa banishes ${reserved.name}: resources are more valuable now.`);
    banishReserved();
  } else {
    addLog(`Heimdall Automa sends ${reserved.name} to Valhalla for ${cost}.`);
    sendReservedToValhalla();
  }
}

function heimdallMonsterValue(monsterCard) {
  const cost = monsterCost(monsterCard);
  const signals = heimdallStrategySignals();
  let value = scoreMonster(monsterCard) + monsterCard.tags.length * 0.8 - cost * 1.35;
  if (monsterCard.type === "Undead") value += signals.undeadEngine * 2.5;
  if (monsterCard.tags.includes("Equipment")) value += 1 + signals.swords * 0.3;
  if (monsterCard.tags.includes("Glory")) value += 1 + signals.glory * 0.25;
  if (signals.squareFocus && monsterHasSquareIcon(monsterCard)) value += signals.squareFocus;
  return value;
}

function heimdallAutomaFight() {
  const options = [];
  state.battlefield.forEach((lane, laneIndex) => {
    ["left", "right"].forEach((side) => lane[side].forEach((monsterCard, monsterIndex) => {
      if (isMonsterAccessible(laneIndex, side, monsterIndex) && canUseFightOn(monsterCard) && state.vikings >= monsterCost(monsterCard)) {
        options.push({ laneIndex, side, monsterIndex, card: monsterCard, value: heimdallMonsterValue(monsterCard) });
      }
    }));
  });
  options.sort((a, b) => b.value - a.value);
  if (!options.length || options[0].value < 0.5) {
    addLog("Heimdall Automa passes the Monster phase: no efficient target.");
    return passMonster();
  }
  const choice = options[0];
  addLog(`Heimdall Automa targets ${choice.card.name} (${choice.value.toFixed(1)}).`);
  fightMonster(choice.laneIndex, choice.side, choice.monsterIndex);
}

function heimdallWorldValue(worldCard) {
  const cost = worldCost(worldCard);
  const usefulIcons = worldCard.tags.filter((tag) => ["Equipment", "Glory"].includes(tag)).length;
  let value = worldCard.vp + usefulIcons * 1.2 - cost * 1.4;
  if (cost <= 2) value += 3;
  value += automaExpensiveWorldPenalty(cost);
  return value;
}

function automaExpensiveWorldPenalty(cost) {
  if (cost <= 2) return 0;
  if (cost >= 4 && state.vikings < 8) return -4;
  if (state.vikings - cost < 2) return -2;
  return 0;
}

function heimdallAutomaWorld() {
  const options = state.availableWorlds.map((worldCard, index) => ({
    index, card: worldCard, cost: worldCost(worldCard), value: heimdallWorldValue(worldCard),
  })).filter((option) => state.vikings >= option.cost).sort((a, b) => b.value - a.value);
  if (!options.length || options[0].value < 1) {
    addLog("Heimdall Automa passes World protection: cost is too high.");
    return passWorld();
  }
  const choice = options[0];
  addLog(`Heimdall Automa protects ${choice.card.name} for ${choice.cost} (${choice.value.toFixed(1)}).`);
  protectWorld(choice.index);
}

function runTyrAutomaAction() {
  const automa = activeAutoma();
  if (!automa || automa.deckId !== "tyr") return;
  if (state.phase === "choose") return tyrAutomaChooseCard();
  if (state.phase === "reserve") return tyrAutomaResolveReserve();
  if (state.phase === "monster") return tyrAutomaFight();
  if (state.phase === "world") return tyrAutomaWorld();
}

function tyrStrategySignals() {
  const monsterCounts = Object.fromEntries(TYPES.map((type) => [type, countMonsterType(type)]));
  const has = (id) => state.valhalla.some((cardInValhalla) => cardInValhalla.id === id);
  const dominantType = TYPES.reduce((best, type) => monsterCounts[type] > monsterCounts[best] ? type : best, "Giant");
  return {
    monsterCounts, dominantType, destiny: countTag("Destiny"),
    gleipnir: has("tyr-gleipnir"), oath: has("tyr-oath"), armour: has("tyr-armour"),
  };
}

function tyrCardValue(cardToEvaluate) {
  const signals = tyrStrategySignals();
  const early = state.round <= 3;
  const late = state.round >= 5;
  let value = 2 - cardToEvaluate.cost * 0.45 + scoreCard(cardToEvaluate) * 0.17;
  if (early && ["tyr-death", "tyr-stone", "tyr-thing", "tyr-oath"].includes(cardToEvaluate.id)) value += 3.2;
  if (late && ["tyr-armour", "tyr-hermod", "tyr-vidar", "tyr-duel"].includes(cardToEvaluate.id)) value += 3;
  if (cardToEvaluate.tag === "Destiny") value += 1 + signals.destiny * 0.55;
  if (["tyr-stone", "tyr-armour", "tyr-hermod"].includes(cardToEvaluate.id)) value += signals.destiny * 0.7;
  if (cardToEvaluate.id === "tyr-gleipnir") value += 1.5 + signals.monsterCounts.Beast * 0.7;
  if (cardToEvaluate.id === "tyr-oath") value += Math.max(...Object.values(signals.monsterCounts)) * 0.8;
  if (["tyr-vidar", "tyr-duel"].includes(cardToEvaluate.id)) value += late ? Math.max(...Object.values(signals.monsterCounts)) : -1.5;
  value += automaValhallaEffectBias(cardToEvaluate);
  if (cardToEvaluate.type === "God") value = -100;
  return value;
}

function tyrAutomaChooseCard() {
  const plan = chooseAutomaPlan("tyr");
  const candidates = state.hand.filter((cardInHand) => cardInHand.type !== "God")
    .map((cardInHand) => evaluateReservedTurn(cardInHand, tyrCardValue, tyrMonsterValue))
    .sort((a, b) => b.value - a.value);
  if (!candidates.length) return;
  state.reservedId = candidates[0].card.id;
  addLog(`Tyr plan: ${plan}. Reserves ${candidates[0].card.name} (${candidates[0].value.toFixed(1)}, +${candidates[0].generated} Vikings projected).`);
  playThree();
}

function tyrAutomaResolveReserve() {
  const reserved = state.hand[0];
  const cost = valhallaCost(reserved);
  const value = tyrCardValue(reserved);
  if (state.vikings < cost || (value < 1.5 && state.vikings < 3 && state.availableWorlds.length)) {
    addLog(`Tyr Automa banishes ${reserved.name}: it needs Vikings for the shared board.`);
    banishReserved();
  } else {
    addLog(`Tyr Automa sends ${reserved.name} to Valhalla for ${cost}.`);
    sendReservedToValhalla();
  }
}

function tyrMonsterValue(monsterCard) {
  const signals = tyrStrategySignals();
  const cost = monsterCost(monsterCard);
  let value = scoreMonster(monsterCard) + monsterCard.tags.length * 0.7 - cost * 1.3;
  value += signals.monsterCounts[monsterCard.type] * 2.2;
  if (monsterCard.type === signals.dominantType) value += 1.5;
  if (monsterCard.type === "Beast" && signals.gleipnir) value += 3;
  if (state.temp.tyrPower) value += signals.monsterCounts[monsterCard.type] * 0.7;
  if (monsterCard.tags.includes("Destiny")) value += 0.7 + signals.destiny * 0.2;
  return value;
}

function tyrAutomaFight() {
  const options = [];
  state.battlefield.forEach((lane, laneIndex) => {
    ["left", "right"].forEach((side) => lane[side].forEach((monsterCard, monsterIndex) => {
      if (isMonsterAccessible(laneIndex, side, monsterIndex) && canUseFightOn(monsterCard) && state.vikings >= monsterCost(monsterCard)) {
        const followUps = visibleAccessibleMonsters().filter((other) => other !== monsterCard && other.type === monsterCard.type && monsterCost(other) + monsterCost(monsterCard) <= state.vikings);
        const sequenceBonus = state.temp.combatLeft > 1 && followUps.length ? Math.max(...followUps.map(tyrMonsterValue)) * 0.45 : 0;
        options.push({ laneIndex, side, monsterIndex, card: monsterCard, value: tyrMonsterValue(monsterCard) + sequenceBonus, sequenceBonus });
      }
    }));
  });
  options.sort((a, b) => b.value - a.value);
  if (!options.length || options[0].value < 0.4) {
    addLog("Tyr Automa passes the Monster phase: no efficient target.");
    return passMonster();
  }
  const choice = options[0];
  addLog(`Tyr Automa targets ${choice.card.name} (${choice.card.type}, ${choice.value.toFixed(1)}${choice.sequenceBonus ? ", same-type sequence" : ""}).`);
  fightMonster(choice.laneIndex, choice.side, choice.monsterIndex);
}

function tyrWorldValue(worldCard) {
  const cost = worldCost(worldCard);
  let value = worldCard.vp - cost * 1.35 + (cost <= 2 ? 3 : 0);
  if (worldCard.tags.includes("Destiny")) value += 1.5 + countTag("Destiny") * 0.25;
  value += automaExpensiveWorldPenalty(cost);
  return value;
}

function tyrAutomaWorld() {
  const options = state.availableWorlds.map((worldCard, index) => ({
    index, card: worldCard, cost: worldCost(worldCard), value: tyrWorldValue(worldCard),
  })).filter((option) => state.vikings >= option.cost).sort((a, b) => b.value - a.value);
  if (!options.length || options[0].value < 1) {
    addLog("Tyr Automa passes World protection: cost is too high.");
    return passWorld();
  }
  const choice = options[0];
  addLog(`Tyr Automa protects ${choice.card.name} for ${choice.cost} (${choice.value.toFixed(1)}).`);
  protectWorld(choice.index);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

els.advanceBtn.addEventListener("click", playThree);
els.playerCountControl.addEventListener("click", (event) => {
  const target = event.target.closest("[data-player-count]");
  if (target) setPlayerCount(Number(target.dataset.playerCount));
});
els.playerSetup.addEventListener("change", (event) => {
  const slot = event.target.closest("[data-player-slot]");
  if (!slot) return;
  const playerIndex = Number(slot.dataset.playerSlot);
  if (event.target.matches("[data-player-controller]")) playerSetup[playerIndex].controller = event.target.value;
  if (event.target.matches("[data-player-deck]")) {
    const previousDeck = playerSetup[playerIndex].deckId;
    const swapPlayer = playerSetup.find((player, index) => index !== playerIndex && player.deckId === event.target.value);
    if (swapPlayer) swapPlayer.deckId = previousDeck;
    playerSetup[playerIndex].deckId = event.target.value;
    if (playerIndex === 0) selectedDeckId = event.target.value;
    renderDeckChoices();
  }
  renderPlayerSetup();
});
els.mulliganBtn.addEventListener("click", useMulligan);
els.valhallaBtn.addEventListener("click", sendReservedToValhalla);
els.banishBtn.addEventListener("click", banishReserved);
els.battlefield.addEventListener("click", (event) => {
  const monsterTarget = event.target.closest("[data-lane][data-side][data-index]");
  if (monsterTarget) {
    fightMonster(Number(monsterTarget.dataset.lane), monsterTarget.dataset.side, Number(monsterTarget.dataset.index));
    return;
  }
});
els.availableWorlds.addEventListener("click", (event) => {
  const worldTarget = event.target.closest("[data-available-world]");
  if (worldTarget) protectWorld(Number(worldTarget.dataset.availableWorld));
});
els.passMonsterBtn.addEventListener("click", passMonster);
els.passWorldBtn.addEventListener("click", passWorld);
els.newGameBtn.addEventListener("click", newGame);
els.menuBtn.addEventListener("click", showMenu);
els.startGameBtn.addEventListener("click", newGame);
els.deckViewerBtn.addEventListener("click", openDeckViewer);
els.menuDeckViewerBtn.addEventListener("click", openDeckViewer);
els.monsterDeckViewerBtn.addEventListener("click", openMonsterDeckViewer);
els.worldDeckViewerBtn.addEventListener("click", openWorldDeckViewer);
els.friggVikingsBtn.addEventListener("click", resolveFriggVikings);
els.friggExileChoices.addEventListener("click", (event) => {
  const target = event.target.closest("[data-frigg-exile]");
  if (target) resolveFriggExile(Number(target.dataset.friggExile));
});
els.friggChoiceDialog.addEventListener("cancel", (event) => event.preventDefault());
els.resetScoresBtn.addEventListener("click", openResetScoresConfirmation);
els.cancelResetScoresBtn.addEventListener("click", () => els.resetScoresDialog.close());
els.confirmResetScoresBtn.addEventListener("click", resetHighScores);
els.scoresStatsBtn.addEventListener("click", openScoresAndStatistics);
els.closeScoresStatsBtn.addEventListener("click", () => els.scoresStatsDialog.close());
els.closeDeckBtn.addEventListener("click", () => els.deckDialog.close());
els.rulesBtn.addEventListener("click", () => els.referenceDialog.showModal());
els.closeRulesBtn.addEventListener("click", () => els.referenceDialog.close());
els.exileViewerBtn.addEventListener("click", openExileViewer);
els.closeExileBtn.addEventListener("click", () => els.exileDialog.close());

renderPlayerSetup();

showMenu();
