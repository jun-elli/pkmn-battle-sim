import { calculateTotalHp } from "./statsEquations";

function PokemonStatusBar({ baseHp, exp }) {
  //Bulbasaur and Torchic have 135 at lvl 5

  return (
    <div>
      <div>Pokemon name</div>
      <div>Pokemon level: 5</div>
      <div>Pokemon hp / {calculateTotalHp(baseHp, exp)}</div>
    </div>
  );
}

export default PokemonStatusBar;
