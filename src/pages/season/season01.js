import { Button, Flex, Text, Img, Box } from "@chakra-ui/react";

import React from "react";

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

export default function S01() {
  return (
    <>
      <Flex justify={"center"}>
        <Flex
          m="20px"
          w="1400px"
          justify={"center"}
          direction={{ base: "column", md: "row", xl: "row" }}
        >
          <Flex
            textAlign={"center"}
            w={{ base: "100%", md: "50%", xl: "50%" }}
            mr="20px"
            mb="10px"
          >
            <Flex
              direction={"column"}
              fontSize={"40px"}
              border="2px"
              p="40px"
              borderRadius={"20px"}
              w="100%"
              justify={"center"}
              align={"center"}
            >
              <Text fontWeight={"bold"}>Erick Aniello</Text>

              <Flex align={"center"} fontSize={"50px"} justify={"center"}>
                <Text fontWeight={"bold"}>UI/UX Designer</Text>
                <Img w="30px" h="30px" src="/icons/X.png" />
              </Flex>

              <Text fontWeight={"bold"} fontSize={"50px"}>
                Front-end Developer
              </Text>

              <Img src="/icons/Arrow 1.png" w="40px" />

              <Flex align={"center"}>
                <Button
                  mt="20px"
                  fontSize={"14px"}
                  h="40px"
                  pl="60px"
                  pr="60px"
                  borderRadius={"30px"}
                  bg="black"
                  color="white"
                  fontWeight={"bold"}
                  transition={"0,5s"}
                  _hover={{
                    bg: "#006EF5",
                  }}
                  _active={{
                    bg: "grey",
                  }}
                  mr="15px"
                >
                  E-mail
                </Button>

                <Flex pt="20px" >
                  <Popover >
                    <PopoverTrigger >
                      <Button borderRadius="100%" bg="none" fontSize={"20px"} border={"1px"}>...</Button>
                    </PopoverTrigger>

                    <PopoverContent borderColor={"black"}>
                      <PopoverFooter fontSize={"20px"} borderColor={"none"}>
                         Clicar no botão "E-mail" vai fazer seu E-mail abrir como em um truque de mágica! 🎩🪄
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Flex>

              </Flex>
            </Flex>
          </Flex>

          <Flex direction={"column"} w={{ base: "100%", md: "50%", xl: "50%" }}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              textAlign={"center"}
              mb="40px"
              border="2px"
              p="40px"
              borderRadius={"20px"}
            >
              <Text fontWeight={"bold"} fontSize={"24px"}>
                Bio
              </Text>

              <Text fontSize={"20px"} w="80%">
                <b>
                  <i>Erick Aniello</i>
                </b>{" "}
                é um{" "}
                <b>
                  <i>UX Design, Front-end developer</i>
                </b>{" "}
                com base em são paulo, especialista em criar interfaces
                funcionais e elegantes para produtos online.
              </Text>
            </Flex>

            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              textAlign={"center"}
            >
              <Text
                borderRadius={"30px"}
                py="10px"
                px="15%"
                color={"white"}
                bg="black"
                fontWeight={"bold"}
                fontSize={"24px"}
              >
                Quais tipos de problema você resolve?
              </Text>

              <Text fontSize={"20px"} w="100%">
                Resolvo problemas relacionados à experiência do usuário. Por
                exemplo, em um aplicativo de compras, meu trabalho é tornar a
                interface mais fácil de usar, ajudando os usuários a tomar
                decisões, como escolher entre{" "}
                <b>
                  <i>'Seguir'</i>
                </b>{" "}
                ou{" "}
                <b>
                  <i>'Finalizar'</i>
                </b>
                .
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
