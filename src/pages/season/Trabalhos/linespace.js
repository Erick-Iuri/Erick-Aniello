import { Button, Flex, Text, Img, Box, background } from "@chakra-ui/react";

import React from "react";

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

export default function T02() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="100%" h="100%" borderRadius={"10px"} onClick={onOpen}>
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
            Line Space Design.{" "}
          </Text>
          <Text color={"white"} fontSize="13px" w="60%">
            {" "}
            A Line Space foi meu projeto pessoal de empreendedorismo.{" "}
          </Text>
        </Flex>
      </Flex>

      {/* Modal menu */}
      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />

        <ModalContent borderRadius={"10px"} h="100%">
          <ModalCloseButton />

          {/* Conteúdo */}
          <ModalBody>

            {/* Header Titulo e foto */}
            <Flex mb="10px" ml="55px" justify={"start"}>
              <Flex mt="100px">
                <Flex mb="10px">
                  <Img w="50px" h="50px" mr="10px" src="/icons/foto.png" />

                  <Flex direction={"column"}>
                    <Text fontWeight={"bold"}>Ubisoft Connect Redesign</Text>
                    <Text>Erick Aniello | UI / UX Designer </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/* Primeira imagem */}
            <Flex justify={"center"}>
              <Box
                bgImage={"/Line Space Design/Cover Line space.jpg"}
                bgSize={"cover"}
                bgPosition={"center"}
                borderRadius={"10px"}
                w="90%"
                h="500px"
              ></Box>
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
    </>
  );
}
