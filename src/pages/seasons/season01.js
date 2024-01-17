/* chakra content */
import { Button, Flex, Img, Text, Box } from "@chakra-ui/react"; /* */

import React from "react";

import T02 from "./Trabalhos/linespace";

import { useDisclosure } from "@chakra-ui/react";

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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import Link from "next/link";

import { motion } from 'framer-motion'

export default function S01() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Animação de fundo 👌*/}
      <Flex
      overflow={"hidden"}
      h={"100%"} 
      w="100%"
      bg={"black"}
      direction={"column"}>
        
        {/* Container principal */}
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          w="100%"
          h="100%"
          p="40px 70px 20px 70px"
          direction={"column"}
        >
          {/* Navbar */}
          <Flex color={"white"} w="100%" justify={"space-between"}>
            <Flex w="200px" h="20px">
              <Img src="/icons/Erick Aniello.png" />
            </Flex>

            <Flex>
              <Flex cursor={"pointer"}>
                <Popover>
                  <PopoverTrigger>
                    <Img mr="20px" w="30px" src="/icons/pontos.png" />
                  </PopoverTrigger>

                  <PopoverContent  borderRadius={"0px"}>
                    <PopoverFooter
                      color={"black"}
                      fontSize={"15px"}
                      borderColor={"white"}
                    >
                      Clicar no botão "E-mail" vai fazer seu E-mail abrir como em
                      um truque de mágica! 🎩🪄
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              </Flex>


              <Link href="mailto:iurierick@gmail.com">
              <Button
                _hover={{
                  bg: "black",
                  border: "1px",
                  borderColor: "white",
                  color: "white",
                }}
                h="30px"
                w="130px"
                borderRadius={"30px"}
                bg="white"
                color={"black"}
              >
                E-mail
              </Button>
              </Link>
            </Flex>
          </Flex>

          {/* Sessão de trabalhos */}
          <Flex mt="90px" color={"white"} justifyContent={"center"}>
            <Img w="120px" src="/icons/Trabalhos.png" />
          </Flex>

          <Flex justify={"center"}>
            <Flex w="1600px" justify={"center"} direction={"row"}>
              {/* Redes */}

              <Flex justify={"center"} direction={"column"}>
                <Link href="https://github.com/Erick-Iuri" target="_blank">
                <Img mb="10px" w="35px" src="/icons/Github branco.png" /></Link>
                
                <Link href="https://www.linkedin.com/in/erick-aniello-49953b163/" target="_blank">
                <Img w="35px" src="/icons/Linkeding branco.png" /></Link>
              </Flex>

              {/* Trabalhos */}

              <Flex
                w="100%"
                justify={"center"}
                gap={3}
                m="20px"
                direction={{ xl: "row", md: "column", base: "column" }}
              >
                {/* Line space design */}
                <Flex
                  w="100%"
                  h="400px"
                  bg="black"
                  bgImage="/Line Space Design/Cover Line space.jpg"
                  bgRepeat={"none"}
                  bgPosition={"center"}
                  bgSize={"cover"}
                  cursor="pointer"
                >
                  <Flex w="100%">
                    <T02 />
                  </Flex>
                </Flex>

                {/* Ubisoft Projeto */}
                <Flex
                  w="100%"
                  h="400px"
                  justify={"center"}
                  onClick={onOpen}
                  cursor={"pointer"}
                >
                  <Flex
                    w="100%"
                    h="100%"
                    bgImage="/Projeto fim/cover 1.jpg"
                    bgRepeat={"none"}
                    bgPosition={"center"}
                    bgSize={"cover"}
                  >
                    <Flex
                      _hover={{
                        opacity: "1",
                        transition: "0.3s",
                      }}
                      opacity={"0"}
                      bgGradient="linear(to-b, transparent 50%, black 100%)"
                      direction={"column"}
                      justify={"end"}
                      p="20px"
                      w="100%"
                      h="100%"
                    >
                      <Text color={"white"} fontWeight={"bold"} fontSize={"20px"}>
                        {" "}
                        Projeto Ubisoft Connect{" "}
                      </Text>
                      <Text color={"white"} fontSize="13px">
                        {" "}
                        Redesign do Aplicativo Ubisoft Connect para uma
                        Experiência Aprimorada do Usuário (UX Design){" "}
                      </Text>
                    </Flex>
                  </Flex>

                  {/* Modal menu */}
                  <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
                    <ModalOverlay />

                    <ModalContent h="auto">
                      <ModalCloseButton />

                      {/* Conteúdo */}
                      <ModalBody>
                        {/*💬*/}
                        <Flex mb="10px" ml="55px" justify={"start"}>
                          <Flex mt="100px">
                            <Flex mb="10px">
                              <Img
                                w="50px"
                                h="50px"
                                mr="10px"
                                src="/icons/Logo Erick.png"
                              />

                              <Flex direction={"column"}>
                                <Text fontWeight={"bold"}>
                                  Ubisoft Connect Redesign
                                </Text>
                                <Text>Erick Aniello | UI / UX Designer </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>

                        {/*📷*/}
                        <Flex justify={"center"}>
                          <Box
                            bgImage={"/Projeto fim/cover 1.jpg"}
                            bgSize={"cover"}
                            bgPosition={"center"}
                            w="90%"
                            h="500px"
                          ></Box>
                        </Flex>

                        {/*💬*/}
                        <Flex mb="10px" justify={"center"}>
                          <Flex w="70%" mt="10px" mb="10px">
                            <Flex direction={"column"} justify={"center"}>
                              <Text
                                mt="14px"
                                fontSize={"19px"}
                                textAlign={"center"}
                                fontWeight={"bold"}
                                color="black"
                              >
                                Redesign do Aplicativo Ubisoft Connect para uma
                                Experiência Aprimorada do Usuário (UX Design)
                              </Text>

                              <Text
                                mt="20px"
                                fontSize={"17px"}
                                textAlign={"center"}
                                color="black"
                              >
                                Esse projeto foi uma iniciativa pessoal, para
                                aprimorar significativamente a experiência do
                                usuário (UX) do aplicativo, que identifiquei como
                                uma área de oportunidade após explorar a versão
                                beta. Percebi que havia espaço para melhorias
                                substanciais no design e na usabilidade, e isso me
                                inspirou a criar um projeto dedicado ao
                                aprimoramento do Ubisoft Connect.
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>

                        {/*📷*/}
                        <Flex justify={"center"}>
                          <Box
                            bgImage={"/Projeto fim/pc.png"}
                            bgSize={"cover"}
                            bgPosition={"center"}
                            borderRadius={"10px"}
                            w="80%"
                            h="610px"
                          ></Box>
                        </Flex>

                        {/*💬*/}
                        <Flex mb="10px" w="100%" justify={"center"}>
                          <Flex w="60%" ml="55px" mt="10px">
                            <Flex mb="10px">
                              <Flex direction={"column"} justify={"center"}>
                                <Text
                                  mt="14px"
                                  fontSize={"19px"}
                                  textAlign={"center"}
                                  fontWeight={"bold"}
                                  color="black"
                                >
                                  Os principais objetivos do projeto incluíam:
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"start"}
                                  fontWeight={"light"}
                                  color="black"
                                >
                                  1 - Melhorar a Navegação: Tornar a navegação no
                                  aplicativo mais fluida e intuitiva.
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"start"}
                                  fontWeight={"light"}
                                  color="black"
                                >
                                  2 - Aprimorar a Estética: Modernizar o design,
                                  tornando-o mais atraente e alinhado às
                                  tendências de design atuais.
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"start"}
                                  fontWeight={"light"}
                                  color="black"
                                >
                                  3 - Otimizar a Usabilidade: Simplificar os
                                  processos para garantir que os usuários atinjam
                                  seus objetivos de forma eficiente.
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"start"}
                                  fontWeight={"light"}
                                  color="black"
                                >
                                  4 - Integrar Feedback dos Usuários: Incorporar
                                  sugestões e feedback dos usuários beta para
                                  garantir que as necessidades reais dos usuários
                                  fossem consideradas.
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>

                        {/*📷*/}
                        <Flex justify={"center"}>
                          <Img w="80%" src="/Projeto fim/wireframes.png" />
                        </Flex>

                        {/*💬*/}
                        <Flex mb="10px" w="100%" justify={"center"}>
                          <Flex w="100%" ml="55px" mt="10px">
                            <Flex mb="10px">
                              <Flex direction={"column"} justify={"center"}>
                                <Text
                                  mt="14px"
                                  fontSize={"19px"}
                                  textAlign={"center"}
                                  fontWeight={"bold"}
                                  color="black"
                                >
                                  Metodologia:
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"center"}
                                  color="black"
                                >
                                  O processo de Redesign envolveu várias etapas,
                                  começando com a análise aprofundada da versão
                                  beta do Ubisoft Connect. Realizei pesquisas
                                  adicionais para entender as expectativas dos
                                  usuários e as melhores práticas de UX design. A
                                  criação de wireframes detalhados precedeu a fase
                                  de design, onde busquei uma estética moderna e
                                  coesa.
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>

                        {/*📷*/}
                        <Flex mb="10px" justify={"center"}>
                          <Img w="80%" src="/Projeto fim/Perfil.png" />
                        </Flex>

                        {/*📷*/}
                        <Flex mb="10px" justify={"center"}>
                          <Img w="80%" src="/Projeto fim/Biblioteca 1.png" />
                        </Flex>

                        {/*📷*/}
                        <Flex mb="10px" justify={"center"}>
                          <Img w="80%" src="/Projeto fim/Biblioteca.png" />
                        </Flex>

                        <Flex mb="10px" justify={"center"}>
                          <Img w="80%" src="/Projeto fim/Loja 1.png" />
                        </Flex>

                        {/*💬*/}
                        <Flex mb="10px" w="100%" justify={"center"}>
                          <Flex w="60%" ml="55px" mt="10px">
                            <Flex mb="10px">
                              <Flex direction={"column"} justify={"center"}>
                                <Text
                                  mt="14px"
                                  fontSize={"19px"}
                                  textAlign={"center"}
                                  fontWeight={"bold"}
                                  color="black"
                                >
                                  Conclusão:
                                </Text>

                                <Text
                                  mt="20px"
                                  fontSize={"17px"}
                                  textAlign={"center"}
                                  color="black"
                                >
                                  Em resumo, este Redesign do Ubisoft Connect
                                  representa meu compromisso com a excelência em
                                  UX design. Estou confiante de que as melhorias
                                  implementadas não apenas atendem às expectativas
                                  dos usuários, mas também contribuem para uma
                                  experiência mais atraente e envolvente. Estou
                                  aberto a feedback e ansioso para discutir como
                                  esse projeto pode continuar a evoluir.
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="red"
                          borderRadius={"30px"}
                          mr={3}
                          onClick={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* Linha final */}
          <Flex
            mt="90px"
            w="100%"
            h="1px"
            border={"1px"}
            borderColor={"white"}
          ></Flex>
        </Flex>

        {/* linha de texto */}

        <Flex 
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        w="100%" p="0 70px 40px 70px">
          <Flex justify={"center"}>
            <Flex color="white" fontSize={"15px"} w="33%">
              <Text w="">
                <b>Erick Aniello</b> é um <b>UX Design, Front-end developer</b>{" "}
                com base em são paulo, especialista em criar interfaces funcionais
                e elegantes para produtos online.{" "}
              </Text>
            </Flex>

            <Flex w="33%" justify={"center"} align={"center"}>
              <Img h="120px" w="auto" src="/icons/Logo Erick branco.png" />
            </Flex>

            <Flex w="31%" fontSize={"15px"} direction={"column"} color="white">
              <Text fontWeight={"bold"} mb="10px">
                Quais tipos de problema você resolve?
              </Text>
              <Text>
                Resolvo problemas relacionados à experiência do usuário. Por
                exemplo, em um aplicativo de compras, meu trabalho é tornar a
                interface mais fácil de usar, ajudando os usuários a tomar
                decisões, como escolher entre 'Seguir' ou 'Finalizar'.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

        {/* Ultima linha */}
        <Flex 
        p="0 20px 0 20px"
        w="100%" h="20px" justifyContent={"space-between"}>

          <Flex>
            <Text>
              V.0.1 Brasil, São Paulo SP UI & UX design Front-end developer
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight={"bold"}>Erick Aniello</Text>
          </Flex>
        
        </Flex>

    </>
  );
}
