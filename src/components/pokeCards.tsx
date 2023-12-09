import PokeCard from "./pokeCard";
import { Pokemon } from "../pokeInterface";
import React from "react";

interface PokeCardsProps {
  pokemons: Pokemon[];
  score: number;
  setSeen: React.Dispatch<React.SetStateAction<object>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setNotification: React.Dispatch<React.SetStateAction<string>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  seen: Record<string, boolean>;
  difficulty: string;
}
// Render pokemons on the pokemons array
const PokeCards = (props: PokeCardsProps) => {
  let className = "poke-cards ";

  switch (
    props.difficulty // Decide the classname based on difficulty
  ) {
    case "easy":
      className += "easy";
      break;
    case "normal":
      className += "normal";
      break;
    case "hard":
      className += "hard";
      break;
    default:
      break;
  }

  return (
    <div className={className}>
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
          setNotification={props.setNotification}
        ></PokeCard>
      ))}
    </div>
  );
};

export default PokeCards;
