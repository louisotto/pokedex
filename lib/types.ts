/** An index of an individual Pokemon's types */
export type PokemonTypes = {
  slot: number;
  type: PokemonType;
};

/** An individual Pokemon's "type" e.g "fire", "poison", "grass" etc */
export type PokemonType = {
  name: string;
  url: string;
};

/** An individual Pokemon */
export type Pokemon = {
  id: number;
  name: string;
  url: string;
  data: any;
  image: string;
  types: PokemonTypes[];
  stats: [];
  abilities: [];
};

// STYLED COMPONENT PROPS
export type BgProps = {
  bg: string;
};
