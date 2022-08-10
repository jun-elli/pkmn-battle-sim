function ShowPokemonSprite({ sprite }) {
  return (
    <div>
      <div className="mx-auto max-w-md ">
        <img src={sprite} className="h-full w-full" />
      </div>
    </div>
  );
}

export default ShowPokemonSprite;
