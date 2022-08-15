import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Battleground";

function PokemonStatusBar({ isEnemy }) {
  const [pkmnOg, setPkmnOg] = useState({});

  const { pokemonWithStats, enemyWithStats } = useContext(PokemonContext);

  useEffect(() => {
    if (isEnemy) {
      setPkmnOg(enemyWithStats);
    } else {
      setPkmnOg(pokemonWithStats);
    }
  }, []);

  //Bulbasaur and Torchic have 135 at lvl 5

  return (
    <div>
      <div>NAME: {pkmnOg && pkmnOg.name}</div>
      {pkmnOg && (
        <div>
          <div>LVL: {pkmnOg.lvl}</div>
          <div>
            HP: {pkmnOg.hp} / {pkmnOg && pkmnOg.hp}
          </div>
          <div>Pokemon atk: {pkmnOg && pkmnOg.atk}</div>
          <div>Pokemon def: {pkmnOg && pkmnOg.def}</div>
          <div>Pokemon spatk: {pkmnOg && pkmnOg.spatk}</div>
          <div>Pokemon spdef: {pkmnOg && pkmnOg.spdef}</div>
          <div>Pokemon spd: {pkmnOg && pkmnOg.spd}</div>
        </div>
      )}
    </div>
  );
}

export default PokemonStatusBar;
