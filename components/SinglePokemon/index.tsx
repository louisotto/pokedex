import Link from "next/link";
import { Pokemon } from "@/lib/types";
import { Types } from "./Types";

/** The main presentational component for a single Pokemon
 * @param {Object} Pokemon the Pokemon data from the API
 */
export const SinglePokemon = (pokemon: Pokemon) => (
  <main>
    <h1>{pokemon.name}</h1>
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
      />
    </div>
    <Types types={pokemon.types} />
    <Link href="/">Go back</Link>
  </main>
);
