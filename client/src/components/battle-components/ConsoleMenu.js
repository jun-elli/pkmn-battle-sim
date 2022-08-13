import { useState } from "react";

function ConsoleMenu({}) {
  // myMoves, enemyMoves
  const [myMoves, setMyMoves] = useState({});
  const [enemyMoves, setEnemyMoves] = useState({});

  return (
    <div className="grid grid-cols-6">
      <div className="col-start-1 col-end-5">Console</div>
      <div className="col-start-5 col-end-7">Menu</div>
    </div>
  );
}
export default ConsoleMenu;
