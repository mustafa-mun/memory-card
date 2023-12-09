import { useEffect, useState } from "react";
import PokeCards from "./components/pokeCards";
import DifficultyForm from "./components/difficultyForm";
import { Pokemon } from "./pokeInterface";
import { getRandomPokemon } from "./utils/helpers/getPokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [score, setScore] = useState(0);
  const [seen, setSeen] = useState({});
  const [difficulty, setDifficulty] = useState("");
  const [notification, setNotification] = useState("");

  const handleRestart = () => {
    // reset game function
    setScore(0);
    setDifficulty("");
    setNotification("");
  };

  useEffect(() => {
    // Fetch cards after difficulty selection
    let loopNumber = 0;
    switch (difficulty) {
      case "easy":
        loopNumber = 6;
        break;
      case "normal":
        loopNumber = 12;
        break;
      case "hard":
        loopNumber = 18;
        break;
      default:
        break;
    }
    // Function to create pokemons deck(array)
    const fetchRandomPokemons = async () => {
      const newPokemons = [];
      for (let i = 0; i < loopNumber; i++) {
        const newPokemon = await getRandomPokemon();
        newPokemons.push(newPokemon);
      }
      setPokemons(newPokemons);
    };

    fetchRandomPokemons();
  }, [difficulty]);
  // If score equals to pokemon decks length
  if (score === pokemons.length && pokemons.length !== 0) {
    // Render win screen
    return (
      <div className="win-box">
        <h1>YOU WIN!</h1>
        <button onClick={handleRestart}>PLAY AGAIN</button>
      </div>
    );
  }
  // If difficulty is chosen and pokemon decks is empty(this means fetching is not finished)
  if (pokemons.length === 0 && difficulty !== "") {
    // Render Loader
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  // If difficulty is chosen
  if (difficulty) {
    return (
      // Render the actual game screen
      <>
        <h1 className="score-text">Score: {score}</h1>
        <PokeCards
          setScore={setScore}
          seen={seen}
          score={score}
          setSeen={setSeen}
          pokemons={pokemons}
          setPokemons={setPokemons}
          difficulty={difficulty}
          setNotification={setNotification}
        ></PokeCards>
        <p className="notification-text">{notification}</p>
        <button onClick={handleRestart}>START AGAIN</button>
      </>
    );
  }
  // Render the difficulty choosing screen
  return <DifficultyForm setDifficulty={setDifficulty}></DifficultyForm>;
}

export default App;
