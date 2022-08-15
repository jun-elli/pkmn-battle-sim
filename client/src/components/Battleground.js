import React, { useEffect, useState } from "react";
import ConsoleMenu from "./battle-components/ConsoleMenu";
import PokemonStatusBar from "./battle-components/PokemonStatusBar";
import ShowPokemonSprite from "./battle-components/ShowPokemonSprite";
import { generatePokemon } from "./battle-components/statsEquations";

export const PokemonContext = React.createContext();

function Battleground() {
  // raw data from API
  const [myPokemon, setMyPokemon] = useState(null);
  const [enemy, setEnemy] = useState(null);

  useEffect(() => {
    fetchPkmns();
  }, []);

  const fetchPkmns = async () => {
    const [myRes, enemyRes] = await Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon/255"),
      fetch("https://pokeapi.co/api/v2/pokemon/1"),
    ]);

    const myPkmn = await myRes.json();
    let m = generatePokemon(myPkmn, 5, 135);
    setMyPokemon(m);

    const enemyPkmn = await enemyRes.json();
    let e = generatePokemon(enemyPkmn, 5, 135);
    setEnemy(e);
  };

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        enemy,
      }}
    >
      <div className="bg-grey-custom grid grid-cols-6 grid-rows-4 h-screen place-items-stretch max-w-4xl mx-auto max-h-full">
        <div className="col-start-1 col-end-4 row-start-1 row-end-2 bg-green-300">
          {enemy && <PokemonStatusBar isEnemy={true} />}
        </div>
        <div className="col-start-4 col-end-7 row-start-1 row-end-3 bg-green-600 ">
          {enemy && <ShowPokemonSprite sprite={enemy.sprites.front_default} />}
        </div>
        <div className="bg-orange-500 col-start-1 col-end-4 row-start-2 row-end-4">
          {myPokemon && (
            <ShowPokemonSprite sprite={myPokemon.sprites.back_default} />
          )}
        </div>
        <div className="bg-orange-300 col-start-4 col-end-7 row-start-3 row-end-4">
          {myPokemon && <PokemonStatusBar isEnemy={false} />}
        </div>
        <div className="bg-purple-500 grid place-items-stretch col-start-1 col-end-7 row-start-4 row-end-5">
          <ConsoleMenu />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default Battleground;
