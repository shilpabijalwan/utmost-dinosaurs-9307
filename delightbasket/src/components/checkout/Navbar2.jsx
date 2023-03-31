import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@chakra-ui/icons";
import { Icon, VStack, HStack, Text } from "@chakra-ui/react";

export default function Navbar2() {
  return (
    <Box
      // border="2px solid red"
      // boxShadow="md"
      boxShadow="lg"
      bg="white"
      position={"sticky"}
      top={0}
      display={"Flex"}
      mx="auto"
      pl={35}
      pr={30}
      justifyContent="space-between"
      mb={2}
      zIndex={4}
      w={"100%"}
      m="auto"
    >
      <Link to="/">
        <img
          // width={200}
          src="DElight.png"
          alt="name"
        />
      </Link>
      <HStack>
        <Icon
          as={PhoneIcon}
          color="teal"
        />
        <Text>1860 123 1000</Text>
      </HStack>
    </Box>
  );
}
