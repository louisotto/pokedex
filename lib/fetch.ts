import { Pokemon } from "./types";

export async function fetchAllPokemon() {
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
