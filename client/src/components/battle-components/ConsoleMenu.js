import { useState, useContext } from "react";
import { PokemonContext } from "../Battleground";
import BattleMenu from "./BattleMenu";

function ConsoleMenu({}) {
  // myMoves, enemyMoves
  const [myMoves, setMyMoves] = useState({});
  const [enemyMoves, setEnemyMoves] = useState({});

  const { myPokemon, enemy } = useContext(PokemonContext);

  return (
    <div className="grid grid-cols-6 border-8 border-pale-custom">
      <div className="col-start-1 col-end-5 border-r-4">Console</div>
      <div className="col-start-5 col-end-7 grid place-items-stretch">
        <BattleMenu />
      </div>
    </div>
  );
}
export default ConsoleMenu;
