import { Button, Flex, Text } from "@chakra-ui/react";

import React from "react";

/* this is the Navbar */
import Navbar from "./seasons/navbar";

/* this is the S01 import */
import S01 from "./seasons/season01";

/* this is the S02 import */
import S02 from "./seasons/season02";

/* this is the S04 import */
import S04 from "./seasons/season04";

/* this is the WorkTabs import */
import Works from "./seasons/Trabalhos";

export default function Index() {
  return (
    <>
      <Navbar />

      <Flex
        justify={"center"}
        mt="30px"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
        }}
      >
        <S02 />

        <S01 />
      </Flex>

      <Works />
    </>
  );
}
