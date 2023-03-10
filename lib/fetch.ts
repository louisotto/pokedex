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
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(async (response) => {
      // Destructure and return only the information we need
      const { abilities, id, name, species, stats, types, moves } = await response.json();

      return { abilities, id, name, species, stats, types, moves, url: "", image: "", data: "" };
    })
    .then(async (result) => {
      // Get all extra data that we need
      const species = await fetch(result.species.url);
      const speciesData = await species.json();

      // Get all Abilities for a Pokemon
      const abilitiesData = await Promise.all(
        result.abilities.map(async (a) => {
          const response = await fetch(a.ability.url);
          const { name, flavor_text_entries } = await response.json();
          return {
            name,
            hidden: a.is_hidden,
            description: flavor_text_entries[0],
          };
        })
      );

      return {
        ...result,
        abilities: abilitiesData,
        species: {
          description: speciesData.flavor_text_entries[0].flavor_text,
        },
      };
    });

  return data;
}
