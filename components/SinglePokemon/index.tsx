import Link from "next/link";
import { Pokemon } from "@/lib/types";
import { Types } from "./Types";
import { Stats } from "./Stats";
import { MainLayout, Hero, Sidebar, Body, HeroBanner, HeroImage, SubHeading } from "./styles";

/** The main presentational component for a single Pokemon
 * @param {Object} Pokemon the Pokemon data from the API
 */
export const SinglePokemon = (pokemon: Pokemon) => (
  <MainLayout>
    <Hero>
      <HeroBanner>
        <span>#{pokemon.id}</span>
        <h1>{pokemon.name}</h1>
      </HeroBanner>

      <HeroImage bg={pokemon.types[0].type.name}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </HeroImage>
    </Hero>
    <Sidebar>
      <h2>Technical Information</h2>
      <SubHeading>Type</SubHeading>
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </Sidebar>
    <Body>
      <Link href="/">Go back</Link>
    </Body>
  </MainLayout>
);
