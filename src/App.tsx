import { useEffect, useState } from "react";
import PokeCards from "./components/pokeCards";
import { Pokemon } from "./pokeInterface";
import { getRandomPokemon } from "./getPokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [score, setScore] = useState(0);
  const [seen, setSeen] = useState({});

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      for (let i = 0; i < 6; i++) {
        // Loop number will be decided with game difficulty
        const newPokemon = await getRandomPokemon();
        setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
      }
    };

    fetchRandomPokemons();
  }, []);

  return (
    <>
      <h1>Score: {score}</h1>
      <PokeCards
        setScore={setScore}
        seen={seen}
        score={score}
        setSeen={setSeen}
        pokemons={pokemons}
        setPokemons={setPokemons}
      ></PokeCards>
    </>
  );
}

export default App;
