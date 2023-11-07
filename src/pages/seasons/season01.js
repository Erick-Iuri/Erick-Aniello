/* chakra content */
import { Button, Flex, Img, Text, Box, Link } from "@chakra-ui/react"; /* */

/* Menu Q&A */
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"; /*  */

import React from "react";

export default function S01() {
  return (
    <>
      <Flex justify={"center"} >
        <Flex pt="30px" direction={"column"} fontSize={"16px"} w={{sm:"100%", xl:"500px"}} >
          <Flex direction={"column"} textAlign={"start"}>
            <Text mb="30px" fontWeight={"bold"}>
              Aqui estão algumas dúvidas que você pode ter.😊
            </Text>
          </Flex>

          <Accordion allowToggle>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "black",
                    color: "white",
                    borderRadius: "30px",
                  }}
                  _hover={{ borderRadius: "30px" }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"16px"}
                    fontWeight={"bold"}
                  >
                    Pode me mostrar algum trabalho seu?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Claro, preparei um projeto especialmente pra você conhecer
                  melhor como funciona meu fluxo de trabalho. 👉{" "}
                  <Link color={"#4B40DA"}>Click Aqui.</Link>👈"
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton
                  _hover={{ borderRadius: "30px" }}
                  _expanded={{
                    bg: "black",
                    color: "white",
                    borderRadius: "30px",
                  }}
                  fontWeight={"bold"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={"16px"}>
                    Quais tipos de problema você resolve?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Resolvo problemas relacionados à experiência do usuário. Por
                exemplo, em um aplicativo de compras, meu trabalho é tornar a
                interface mais fácil de usar, ajudando os usuários a tomar
                decisões, como escolher entre 'Seguir' ou 'Finalizar'.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton
                  _hover={{ borderRadius: "30px" }}
                  _expanded={{
                    bg: "black",
                    color: "white",
                    borderRadius: "30px",
                  }}
                  fontWeight={"bold"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={"16px"}>
                    Como saber programar ajuda você com o UX Design?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
}
