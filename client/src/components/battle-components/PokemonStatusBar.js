function PokemonStatusBar({ baseHp }) {
  const calculateTotalHp = (base) => {
    // floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + Level + 10

    // IV are between 0 and 31
    let iv = Math.random() * 31;

    //EV are equal to squareRoot(exp) / 4
    //Bulbasaur has 135 at lvl 5
    let ev = Math.sqrt(135) / 4;

    return Math.floor(
      0.01 * (2 * base + iv + Math.floor(0.25 * ev) * 5) + 5 + 10
    );
  };

  return (
    <div>
      <div>Pokemon name</div>
      <div>Pokemon level: 5</div>
      <div>Pokemon hp / {calculateTotalHp(baseHp)}</div>
    </div>
  );
}

export default PokemonStatusBar;
