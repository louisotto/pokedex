import Image from "next/image";
import { Pokemon } from "@/lib/types";
import { fetchAllPokemon } from "@/lib/fetch";
import { GetStaticProps } from "next";
import { HomeGrid } from "../components/HomeGrid/index";

type HomeProps = {
  /** All 151 Pokemon as an Array. */
  pokemon: Pokemon[];
};
export default function Home({ pokemon }: HomeProps) {
  return (
    <>
      <main>
        <h1>Poxedex</h1>
        <HomeGrid pokemon={pokemon} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemon = await fetchAllPokemon();
  return {
    props: {
      pokemon,
    }, // will be passed to the page component as props
  };
};
