import { Pokemon, PokemonTypes } from "@/lib/types";
import { StyledHomeGrid, StyledCard, StyledCardImage, StyledCardTray, Number, Pill } from "./styles";

type GridProps = {
  /** All 151 Pokemon as an Array. */
  pokemon: Pokemon[];
};

type TypesProps = {
  types: PokemonTypes[];
};

function Types({ types }: TypesProps) {
  let pills = types.map(({ type }) => <Pill bg={type.name}>{type.name}</Pill>);
  return <div>{pills}</div>;
}

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
              <img src={p.image} alt={`Image of ${p.name}`} />
            </StyledCardImage>
            <Number>#{p.id}</Number>
            <StyledCardTray>
              <p>{p.name}</p>
              <Types types={p.types} />
            </StyledCardTray>
          </StyledCard>
        );
      })}
    </StyledHomeGrid>
  );
};
