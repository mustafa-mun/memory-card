const baseURL = "https://pokeapi.co/api/v2/pokemon/";
import axios from "axios";

export const getRandomPokemon = async () => {
  try {
    const res = await axios.get(
      `${baseURL}${Math.floor(Math.random() * 1000)}`
    );
    return { name: res.data.name, image: res.data.sprites.front_default };
  } catch (error) {
    console.log(error);
  }
};

getRandomPokemon().then((res) => console.log(res));
