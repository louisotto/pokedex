import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { PokemonTypes } from "@/lib/types";
import { Pill } from "../Pill";
import { PillTray } from "./styles";

import q from "/public/q.png";

type AbilitiesProps = {
  abilities: [];
};

/** A function that generates the Pills for a Pokemon's type. This is used across the application.
 * @param {Array} abilities The array of abilities brought in from the API
 * @returns {JSX} PillTray component with Pill(s)
 */
export const Abilities = ({ abilities }: AbilitiesProps) => {
  let pills = abilities.map(({ name, description, hidden }) => (
    <Pill key={name} bg="steel" id={name} hidden={hidden}>
      {name} &nbsp;
      <Image src={q} alt="" width="14" />
      <Tooltip anchorId={name} noArrow={true} content={description.flavor_text} place="top" />
    </Pill>
  ));
  return <PillTray role="group">{pills}</PillTray>;
};
