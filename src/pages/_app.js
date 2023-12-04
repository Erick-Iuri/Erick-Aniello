
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Head from 'next/head'

/* google font */
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// import { theme } from "../styles/theme";


export default function App({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap" rel="stylesheet" />

        <title>Erick Aniello</title>
      </Head> 

      <ChakraProvider >
          <Component {...pageProps} />
      </ChakraProvider>

    </>
  );

}
