import React from "react";
import { border, Center, Container, Icon } from "@chakra-ui/react";
import { Example } from "./Footer/Footer";
import { Link } from "react-router-dom";
import { CategoriesList } from "./menu";

import {
  Box,
  Flex,
  Input,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  Spacer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Search2Icon, PhoneIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
// import { Example } from "./Footer/Footer";
import { color } from "framer-motion";

const Navbar = () => {
  const [signup, setsignup] = useState(false);

  return (
    <>
      <Flex
        w={"95%"}
        pb={1}
        pt={1}
        minWidth="max-content"
        alignItems="center"
        gap="7"
      >
        <Spacer />
        <Icon
          as={PhoneIcon}
          color="teal"
        />
        1860 123 1000
        <Stack
          direction="row"
          spacing={4}
        >
          <Link to="/signup">
            <Button
              colorScheme="teal"
              variant="solid"
              h={8}
            >
              SignUp
            </Button>
          </Link>
          <Link to="/login">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              h={8}
            >
              LogIn
            </Button>
          </Link>
        </Stack>
      </Flex>

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
        justifyContent="space-around"
        mb={2}
        zIndex={4}
      >
        <Link to="/">
          <img
            // width={200}
            src="DElight.png"
            alt="name"
          />
        </Link>
        <Flex
          // border={"2px solid black"}
          w={"700px"}
          align="center"
          pr="20px"
        >
          <Input
            border={"1px solid #C6F6D5"}
            placeholder="Search For Product"
            type={"search"}
            w={"100%"}
            size="s"
            p={0.4}
            focusBorderColor="#C6F6D5"
            color="brown"
            _placeholder={{ opacity: 0.5, color: "inherit" }}
          />
          <Icon
            border={"1px solid #C6F6D5"}
            as={Search2Icon}
            w={7}
            h={7}
            p={"5px"}
            bg="#C6F6D5"
          />
        </Flex>
        <HStack
          w={`200px`}
          boxShadow="xs"
          p="1"
          bg="#FAF5FF"
        >
          <Box w={50}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTiqpwUxWyAGSD-9-rqaMGAJ4qUFVd7b81XFL4Nr3_KKADUxv1hHe1ELPZoeVPL_cp6Q&usqp=CAU"
              alt=""
              width={"70px"}
            />
          </Box>
          <Box>
            <Text
              color="#C05621"
              fontSize="18"
              fontWeight="bold"
            >
              My Basket <br /> Items
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;

export function Thirdline() {
  return (
    <HStack
      fontWeight="bold"
      boxShadow="md"
      p="1"
      gap={4}
      w={"100%"}
      m={"auto"}
      // border="1px solid blue"
      px={12}
    >
      <Box>
        <Text
          pl={1}
          pr={1}
        >
          <CategoriesList />
        </Text>
      </Box>
      <Box
        display={"Flex"}
        _hover={{
          bg: "teal",
        }}
      >
        <Text
          p={"3px"}
          pr={7}
          pl={7}
        >
          Offers
        </Text>
      </Box>
      <Text
        p={"3px"}
        pr={7}
        pl={7}
        ml={30}
      >
        <Example />
      </Text>
    </HStack>
  );
}
