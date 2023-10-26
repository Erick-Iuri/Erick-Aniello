/* chakra content */
import { Button, Flex, Img, Text, Box } from "@chakra-ui/react"; /* */

import React from "react";

export default function S02() {
  return (
    <>
      <Flex
        direction={"column"}
        justify={"center"}
        align={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "start",
        }}
        pr={{ sm: "0x", md: "0px", lg: "0px", xl: "10%" }}
      >
        <Flex pb="10px" pt="10px">
          <Img w="90px" src="/icons/foto.png" />
        </Flex>

        <Flex fontWeight={"bold"} fontSize={"32px"}>
          Erick Aniello
        </Flex>

        <Flex fontWeight={"bold"} fontSize={"40px"}>
          <Text>UI/UX Designer</Text>
          <Img w="30px" h="30px" src="/icons/X.png" />
        </Flex>

        <Flex fontWeight={"bold"} fontSize={"40px"}>
          <Text>Front-end Developer</Text>
        </Flex>

        <Flex>
          <Img src="/icons/Arrow 1.png" />
        </Flex>

        <Flex mt="20px">
          <Button
            borderColor={"#D6D6D6"}
            pl="60px"
            pr="60px"
            borderRadius={"20px"}
            border={"1px"}
            bgColor={"transparent"}
          >
            E-mail
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
