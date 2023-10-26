import { Flex, Text, Img, Box } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import React from "react";

export default function Works() {
  return (
    <>
      <Flex justify={"center"}>
        <Tabs
          mt="50px"
          w={{
            base: "70%",
            sm: "70%",
            md: "70%",
            lg: "70%",
            xl: "60%",
          }}
          colorScheme="black"
          variant="enclosed"
        >
          <TabList>
            <Tab _selected={{ fontWeight: "bold" }}>Projetos</Tab>
            <Tab _selected={{ fontWeight: "bold" }}>Icons</Tab>
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
            <TabPanel>
              <Flex
                justify={"space-between"}
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "row",
                }}
                gap={2}
                align={"center"}
              >
                <Box w="500px" h="300px" bg={"black"} borderRadius={"10px"}>
                  {" "}
                </Box>

                <Box w="500px" h="300px" bg={"black"} borderRadius={"10px"}>
                  {" "}
                </Box>
              </Flex>
            </TabPanel>

            <TabPanel>
              <p>two!</p>
            </TabPanel>

            <TabPanel>
              <p>Hello World!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
