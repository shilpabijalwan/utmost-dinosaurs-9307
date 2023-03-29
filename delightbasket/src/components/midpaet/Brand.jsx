import React from "react";
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
  Center,
  SimpleGrid,
  Link,
  Container,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { BsInstagram } from "react-icons/bs";
export default function Brand() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Brand Store
      </Heading>
      <hr />
      <SimpleGrid
        w={"90%"}
        minChildWidth="120px"
        spacing="40px"
        m={"auto"}
        mb={10}
        mt={5}
      >
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/amul-hp_brandStorefront_m_480_250323_01.jpg"
            alt=""
          />
        </Box>

        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/dettol-hp_brandStorefront_m_480_250323_02.jpg"
            alt=""
          />
        </Box>

        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/coca-cola-hp_brandStorefront_m_480_250323_03.jpg"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/loreal-hp_brandStorefront_m_480_250323_04.jpg"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/Baulli_hp_brandStorefront_m_480_250323_05.jpg"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/durex-hp_brandStorefront_m_480_250323_06.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

// *****************************
