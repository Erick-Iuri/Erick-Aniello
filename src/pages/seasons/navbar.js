
/* chakra content */
import {
  Button,
  Flex,
  Text,
  Img
} from "@chakra-ui/react"; /* */


/* React */
import React from "react"; /*  */


export default function Navbar() {
    return (
      <>
        <Flex
          mt="30px" 
          justify={"center"}>
            <Img 
            w="157px"
            src="/icons/Portfólio.png" />
        </Flex>
      </>
    )
  }