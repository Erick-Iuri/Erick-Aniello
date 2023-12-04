import { Button, Flex, Text, Img, Box } from "@chakra-ui/react";

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

export default function S02() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify={"center"}>
        <Flex
          m="10px"
          w="1400px"
          justify={"center"}
          border="2px"
          borderRadius={"20px"}
          direction={"column"}
        >
          <Flex justify={"center"} my="20px">
            <Img w="130px" src="/icons/Trabalhos.png" />
          </Flex>

          {/* Trabalhos */}

          <Flex justify={"center"} gap={3} m="20px">
            <Flex w="100%" h="300px" bg="black" borderRadius={"20px"} onClick={onOpen} cursor={"pointer"}>

              {/* Modal menu */}  
              <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} >

                <ModalOverlay/>

                <ModalContent borderRadius={"10px"} h="90%">

                  <ModalCloseButton />

                  {/* Conteúdo */}
                  <ModalBody>

                    <Flex 
                    mb="10px"
                    w="50%"
                    justify={"center"}>

                      <Flex
                      mt="100px">

                        <Flex mb="10px">
                          <Img w="50px" h="50px" mr="10px" src="/icons/foto.png"/>

                          <Flex direction={"column"}>
                            <Text fontWeight={"bold"}>Lorem projeto nome alguma coisa!</Text>
                            <Text>Erick Aniello | UI / UX Designer </Text>
                          </Flex>
                        </Flex>

                      </Flex>

                    </Flex>

                    <Flex justify={"center"}>
                        <Box 
                        borderRadius={"10px"}
                        w="80%" h="400px" bg="black">
                        </Box>
                    </Flex>

                    <Flex 
                    mb="10px"
                    w="100%"
                    justify={"center"}>

                      <Flex
                      w="70%"
                      mt="10px">

                        <Flex mb="10px">

                          <Flex direction={"column"}>

                            <Text color="#555555">Universal Icon Set is a high-quality icon set for websites, apps, social networks, prints, billboards and even in a postcard for your mom.
                            Product features:</Text>
                            
                            <Text color="#555555" mt="10px" >✓ 2 490 high-quality vector icons</Text>

                            <Text color="#555555" mt="10px" >✓ 2 490 high-quality vector icons</Text>

                            <Text color="#555555" mt="10px" >✓ 2 490 high-quality vector icons</Text>
                            

                          </Flex>

                        </Flex>

                      </Flex>

                    </Flex>

                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="red" borderRadius={"30px"} mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                  
                </ModalContent>

              </Modal>
              
            </Flex>

            <Flex w="100%" h="300px" bg="black" borderRadius={"20px"}></Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Linha Decorativa "Fim" */}
      <Flex justify={"center"}>
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
