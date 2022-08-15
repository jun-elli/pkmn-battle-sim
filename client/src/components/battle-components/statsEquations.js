const calculateIV = () => {
  return Math.floor(Math.random() * 31 + 1);
};

const calculateEV = (exp) => {
  //EV are equal to squareRoot(exp) / 4
  return Math.sqrt(exp) / 4;
};

const calculateTotalHp = (base, iv, ev, lvl) => {
  return Math.floor(
    0.01 * (2 * base + iv + Math.floor(0.25 * ev) * lvl) + lvl + 10
  );
};

const generateRandomNature = () => {
  return Math.floor(Math.random() * 24 + 1);
};
// atk, def, spatk, spdef, spd, acc
const natures = [
  { name: "Hardy" },
  { name: "Lonely", atk: 1.1, def: 0.9 },
  { name: "Brave", atk: 1.1, spd: 0.9 },
  { name: "Adamant", atk: 1.1, spatk: 0.9 },
  { name: "Naughty", atk: 1.1, spdef: 0.9 },
  { name: "Bold", def: 1.1, atk: 0.9 },
  { name: "Docile" },
  { name: "Relaxed", def: 1.1, spd: 0.9 },
  { name: "Impish", def: 1.1, spatk: 0.9 },
  { name: "Lax", def: 1.1, spdef: 0.9 },
  { name: "Timid", spd: 1.1, atk: 0.9 },
  { name: "Hasty", spd: 1.1, def: 0.9 },
  { name: "Serious" },
  { name: "Jolly", spd: 1.1, spatk: 0.9 },
  { name: "Naive", spd: 1.1, spdef: 0.9 },
  { name: "Modest", spatk: 1.1, atk: 0.9 },
  { name: "Mild", spatk: 1.1, def: 0.9 },
  { name: "Quiet", spatk: 1.1, spd: 0.9 },
  { name: "Bashful" },
  { name: "Rash", spatk: 1.1, spdef: 0.9 },
  { name: "Calm", spdef: 1.1, atk: 0.9 },
  { name: "Gentle", spdef: 1.1, def: 0.9 },
  { name: "Sassy", spdef: 1.1, spd: 0.9 },
  { name: "Careful", spdef: 1.1, spatk: 0.9 },
  { name: "Quirky" },
];

const calculateStats = (base, iv, ev, lvl, nature, stat) => {
  // (floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + 5) x Nature

  let natureEffect = natures[nature][stat] ? natures[nature][stat] : 1;

  return Math.floor(
    Math.floor(0.01 * ((2 * base + iv + Math.floor(0.25 * ev)) * lvl) + 5) *
      natureEffect
  );
};

const learnLatestsMoves = (moves, lvl) => {
  const learned = [];

  let m = moves.filter((m) => {
    let i = m.version_group_details.findIndex(
      (v) => v.version_group.name === "ruby-sapphire"
    );
    if (i !== -1) {
      let rsMove = m.version_group_details[i];
      if (rsMove.level_learned_at <= lvl && rsMove.level_learned_at !== 0) {
        return true;
      }
    }
    return false;
  });

  for (let i = 0; i < 4; i++) {
    learned.push(m.pop());
  }

  return learned;
};

// Redo function to become a constructor
const generatePokemon = (apiPokemon, lvl, exp) => {
  let temp = []; //hp, atk, def, spatk, spdef, spd

  const nature = generateRandomNature();
  const iv = calculateIV();
  const ev = calculateEV(exp);

  for (const stat of apiPokemon.stats) {
    temp.push(stat.base_stat);
  }

  const pokemon = {
    apiInfo: apiPokemon,
    name: apiPokemon.name,
    lvl: lvl,
    exp: exp,
    nature: {
      index: nature,
      more: natures[nature],
    },
    iv: iv,
    ev: ev,
    isAlive: true,
    conditions: {
      isBurned: false,
      isFrozen: false,
      isParalyzed: false,
      isPoisoned: false,
      isAsleep: false,
    },
    stats: {
      actual: {
        hp: calculateTotalHp(temp[0], iv, ev, lvl),
        atk: calculateStats(temp[1], iv, ev, lvl, nature, "atk"),
        def: calculateStats(temp[2], iv, ev, lvl, nature, "def"),
        spatk: calculateStats(temp[3], iv, ev, lvl, nature, "spatk"),
        spdef: calculateStats(temp[4], iv, ev, lvl, nature, "spdef"),
        spd: calculateStats(temp[5], iv, ev, lvl, nature, "spd"),
        acc: 100,
      },
      modified: {
        hp: calculateTotalHp(temp[0], iv, ev, lvl),
        atk: calculateStats(temp[1], iv, ev, lvl, nature, "atk"),
        def: calculateStats(temp[2], iv, ev, lvl, nature, "def"),
        spatk: calculateStats(temp[3], iv, ev, lvl, nature, "spatk"),
        spdef: calculateStats(temp[4], iv, ev, lvl, nature, "spdef"),
        spd: calculateStats(temp[5], iv, ev, lvl, nature, "spd"),
        acc: 100,
      },
    },
    moves: {
      learned: learnLatestsMoves(apiPokemon.moves, lvl),
      all: apiPokemon.moves,
    },
    // Mising fucntions
    do: {},
    sprites: apiPokemon.sprites,
  };
  return pokemon;
};

export {
  calculateIV,
  calculateEV,
  calculateTotalHp,
  calculateStats,
  generateRandomNature,
  generatePokemon,
};
