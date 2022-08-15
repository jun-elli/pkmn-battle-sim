import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Battleground";

function PokemonStatusBar({ isEnemy }) {
  const [pokemon, setPokemon] = useState(null);

  const { myPokemon, enemy } = useContext(PokemonContext);

  useEffect(() => {
    isEnemy ? setPokemon(enemy) : setPokemon(myPokemon);
  }, []);

  //Bulbasaur and Torchic have 135 at lvl 5

  return (
    <div>
      <div>NAME: {pokemon && pokemon.name}</div>
      {pokemon && (
        <div>
          <div>LVL: {pokemon.lvl}</div>
          <div>
            HP: {pokemon.stats.modified.hp} /{" "}
            {pokemon && pokemon.stats.actual.hp}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonStatusBar;
