import {
  calculateTotalHp,
  calculateIV,
  calculateStats,
  generateRandomNature,
} from "./statsEquations";

function PokemonStatusBar({ baseHp, exp }) {
  //Bulbasaur and Torchic have 135 at lvl 5
  const nature = generateRandomNature();

  return (
    <div>
      <div>Pokemon name</div>
      <div>Pokemon level: 5</div>
      <div>Pokemon hp / {calculateTotalHp(baseHp, exp)}</div>
      <div>Pokemon atk: {calculateStats(49, exp, 5, nature, "atk")}</div>
    </div>
  );
}

export default PokemonStatusBar;
