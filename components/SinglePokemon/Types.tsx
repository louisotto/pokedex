import { PokemonTypes } from "@/lib/types";
import { Pill } from "../Pill";
import { PillTray } from "./styles";

type TypesProps = {
  types: PokemonTypes[];
};

/** A function that generates the Pills for a Pokemon's type. This is used across the application.
 * @param {Array} types The array of types brought in from the API
 * @returns {JSX} PillTray component with Pill(s)
 */
export const Types = ({ types }: TypesProps) => {
  let pills = types.map(({ type }) => (
    <Pill key={type.name} bg={type.name}>
      {type.name}
    </Pill>
  ));
  return <PillTray role="group">{pills}</PillTray>;
};
