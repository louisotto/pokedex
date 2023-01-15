import { Pokemon } from "./types";

/**
 * This function fetches the first 151 Pokemon from the PokeAPI and returns them as an array of Objects.
 * @returns {Array} Returns array of the first 151 Pokemon
 */
export async function fetchAllPokemon(): Promise<Pokemon[]> {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then(({ results }) => {
      // As the API only retrieves a `name` and `url`, we need to make a call
      // for each Pokemon to get their full descriptions from their `url` value.
      let promisesArray = results.map((result: Pokemon) => fetch(result.url).then((response) => response.json()));
      return Promise.all(promisesArray);
    });

  return data;
}

/**
 * This function fetches a single Pokemon and all of it's corresponding data, and returns it as an {Object}
 * @param {number} id The ID of the Pokemon
 * @returns {Pokemon} An object with all of the data for a Pokemon
 */
export async function fetchPokemon(id: number | string): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.json());

  return data;
}
