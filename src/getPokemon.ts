const baseURL = "https://pokeapi.co/api/v2/pokemon/";
import { Pokemon } from "./pokeInterface";
import axios from "axios";

export const getRandomPokemon = async (): Promise<Pokemon> => {
  try {
    const res = await axios.get(
      `${baseURL}${Math.floor(Math.random() * 1000)}`
    );
    if (
      res.data &&
      res.data.id &&
      res.data.name &&
      res.data.sprites &&
      res.data.sprites.front_default
    ) {
      return {
        id: res.data.id,
        name: res.data.name,
        image: res.data.sprites.front_default,
      };
    } else {
      throw new Error("Invalid data structure in API response");
    }
  } catch (error) {
    throw new Error("Failed to fetch random Pokemon");
  }
};
