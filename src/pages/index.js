import { Button, Flex, Text, Img, Box } from "@chakra-ui/react";

import React from "react";

/* Nav bar */
import Navbar from "./season/navber";
import S01 from "./season/season01";
import S02 from "./season/season02";

export default function Index() {
  return(
    <>
      <Navbar />

      <S01/>

      <S02 />
    </>
  );
}
