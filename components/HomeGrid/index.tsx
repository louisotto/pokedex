import Image from "next/image";
import { Pokemon } from "@/lib/types";
import { StyledHomeGrid, StyledCard, StyledCardImage, StyledCardTray, StyledCardTitle, Number } from "./styles";
import { Types } from "../SinglePokemon/Types";

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
  return (
    <StyledHomeGrid>
      {pokemon.map((p: Pokemon) => {
        return (
          <StyledCard href={`/${p.name}`} key={p.id}>
            <StyledCardImage bg={p.types[0].type.name}>
              <Image src={p.image} alt={`Image of ${p.name}`} width="300" height="300" />
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
  );
};
