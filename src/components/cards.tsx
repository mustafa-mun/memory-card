import PokeCard from "./pokeCard";
import { Pokemon } from "../pokeInterface";

interface CardsProps {
  pokemons: Pokemon[];
}
// Render pokemons on the pokemons array
const PokeCards = (props: CardsProps) => {
  return (
    <div className="poke-cards normal">
      {props.pokemons.map((poke) => (
        <PokeCard key={poke.id} name={poke.name} image={poke.image}></PokeCard>
      ))}
    </div>
  );
};

export default PokeCards;
