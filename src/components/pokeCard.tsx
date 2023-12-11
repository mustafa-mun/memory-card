import { Pokemon } from "../pokeInterface";
import React from "react";
import { shuffle } from "../utils/helpers/getPokemon";

interface PokeProps {
  id: number;
  name: string;
  image: string;
  setSeen: React.Dispatch<React.SetStateAction<object>>;
  setNotification: React.Dispatch<React.SetStateAction<string>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  pokemons: Pokemon[];
  seen: Record<string, boolean>;
  score: number;
}

const PokeCard = (props: PokeProps) => {
  const handleClick = (event: React.MouseEvent) => {
    const ID = event.currentTarget.id;
    // If clicked pokemon is not seen
    if (!props.seen[ID]) {
      // Set clicked pokemon as seen
      props.setSeen((prevSeen) => ({
        ...prevSeen,
        [ID]: true,
      }));
      props.setScore(() => props.score + 1); // Increment the score
      // Shuffle the deck(array)
      const shuffled = shuffle(props.pokemons);
      props.setPokemons(shuffled);
    } else {
      // Clicked pokemon is seen before, player lost the game
      const unclickeds = props.pokemons.filter(
        // Unclicked pokemons
        (pokemon) => !props.seen[pokemon.id]
      );
      console.log(unclickeds);

      props.setNotification("YOU LOST! START AGAIN");
      setTimeout(() => {
        props.setNotification("");
      }, 5000);
      props.setScore(0); // Reset the score
      props.setSeen({}); // Reset the seen map
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
