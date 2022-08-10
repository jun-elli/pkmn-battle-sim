const calculateIV = () => {
  return Math.random() * 31;
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

export { calculateIV, calculateEV, calculateTotalHp };
