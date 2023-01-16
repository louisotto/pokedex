import { ThemeProvider, DefaultTheme } from "styled-components";
import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Lato } from "@next/font/google";

const lato = Lato({ weight: "400", style: ["normal", "italic"], subsets: ["latin"] });

export const theme: DefaultTheme = {};

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
