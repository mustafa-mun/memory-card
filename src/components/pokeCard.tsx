import { Pokemon } from "../pokeInterface";
import React from "react";
import { shuffle } from "../getPokemon";

interface PokeProps {
  id: number;
  name: string;
  image: string;
  setSeen: React.Dispatch<React.SetStateAction<object>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  pokemons: Pokemon[];
  seen: Record<string, boolean>;
  score: number;
}

const PokeCard = (props: PokeProps) => {
  const handleClick = (event: React.MouseEvent) => {
    const ID = event.currentTarget.id;
    if (!props.seen[ID]) {
      props.setSeen((prevSeen) => ({
        ...prevSeen,
        [ID]: true,
      }));
      props.setScore(() => props.score + 1);
      const shuffled = shuffle(props.pokemons);
      props.setPokemons(shuffled);
      props.setScore(0);
    }
  };

  return (
    <div id={props.id.toString()} onClick={handleClick} className="poke-card">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default PokeCard;
