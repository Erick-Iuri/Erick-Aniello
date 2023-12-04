import { Button, Flex, Text, Img, Box, Link } from "@chakra-ui/react";

import React from "react";

/* Hamburguer menu */
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function Navbar() {
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
           <Link href="https://github.com/Erick-Iuri" target="_blank" ><Img w="20px" h="20px" mr="10px" src="/icons/github.png" /></Link>
           <Link href="https://www.linkedin.com/in/erick-aniello-49953b163/" target="_blank"> <Img w="20px" h="20px" src="/icons/logo In white 1.png" /></Link>
          </Flex>

          <Flex
            align={"center"}
            justify={"space-between"}
            gap={6}
            display={{ base: "none", sm: "none", md: "flex" }}
          >
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
                bg:"#006EF5",
              }}
              _active={{
                bg: "grey",
              }}
            >
              Projetos
            </Button>

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
              Sobre
            </Button></Link>
          </Flex>

          <Flex display={{ base: "none", sm: "none", md: "flex" }}>
            <Img w="50px" h="50px" src="/icons/foto.png" />
          </Flex>

          <Flex
            align={"center"}
            display={{ base: "block", sm: "block", md: "none" }}
          >
            <Menu>
              <MenuButton as={Button} bg="none" _active={{ bg:"white"}} _hover={{bg:"none"}}>
                <Img src="/icons/Group 60.png" w="30px" h="20px"/>
              </MenuButton>
              <MenuList bg="black" borderRadius={"10px"} border="none">
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>Projetos</MenuItem>
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>Icons</MenuItem>
                <MenuItem bg="black" color={"white"} fontFamily={"Roboto"}>Sobre</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
