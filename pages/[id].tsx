import { fetchPokemon } from "@/lib/fetch";
import { GetServerSideProps } from "next";
import { Pokemon } from "@/lib/types";
import { SinglePokemon } from "../components/SinglePokemon/index";

export default function Single({ pokemon }: { pokemon: Pokemon }) {
  console.log(pokemon);
  return <SinglePokemon {...pokemon} />;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const data = await fetchPokemon(id);
  return {
    props: {
      pokemon: data,
    },
  };
};
