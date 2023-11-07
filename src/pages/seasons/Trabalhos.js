import { Flex, Text, Img, Box, Button, Link } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

import React from "react";

import { motion } from "framer-motion";

import S01 from "./season01";

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
            xl: "80%",
          }}
          colorScheme="black"
          variant="enclosed"
        >
          <TabList>
            <Tab _selected={{ fontWeight: "bold" }} mb="10px">Projetos</Tab>
            <Tab _selected={{ fontWeight: "bold" }} mb="10px" isDisabled>
              Icons
            </Tab>
            <Tab _selected={{ fontWeight: "bold" }} mb="10px">Sobre</Tab>

            <Flex pt="10px" w="100%" justify={"end"} mt="10px">
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
                    direction={"column"}
                  >
                    <Text fontWeight={"bold"}>Lorem Ipsulem</Text>
                    <Text>
                      Lorem Ipsulem requea kewq sksne asde0w aisjda fefeuwak
                      efiedpaui
                    </Text>
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

              <Flex
              justify={"center"} 
              direction={"row"}
              >
                <Flex 
                mt="30px"
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "1000px",
                }}
                direction={{
                  base:"column",
                  sm:"column",
                  md:"column",
                  lg:"column",
                  xl:"row"
                }}
                >

                    <Flex mb="30px">
                        <Flex direction={"column"} w={{xl:"70%"}}>
                          <Text fontWeight={"bold"} mb="10px">Bio</Text>
                          <Text
                            color={"#12131A"}
                            fontSize={"20px"}
                            fontWeight={"light"}
                          >
                            Erick Aniello é um UX Design, Front-end developer com base
                            em são paulo, especialista em criar interfaces funcionais
                            e elegantes para produtos online.
                          </Text>
                        </Flex>
                    </Flex>

                    {/* Area de Habilidades "INICIO" */}
                    <Flex 
                    direction={"column"}>

                      <Text fontWeight={"bold"} alignItems={"start"} mb="10px">
                        Habilidades
                      </Text>

                      <Flex gap={1} >
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

                      <Flex gap={1} mt="10px" mb="10px" >
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
                </Flex>
               
              </Flex>
              
              <Flex
              justify={"center"} 
              direction={"row"}
              >
                <Flex 
                mt="30px"
                gap={{xl:"108px", base:"30px"}}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "1000px",
                }}
                direction={{
                  base:"column",
                  sm:"column",
                  md:"column",
                  lg:"column",
                  xl:"row"
                }}>

                  <S01 />

                  <Flex 
                  direction={"column"}
                  >

                    <Text>Social</Text>
                    <Flex justify={"start"} mt="10px">

                      <Img src="/icons/github.png" w="20px" h="20px" mr="10px" mt="3px" />
                      <Link href="https://github.com/Erick-Iuri" >https://github.com/Erick-Iuri</Link>

                    </Flex>

                    <Flex justify={"start"} mt="10px">

                      <Img src="/icons/logo In white 1.png" w="20px" h="20px" mr="10px" mt="3px" />
                      <Link href="https://www.linkedin.com/in/erick-aniello-49953b163/" >https://www.linkedin.com/erick-aniello</Link>
                      
                    </Flex>
                  </Flex>

                </Flex>
               
              </Flex>
                

            </TabPanel>
            {/* Sobre Menu "FIM" */}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
