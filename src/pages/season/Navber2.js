import { Button, Flex, Text, Img, Box, Link } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import React from "react";

/* Hamburguer menu */
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function Navbar2() {
  return (
    <>
      <Flex justify={"center"}>
        <Flex
          m="20px"
          w="1400px"
          fontFamily={"Roboto"}
          justify={"space-between"}
        >
          <Flex
            align={"center"}
            display={{ base: "none", sm: "none", md: "flex" }}
          >
            <Link href="https://github.com/Erick-Iuri" target="_blank">
              <Img w="20px" h="20px" mr="10px" src="/icons/github.png" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/erick-aniello-49953b163/"
              target="_blank"
            >
              {" "}
              <Img w="20px" h="20px" src="/icons/logo In white 1.png" />
            </Link>
          </Flex>

          <Flex
            align={"center"}
            justify={"space-between"}
            gap={6}
            display={{ base: "none", sm: "none", md: "flex" }}
          >
            <Link href="/">
              <Button
                fontSize={"14px"}
                fontWeight={"bold"}
                h="30px"
                pl="40px"
                pr="40px"
                borderRadius={"30px"}
                bg="black"
                color="white"
                transition={"0,5s"}
                _hover={{
                  bg: "#006EF5",
                }}
                _active={{
                  bg: "grey",
                }}
              >
                Projetos
              </Button>
            </Link>

            <Button
              fontSize={"14px"}
              fontWeight={"bold"}
              h="30px"
              pl="40px"
              pr="40px"
              borderRadius={"30px"}
              bg="black"
              color="white"
              transition={"0,5s"}
              _hover={{
                bg: "#006EF5",
              }}
              _active={{
                bg: "grey",
              }}
            >
              Icons
            </Button>

            <Link href="/sobre">
              <Button
                fontSize={"14px"}
                h="30px"
                pl="40px"
                pr="40px"
                borderRadius={"30px"}
                bg="#006EF5"
                color="white"
                fontWeight={"bold"}
                transition={"0,5s"}
                _hover={{
                  bg: "#006EF5",
                }}
                _active={{
                  bg: "grey",
                }}
              >
                Sobre
              </Button>
            </Link>
          </Flex>

          <Flex display={{ base: "none", sm: "none", md: "flex" }}>
            <Img w="50px" h="50px" src="/icons/foto.png" />
          </Flex>

          <Flex
            align={"center"}
            display={{ base: "block", sm: "block", md: "none" }}
          >
            <Menu>
              <MenuButton
                as={Button}
                bg="none"
                _active={{ bg: "white" }}
                _hover={{ bg: "none" }}
              >
                <Img src="/icons/Group 60.png" w="30px" h="20px" />
              </MenuButton>
              <MenuList bg="black" borderRadius={"10px"} border="none">
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>
                  Projetos
                </MenuItem>
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>
                  Icons
                </MenuItem>
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>
                  Sobre
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>

      {/* Sobre menus */}

      <Flex justify={"center"}>
        <Flex
          m="20px"
          w="1400px"
          fontFamily={"Roboto"}
          justify={"space-between"}
        >
          {/* Coluna 1 */}
          <Flex direction={"column"} w="50%">
            <Flex
              mr="20px"
              h="200px"
              direction={"column"}
              border={"2px"}
              borderRadius={"20px"}
              justify={"center"}
              align={"center"}
              p="30px"
            >
              <Text fontSize={"24px"} fontWeight={"bold"}>
                Bio
              </Text>

              <Text fontSize="20px" align={"center"}>
                Erick Aniello é um UX Design, Front-end developer com base em
                são paulo, especialista em criar interfaces funcionais e
                elegantes para produtos online.
              </Text>
            </Flex>

            <Flex
              mt="20px"
              mr="20px"
              border={"2px"}
              borderRadius={"20px"}
              
              p="30px"
              direction={"column"}
            >
              <Text
                mb="10px"
                textAlign={"center"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                Aqui estão as perguntas mais frequentes. 😄
              </Text>

              <Accordion defaultIndex={[0]} allowMultiple>
                {/* Pergunta 1 */}
                <AccordionItem border={"none"} mb="5px">
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "#006EF5" }}
                      _active={{ border: "none" }}
                      borderRadius="20px"
                      bg="black"
                      color={"white"}
                      border={"none"}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Pode me mostrar algum trabalho seu?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Claro, preparei um projeto especialmente pra você conhecer
                    melhor como funciona meu fluxo de trabalho. 👉 Click
                    Aqui.👈"
                  </AccordionPanel>
                </AccordionItem>

                {/* Pergunta 2 */}
                <AccordionItem border={"none"} mb="5px">
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "#006EF5" }}
                      _active={{ border: "none" }}
                      borderRadius="20px"
                      bg="black"
                      color={"white"}
                      border={"none"}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Quais tipos de problema você resolve?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Resolvo problemas relacionados à experiência do usuário. Por
                    exemplo, em um aplicativo de compras, meu trabalho é tornar
                    a interface mais fácil de usar, ajudando os usuários a tomar
                    decisões, como escolher entre 'Seguir' ou 'Finalizar'.
                  </AccordionPanel>
                </AccordionItem>

                {/* Pergunta 3 */}
                <AccordionItem border={"none"}>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "#006EF5" }}
                      _active={{ border: "none" }}
                      borderRadius="20px"
                      bg="black"
                      color={"white"}
                      border={"none"}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Como começou a programar?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Claro, preparei um projeto especialmente pra você conhecer
                    melhor como funciona meu fluxo de trabalho. 👉 Click
                    Aqui.👈"
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </Flex>

            <Flex 
            mt="20px"
            h="200px">

                <Flex
                justify={"center"}
                p={"30px"}
                w="100%"
                mr="20px"
                borderRadius={"20px"}
                border={"2px"}
                direction={"column"}>

                    <Text
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    mb="20px"
                    >Social</Text>

                    <Flex mb="20px">
                      <Img w="20px" h="20px" mr="20px" src="/icons/github.png" />
                      <Text>https://github.com/Erick-Iuri</Text>
                    </Flex>

                    <Flex mb="20px">
                      <Img w="20px" h="20px" mr="20px" src="/icons/logo In white 1.png" />
                      <Text>https://www.linkedin.com/erick-aniello</Text>
                    </Flex>

                    <Flex>
                      <Img w="20px" h="15px" mr="20px" mt="3px" src="/icons/E-mail.png" />
                      <Text>iurierick@gmail.com</Text>
                    </Flex>

                </Flex>
            </Flex>
            
            

          </Flex>

          {/* Coluna 2 */}
          <Flex direction={"column"} w="50%">

            <Flex h="400px" mb="20px">

              <Img src="/icons/image.png" />

            </Flex>

            <Flex>

              <Flex
              p={"30px"}
               borderRadius={"20px"}
               border={"2px"}
               direction={"column"}>

                  <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  mb="20px"
                  >Habilidades</Text>

                  <Flex>
                    <Img src="/icons/Group 32.png" />
                  </Flex>

              </Flex>

            </Flex>

          </Flex>
        </Flex>
      </Flex>

      {/* Linha Decorativa "Fim" */}
      <Flex justify={"center"}>
        <Flex
        m="20px"
        w="1400px"
        justify={"space-between"}
        >
          <Box
          mt="17px"
          border={"1px"} borderColor={"#D9D9D9"} borderRadius={"100%"}
          h={"1px"}
          w="100%"
          ></Box>

          <Img mx="20px" w="40px" src="/icons/foto.png" /> 

          <Box
          mt="17px"
          border={"1px"} borderColor={"#D9D9D9"} borderRadius={"100%"}
          h={"1px"}
          w="100%"
          ></Box>
        </Flex>
      </Flex>
    </>
  );
}
