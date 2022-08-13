import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Battleground";
import { generatePokemon } from "./statsEquations";

function PokemonStatusBar({ isEnemy }) {
  const [pkmnOg, setPkmnOg] = useState({});
  const [pkmnMod, setPkmnMod] = useState({});

  const {
    myPokemon,
    enemy,
    pokemonWithStats,
    pokemonWithModStats,
    enemyWithStats,
    enemyWithModStats,
  } = useContext(PokemonContext);

  useEffect(() => {
    if (isEnemy) {
      setPkmnOg(enemyWithStats);
      setPkmnMod(enemyWithModStats);
    } else {
      setPkmnOg(pokemonWithStats);
      setPkmnMod(pokemonWithModStats);
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
            HP: {pkmnMod.hp} / {pkmnOg && pkmnOg.hp}
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
