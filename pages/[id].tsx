import { fetchPokemon } from "@/lib/fetch";
import { GetServerSideProps } from "next";
import { Pokemon } from "@/lib/types";

export default function Single({ pokemon }: { pokemon: Pokemon }) {
  return <h1>{pokemon.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const data = await fetchPokemon(Number(id));
  return {
    props: {
      pokemon: data,
    },
  };
};
