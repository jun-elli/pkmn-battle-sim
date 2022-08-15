import { useState, useContext } from "react";
import { PokemonContext } from "../Battleground";

function ConsoleMenu({}) {
  // myMoves, enemyMoves
  const [myMoves, setMyMoves] = useState({});
  const [enemyMoves, setEnemyMoves] = useState({});

  const { pokemonWithStats, enemyWithStats } = useContext(PokemonContext);

  return (
    <div className="grid grid-cols-6 border-4">
      <div className="col-start-1 col-end-5 border-r-4">Console</div>
      <div className="col-start-5 col-end-7">Menu</div>
    </div>
  );
}
export default ConsoleMenu;
