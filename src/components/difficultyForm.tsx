interface DifficultyFormProps {
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
}

const DifficultyForm = (props: DifficultyFormProps) => {
  return (
    <div className="difficulty-form-container">
      <h1 className="memory-game-text">MEMORY GAME</h1>
      <div className="difficulty-form">
        <button onClick={() => props.setDifficulty("easy")}>EASY</button>
        <button onClick={() => props.setDifficulty("normal")}>NORMAL</button>
        <button onClick={() => props.setDifficulty("hard")}>HARD</button>
      </div>
    </div>
  );
};

export default DifficultyForm;
