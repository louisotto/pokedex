import { ThemeProvider, DefaultTheme } from "styled-components";
import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Lato } from "@next/font/google";

const lato = Lato({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"] });

export const theme: DefaultTheme = {
  colors: {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Pokedex Application</title>
        <meta name="description" content="A basic Pokedex application built in NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
