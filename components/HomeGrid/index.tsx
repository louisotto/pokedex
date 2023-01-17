import Image from "next/image";
import { Pokemon } from "@/lib/types";
import {
  StyledHomeGrid,
  StyledCard,
  StyledCardImage,
  StyledCardTray,
  StyledCardTitle,
  Number,
  FilterTray,
} from "./styles";
import { Types } from "../SinglePokemon/Types";
import { useState, useEffect } from "react";
import { theme } from "../../pages/_app";

type GridProps = {
  /** All 151 Pokemon as an Array. */
  pokemon: Pokemon[];
};

/**
 * A grid displaying the first 151 Pokemon.
 * The grid features basic info: [name, image, types]
 * Each Pokemon links to its own page with further details
 */
export const HomeGrid = ({ pokemon }: GridProps) => {
  const [search, setSearch] = useState<string>("");
  // const [filter, setFilter] = useState<string>("");
  const [visiblePokemon, setVisiblePokemon] = useState(pokemon);
  const typeFilters = Object.keys(theme.colors);

  useEffect(() => {
    let filteredPokemon = pokemon.filter(
      (pokemon) => pokemon.name.includes(search) || pokemon.id.toString() === search
    );
    setVisiblePokemon(filteredPokemon);
  }, [search]);

  // useEffect(() => {
  //   let filteredPokemon = pokemon.filter(
  //     (pokemon) => pokemon.name.includes(search) || pokemon.id.toString() === search
  //   );
  //   setVisiblePokemon(filteredPokemon);
  // }, [filter]);

  function clearSearchFilters() {
    setSearch("");
    setVisiblePokemon(pokemon);
  }

  return (
    <>
      <FilterTray>
        <h2>Filter by name or ID</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button onClick={() => clearSearchFilters()}>Reset</button>
        {/* <select name="" id="" defaultValue="" onChange={(e) => console.log(e.target.value)}>
          <option value="" disabled hidden>
            Choose type
          </option>
          {typeFilters.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select> */}
      </FilterTray>
      <StyledHomeGrid>
        {visiblePokemon.map((p: Pokemon) => {
          return (
            <StyledCard href={`/${p.name}`} key={p.id}>
              <StyledCardImage bg={p.types[0].type.name}>
                <Image src={p.image || ""} alt={`Image of ${p.name}`} width="300" height="300" />
              </StyledCardImage>
              <Number>#{p.id}</Number>
              <StyledCardTray>
                <StyledCardTitle>{p.name}</StyledCardTitle>
                <Types types={p.types} />
              </StyledCardTray>
            </StyledCard>
          );
        })}
      </StyledHomeGrid>
    </>
  );
};
