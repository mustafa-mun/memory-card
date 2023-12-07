import PokeCard from "./pokeCard";
import { Pokemon } from "../pokeInterface";
import React from "react";

interface CardsProps {
  pokemons: Pokemon[];
  score: number;
  setSeen: React.Dispatch<React.SetStateAction<object>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  seen: Record<string, boolean>;
}
// Render pokemons on the pokemons array
const PokeCards = (props: CardsProps) => {
  return (
    <div className="poke-cards normal">
      {props.pokemons.map((poke) => (
        <PokeCard
          key={poke.id}
          pokemons={props.pokemons}
          id={poke.id}
          name={poke.name}
          image={poke.image}
          seen={props.seen}
          setSeen={props.setSeen}
          setScore={props.setScore}
          score={props.score}
          setPokemons={props.setPokemons}
        ></PokeCard>
      ))}
    </div>
  );
};

export default PokeCards;
