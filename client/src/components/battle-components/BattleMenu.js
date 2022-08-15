function BattleMenu(params) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 place-items-stretch">
      <button
        type="button"
        className="px-5 py-2.5 text-center text-white bg-wine-custom hover:bg-pink-custom focus:ring-8 focus:outline-none focus:ring-white dark:focus:ring-grey-custom"
      >
        Fight
      </button>
      <button
        type="button"
        className="px-5 py-2.5 text-center text-white bg-wine-custom hover:bg-pink-custom focus:ring-8 focus:outline-none focus:ring-white dark:focus:ring-grey-custom"
      >
        Bag
      </button>
      <button
        type="button"
        className="px-5 py-2.5 text-center text-white bg-wine-custom hover:bg-pink-custom focus:ring-8 focus:outline-none focus:ring-white dark:focus:ring-grey-custom"
      >
        Pokemon
      </button>
      <button
        type="button"
        className="px-5 py-2.5 text-center text-white bg-wine-custom hover:bg-pink-custom focus:ring-8 focus:outline-none focus:ring-white dark:focus:ring-grey-custom"
      >
        Run
      </button>
    </div>
  );
}

export default BattleMenu;
