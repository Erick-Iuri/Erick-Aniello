import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
