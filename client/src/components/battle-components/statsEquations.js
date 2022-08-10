const calculateIV = () => {
  return Math.floor(Math.random() * 31 + 1);
};

const calculateEV = (exp) => {
  //EV are equal to squareRoot(exp) / 4
  return Math.sqrt(exp) / 4;
};

const calculateTotalHp = (base, exp) => {
  let iv = calculateIV();
  let ev = calculateEV(exp);
  return Math.floor(
    0.01 * (2 * base + iv + Math.floor(0.25 * ev) * 5) + 5 + 10
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

const calculateStats = (base, exp, lvl, nature, stat) => {
  // (floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + 5) x Nature
  let iv = calculateIV();
  let ev = calculateEV(exp);

  let natureEffect = natures[nature][stat] ? natures[nature][stat] : 1;

  return Math.floor(
    Math.floor(0.01 * ((2 * base + iv + Math.floor(0.25 * ev)) * lvl) + 5) *
      natureEffect
  );
};

export {
  calculateIV,
  calculateEV,
  calculateTotalHp,
  calculateStats,
  generateRandomNature,
};
