// import { Pokemon } from "../pokeInterface";

interface PokeProps {
  name: string;
  image: string;
}

const PokeCard = (props: PokeProps) => {
  return (
    <div className="poke-card">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default PokeCard;
