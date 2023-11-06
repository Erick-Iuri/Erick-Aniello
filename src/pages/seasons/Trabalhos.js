import { Flex, Text, Img, Box, Button, Link } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

import React from "react";

import { motion } from "framer-motion";

export default function Works() {
  return (
    <>
      <Flex
        justify={"center"}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Tabs
          mt="50px"
          w={{
            base: "70%",
            sm: "70%",
            md: "70%",
            lg: "70%",
            xl: "1100px",
          }}
          colorScheme="black"
          variant="enclosed"
        >
          <TabList>
            <Tab _selected={{ fontWeight: "bold" }}>Projetos</Tab>
            <Tab _selected={{ fontWeight: "bold" }} isDisabled>
              Icons
            </Tab>
            <Tab _selected={{ fontWeight: "bold" }}>Sobre</Tab>

            <Flex pt="10px" w="100%" justify={"end"}>
              <Img
                cursor="pointer"
                w="20px"
                h="20px"
                mr="10px"
                src="/icons/github.png"
              />
              <Img
                cursor="pointer"
                w="20px"
                h="20px"
                src="/icons/logo In white 1.png"
              />
            </Flex>
          </TabList>

          <TabPanels>
            {/* Projetos "INICIO" */}
            <TabPanel>
              <Flex
                gap="3"
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "row",
                }}
              >
                <Flex w="100%" h="400" bg="blue.500" direction={"column"}>
                  <Flex bg="#12131A" h="100%" w="100%"></Flex>

                  <Flex 
                  h="100px" 
                  w="100%" 
                  bg="#F1F1F1" 
                  fontSize={"13px"}
                  p="10px"
                  direction={"column"}>
                    
                    <Text fontWeight={"bold"}>Lorem Ipsulem</Text>
                    <Text>Lorem Ipsulem requea kewq sksne asde0w aisjda fefeuwak efiedpaui</Text>

                  </Flex>
                </Flex>

                <Flex w="100%" h="400" bg="blue.500" direction={"column"}>
                  <Flex bg="#FFCA00" h="100%" w="100%"></Flex>
                  <Flex h="100px" w="100%" bg="#F1F1F1"></Flex>
                </Flex>

                <Flex w="100%" h="400" bg="blue.500" direction={"column"}>
                  <Flex bg="#4B40DA" h="100%" w="100%"></Flex>
                  <Flex h="100px" w="100%" bg="#F1F1F1"></Flex>
                </Flex>
              </Flex>
            </TabPanel>
            {/* Projetos "FIM" */}

            {/* Icons "INICIO" */}
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            {/* Icons "FIM" */}

            {/* Sobre Menu "INICIO" */}
            <TabPanel>
              <Flex gap={1}>
                <Flex>
                  <Flex direction={"column"}>
                    <Text fontWeight={"bold"}>Bio</Text>
                    <Text
                      w="70%"
                      color={"#12131A"}
                      fontSize={"20px"}
                      fontWeight={"light"}
                    >
                      I'm a Product Designer (UX/UI) and founder. Feel free to
                      get in touch and drop me a line at.
                    </Text>
                  </Flex>
                </Flex>

                <Flex direction={"column"} gap={3}>
                  <Text fontWeight={"bold"} mb="10px">
                    Social
                  </Text>

                  <Flex direction={"row"}>
                    <Img w="20px" h="20px" mr="10px" src="/icons/github.png" />{" "}
                    <Text w="100%">Erick Aniello</Text>
                  </Flex>

                  <Flex direction={"row"}>
                    <Img
                      w="20px"
                      h="20px"
                      mr="10px"
                      src="/icons/logo In white 1.png"
                    />{" "}
                    <Text w="100%">Erick Aniello</Text>
                  </Flex>

                  <Flex direction={"row"}>
                    <Img w="20px" h="19px" mr="10px" src="/icons/Vector.png" />{" "}
                    <Text w="100%">iurierick@gmail.com</Text>
                  </Flex>
                </Flex>
              </Flex>

              {/* Area de Habilidades "INICIO" */}

              <Flex direction={"column"}>
                <Text fontWeight={"bold"} alignItems={"start"} mb="10px">
                  Habilidades
                </Text>
                <Flex gap={1}>
                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    Photoshop
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    Figma
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    Ilustrator
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    PowerPoint
                  </Text>
                </Flex>

                <Flex gap={1} mt="10px" mb="10px">
                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    CSS
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    React
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    JS
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    HTML
                  </Text>
                </Flex>

                <Flex gap={1} mb="10px">
                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    Next JS
                  </Text>

                  <Text
                    bg="#F3F3F4"
                    pr="15px"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    borderRadius={"30px"}
                  >
                    UX Design
                  </Text>
                </Flex>
              </Flex>

              {/* Area de Habilidades "FIM" */}
            </TabPanel>
            {/* Sobre Menu "FIM" */}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
