import { useEffect, useState } from "react";
import PokemonStatusBar from "./battle-components/PokemonStatusBar";

function Battleground() {
  const [myPkmn, setMyPkmn] = useState({});
  const [enemy, setEnemy] = useState({});

  useEffect(() => {
    fetchPkmns();
  }, []);

  const fetchPkmns = async () => {
    const [torchicRes, bulbasaurRes] = await Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon/255"),
      fetch("https://pokeapi.co/api/v2/pokemon/1"),
    ]);

    const torchic = await torchicRes.json();
    setMyPkmn(torchic);
    const bulbasaur = await bulbasaurRes.json();
    setEnemy(bulbasaur);
  };

  return (
    <div className="bg-grey-custom grid grid-cols-6 grid-rows-4 h-screen place-items-stretch max-w-4xl mx-auto max-h-full">
      <div className="col-start-1 col-end-4 row-start-1 row-end-2 bg-green-300">
        <PokemonStatusBar baseHp={enemy.stats[0].base_stat} exp={135} />
      </div>
      <div className="col-start-4 col-end-7 row-start-1 row-end-3 bg-green-600 ">
        02
      </div>
      <div className="bg-orange-500 col-start-1 col-end-4 row-start-2 row-end-4">
        03
      </div>
      <div className="bg-orange-300 col-start-4 col-end-7 row-start-3 row-end-4">
        <PokemonStatusBar baseHp={myPkmn.stats[0].base_stat} exp={135} />
      </div>
      <div className="bg-purple-500 col-start-1 col-end-5 row-start-4 row-end-5">
        05
      </div>
      <div className="bg-purple-300 col-start-5 col-end-7">06</div>
    </div>
  );
}

export default Battleground;
