function ChooseGameMode({ setIsBattle }) {
  const startBattle = () => {
    setIsBattle(true);
  };

  return (
    <div className="bg-grey-custom grid h-screen place-items-center max-w-4xl mx-auto max-h-full">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={startBattle}
      >
        Start game
      </button>
    </div>
  );
}

export default ChooseGameMode;
