import { Button, Flex, Text, Img, Box, Link } from "@chakra-ui/react";

import React from "react";

/* Hamburguer menu */
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

/* Animações */
import { motion, isValidMotionProp } from "framer-motion";

export default function Navbaricons() {
  return (
    <>
      <Flex 
       as={motion.div}
       transition={"1,5s"}
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
      justify={"center"}>
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
            <Link href="/">
            <Button
              fontSize={"14px"}
              h="30px"
              pl="40px"
              pr="40px"
              borderRadius={"30px"}
              bg="black"
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
            </Link>

            <Link href="/icons">
            <Button
              fontSize={"14px"}
              fontWeight={"bold"}
              h="30px"
              pl="40px"
              pr="40px"
              borderRadius={"30px"}
              bg="#006EF5"
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
            </Button></Link>  

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

      <Flex h="600px" justify={"center"} align={"center"} direction={"column"}>
          <Text fontSize={"60px"}>404</Text>
          <Img src="/icons/bugcat-bugcatsticker.gif" />
      </Flex>
    </>
  );
}
