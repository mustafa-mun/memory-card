import { useEffect, useState } from "react";
import PokeCards from "./components/pokeCards";
import DifficultyForm from "./components/difficultyForm";
import { Pokemon } from "./pokeInterface";
import { getRandomPokemon } from "./getPokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [score, setScore] = useState(0);
  const [seen, setSeen] = useState({});
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
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

    const fetchRandomPokemons = async () => {
      for (let i = 0; i < loopNumber; i++) {
        const newPokemon = await getRandomPokemon();
        setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
      }
    };

    fetchRandomPokemons();
  }, [difficulty]);

  return (
    <>
      <h1>Score: {score}</h1>
      {!difficulty ? (
        <DifficultyForm setDifficulty={setDifficulty}></DifficultyForm>
      ) : (
        <PokeCards
          setScore={setScore}
          seen={seen}
          score={score}
          setSeen={setSeen}
          pokemons={pokemons}
          setPokemons={setPokemons}
          difficulty={difficulty}
        ></PokeCards>
      )}
    </>
  );
}

export default App;
