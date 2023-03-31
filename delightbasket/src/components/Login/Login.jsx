import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer, { Footer1 } from "../Footer/Footer";
import Navbar from "../navbar";

export default function Login() {
  const handleclick = () => {
    console.log("okk");
  };
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              color="brown"
            >
              Login your account
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onClick={handleclick}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"teal"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"teal.400"}
                    color={"white"}
                    _hover={{
                      bg: "teal.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer1 />
    </>
  );
}
