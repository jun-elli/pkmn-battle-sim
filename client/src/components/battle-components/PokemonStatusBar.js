import { useEffect, useState } from "react";
import {
  calculateTotalHp,
  calculateIV,
  calculateStats,
  generateRandomNature,
  calculateEV,
} from "./statsEquations";

function PokemonStatusBar({ name, stats, exp }) {
  const [pkmnOg, setPkmnOg] = useState({});
  const [pkmnMod, setPkmnMod] = useState({});

  useEffect(() => {
    generatePokemon();
  }, [stats]);

  const generatePokemon = () => {
    let temp = []; //hp, atk, def, spatk, spdef, spd

    const nature = generateRandomNature();
    const iv = calculateIV();
    const ev = calculateEV(exp);
    const lvl = 5;

    // temp.push(lvl);
    for (const stat of stats) {
      temp.push(stat.base_stat);
    }
    // temp.push(100);
    // temp.push(nature);
    // temp.push(iv);
    // temp.push(ev);

    setPkmnOg({
      name: name,
      lvl: lvl,
      exp: exp,
      hp: calculateTotalHp(temp[0], iv, ev, lvl),
      atk: calculateStats(temp[1], iv, ev, lvl, nature, "atk"),
      def: calculateStats(temp[2], iv, ev, lvl, nature, "def"),
      spatk: calculateStats(temp[3], iv, ev, lvl, nature, "spatk"),
      spdef: calculateStats(temp[4], iv, ev, lvl, nature, "spdef"),
      spd: calculateStats(temp[5], iv, ev, lvl, nature, "spd"),
      acc: 100,
      nature: nature,
      iv: iv,
      ev: ev,
    });

    // const clone = structuredClone(pkmnOg);
    setPkmnMod({
      name: name,
      lvl: lvl,
      exp: exp,
      hp: calculateTotalHp(temp[0], iv, ev, lvl),
      atk: calculateStats(temp[1], iv, ev, lvl, nature, "atk"),
      def: calculateStats(temp[2], iv, ev, lvl, nature, "def"),
      spatk: calculateStats(temp[3], iv, ev, lvl, nature, "spatk"),
      spdef: calculateStats(temp[4], iv, ev, lvl, nature, "spdef"),
      spd: calculateStats(temp[5], iv, ev, lvl, nature, "spd"),
      acc: 100,
      nature: nature,
      iv: iv,
      ev: ev,
    });
  };

  //Bulbasaur and Torchic have 135 at lvl 5

  return (
    <div>
      <div>NAME: {name}</div>
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
