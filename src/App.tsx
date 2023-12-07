import { useEffect, useState } from "react";
import PokeCards from "./components/cards";
import { Pokemon } from "./pokeInterface";
import { getRandomPokemon } from "./getPokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      for (let i = 0; i < 6; i++) {
        const newPokemon = await getRandomPokemon();
        setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
      }
    };

    fetchRandomPokemons();
  }, []);

  return (
    <>
      <PokeCards pokemons={pokemons}></PokeCards>
    </>
  );
}

export default App;
