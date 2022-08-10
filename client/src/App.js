import "./App.css";
import ChooseGameMode from "./components/ChooseGameMode";
import Header from "./components/Header";
import { useState } from "react";
import Battleground from "./components/Battleground";

function App() {
  const [isBattle, setIsBattle] = useState(false);
  return (
    <div>
      <Header />

      {isBattle ? (
        <Battleground />
      ) : (
        <ChooseGameMode setIsBattle={setIsBattle} />
      )}
    </div>
  );
}

export default App;
