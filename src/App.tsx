import React, { useEffect, useState } from "react";
import PokeCard from "./components/pokeCard";
import { Pokemon } from "./pokeInterface";
import { getRandomPokemon } from "./getPokemon";

function App() {
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    getRandomPokemon().then((newPokemon) => {
      setPokemon(newPokemon);
    });
  }, []);

  const handlePokemonChange = () => {
    getRandomPokemon().then((newPokemon) => {
      setPokemon(newPokemon);
    });
  };

  return (
    <>
      {pokemon && (
        <PokeCard name={pokemon.name} image={pokemon.image}></PokeCard>
      )}
      <button onClick={handlePokemonChange}>CHANGE POKEMON</button>
    </>
  );
}

export default App;
