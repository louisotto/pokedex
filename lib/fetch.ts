import { Pokemon } from "./types";

/**
 * This function fetches the first 151 Pokemon from the PokeAPI and returns them as an array of Objects.
 * @returns {Array} Returns array of the first 151 Pokemon
 */
export async function fetchAllPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then(async ({ results }) => {
      // As the API only retrieves a `name` and `url`, we need to make a call
      // for each Pokemon to get the information we want
      const pokeData: Pokemon[] = await Promise.all(
        results.map(async (p: Pokemon, key: number) => {
          const response = await fetch(p.url);
          const { name, id, types }: Pokemon = await response.json();
          return {
            name,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            types,
          };
        })
      );

      return pokeData;
    });

  return data;
}

/**
 * This function fetches a single Pokemon and all of it's corresponding data, and returns it as an {Object}
 * @param {number} id The ID of the Pokemon
 * @returns {Pokemon} An object with all of the data for a Pokemon
 */
export async function fetchPokemon(id: string | string[] | undefined): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.json());

  return data;
}
