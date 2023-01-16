import { Pokemon } from "@/lib/types";
import { StyledHomeGrid, StyledCard, StyledCardImage } from "./styles";

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
              <img src={p.image} alt="" />
            </StyledCardImage>
            <p>#{p.id}</p>
            <p>{p.name}</p>
          </StyledCard>
        );
      })}
    </StyledHomeGrid>
  );
};
