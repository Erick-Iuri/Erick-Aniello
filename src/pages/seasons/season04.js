import { Flex } from "@chakra-ui/react";
import React from "react"

export default function S04() {
    return (
     <>
      <Flex
      direction={{ base: "column", sm: "column", md: "column", lg: "column", xl: "row" }}
      >

            <Flex
            borderRadius={"10px"}
            bgColor={"black"}
            w="550px"
            h="300px"
            mr="5%"
            mb="30px"
            >

            </Flex>

            <Flex
            borderRadius={"10px"}
            bgColor={"black"}
            w="550px"
            h="300px"
            ></Flex>

      </Flex>
     </>
    );
  }