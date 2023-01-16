import Image from "next/image";
import { GridProps, Pokemon, TypesProps } from "@/lib/types";
import {
  StyledHomeGrid,
  StyledCard,
  StyledCardImage,
  StyledCardTray,
  StyledCardTitle,
  Number,
  PillTray,
  Pill,
} from "./styles";

/** A function that generates the Pills for a Pokemon's type
 * @param {Array} types The array of types brought in from the API
 * @returns {JSX} PillTray component with Pill(s)
 */
function Types({ types }: TypesProps) {
  let pills = types.map(({ type }) => (
    <Pill key={type.name} bg={type.name}>
      {type.name}
    </Pill>
  ));
  return <PillTray>{pills}</PillTray>;
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
