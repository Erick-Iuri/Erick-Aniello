/* chakra content */
import { Button, Flex, Img, Text, Box } from "@chakra-ui/react"; /* */

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

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
            pl="60px"
            pr="60px"
            mr="10px"
            borderRadius={"20px"}
            border={"1px"}
            borderColor={"#D6D6D6"}
            background={"transparent"}
          >
            E-mail
          </Button>

          <Popover>
            <PopoverTrigger>
              <Button
                borderRadius={"100%"}
                border={"1px"}
                borderColor={"#D6D6D6"}
                background={"transparent"}
                pb="6px"
                fontWeight={"bold"}
              >
                ...
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </>
  );
}
