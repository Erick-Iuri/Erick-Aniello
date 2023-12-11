import { Button, Flex, Text, Img, Box, background } from "@chakra-ui/react";

import React from "react";

/* Animação */
import { motion } from "framer-motion";

/* Modal menu */

import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

/* modal T02 */

import T02 from "./Trabalhos/linespace";

export default function S02() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify={"center"}
      as={motion.div}
      transition={"1,5s"}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}>
        <Flex
          m="10px"
          w="1400px"
          justify={"center"}
          border="2px"
          borderRadius={"20px"}
          direction={"column"}
        >
          <Flex justify={"center"} my="10px">
            <Img w="130px" src="/icons/Trabalhos.png" />
          </Flex>

          {/* Trabalhos */}

          <Flex
            justify={"center"}
            gap={3}
            m="20px"
            direction={{ xl: "row", md: "column", base: "column" }}
          >
            {/* Ubisoft Projeto */}
            <Flex
              w="100%"
              h="400px"
              borderRadius={"20px"}
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
                borderRadius={"10px"}
              >
                <Flex
                  _hover={{
                    opacity: "1",
                    transition: "0.3s",
                  }}
                  borderRadius={"10px"}
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
                    Projeto Ubisoft Connect.{" "}
                  </Text>
                  <Text color={"white"} fontSize="13px" w="60%">
                    {" "}
                    Redesign do Aplicativo Ubisoft Connect para uma Experiência
                    Aprimorada do Usuário (UX Design){" "}
                  </Text>
                </Flex>
              </Flex>

              {/* Modal menu */}
              <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
                <ModalOverlay />

                <ModalContent borderRadius={"10px"} h="auto">
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
                            src="/icons/foto.png"
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
                        borderRadius={"10px"}
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
                              tornando-o mais atraente e alinhado às tendências
                              de design atuais.
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
                              começando com a análise aprofundada da versão beta
                              do Ubisoft Connect. Realizei pesquisas adicionais
                              para entender as expectativas dos usuários e as
                              melhores práticas de UX design. A criação de
                              wireframes detalhados precedeu a fase de design,
                              onde busquei uma estética moderna e coesa.
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
                              representa meu compromisso com a excelência em UX
                              design. Estou confiante de que as melhorias
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

            {/* Line Space Projeto */}
            <Flex
              w="100%"
              h="400px"
              bg="black"
              borderRadius={"10px"}
              bgImage="/Line Space Design/Cover Line space.jpg"
              bgRepeat={"none"}
              bgPosition={"center"}
              bgSize={"cover"}
              cursor="pointer"
            >
              <Flex w="100%">
                <T02 />
              </Flex>

              {/* Modal menu para Line Space Project*/}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Linha Decorativa "Fim" */}
      <Flex 
      as={motion.div}
      transition={"1,5s"}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      justify={"center"}>
        <Flex m="20px" w="1400px" justify={"space-between"}>
          <Box
            mt="17px"
            border={"1px"}
            borderColor={"#D9D9D9"}
            borderRadius={"100%"}
            h={"1px"}
            w="100%"
          ></Box>

          <Img mx="20px" w="40px" src="/icons/foto.png" />

          <Box
            mt="17px"
            border={"1px"}
            borderColor={"#D9D9D9"}
            borderRadius={"100%"}
            h={"1px"}
            w="100%"
          ></Box>
        </Flex>
      </Flex>
    </>
  );
}
