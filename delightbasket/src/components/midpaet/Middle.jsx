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

export default function FruitAndVegetable() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Fruits and Vegetables
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_organic-fnc-fnv_Storefront_m_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_fresh-fruits-fnv_Storefront_m_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_fresh-vegetables-fnv_Storefront_m_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_cuts-sprouts-fnv_Storefront_m_250323_04.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_exotic-fruits-fnv_Storefront_m_250323_05.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_herbs-seasonings-fnv_Storefront_m_250323_06.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
// **************Stapleeee*************
export function Staple() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Your Daily Staples
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_rice-staplesStorefront_m_480_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_salt-staplesStorefront_m_480_250323_06.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

// Beverages***********************
export function Beverages() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Beverages
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_beve-health-drinks_m_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-tea-coff_m_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-flavoured-milk_m_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_beve-juices_m_250323_04.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-power-nooster_m_250323_05.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-soft-drinks_m_250323_06.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
// ********************Snacks Store*****************************************************************
export function SnacksStore() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Snacks Store
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_chai-time_m_480_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_morining-start_m_480_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_satisfy-hunger_m_480_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_sweet-craving_m_480_250323_04.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
//Cleaning & Household************************************
export function CleaningHousehold() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Cleaning & Household
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_cleaners-disfec_cleaningStorefront_m_480_250123_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_fresheners-repellem-cleaningStorefront_m_480_250123_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_detergebts-favric-cleaningStorefront_m_480_250123_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_disposable-cleaningStorefront_m_480_250123_4.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
// ************************Beauty and Hygiene*************************************************************
export function BeautyandHygiene() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Beauty and Hygiene
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-makeup-carnival_m_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-sunsreens_m_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-scentful-deos_m_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-shaving-saviouurs_m_250323_04.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-power-nooster_m_250323_05.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-min35off_m_250323_05.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
// Home and Kitchen*****************************************
export function HomeandKitchen() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Home and Kitchen
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-under-99_m_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-100-199_m_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-min30off_m_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-sstorage-containers_m_250323_06.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GMmin-50off_m_250323_04.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-pressiure-cooker_m_250323_05.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

// *********************top offer*************
export function TopOffers() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Top Offers
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_dow-topoffersStorefront_m_480_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_big-packs-topoffersStorefront_m_480_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_combos-topoffersStorefront_m_480_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_30-corner-topoffersStorefront_m_480_250323_04.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

// *************Most Popular***************
export function MostPopular() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Top Offers
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_fnv-mangoes_m_480_250323_01.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_summer-bottles_m_480_250323_02.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_sunscreens_m_480_250323_03.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_summer-deos_m_480_250323_04_.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

// ******************bank offer**************
export function BankOffers() {
  return (
    <>
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Bank Offers
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_simple-all_360_250323.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_mobikwik_360_250323.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_paytm_360_250323.jpg"
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
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_freecharge_360_250323.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
// ********************secondline***************
export function Secondline() {
  return (
    <>
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
            borderRadius: "7px",
            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_01.png"
            alt=""
          />
        </Box>

        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",
            borderRadius: "7px",
            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_02.png"
            alt=""
          />
        </Box>

        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",
            borderRadius: "7px",
            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_03.png"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",
            borderRadius: "7px",
            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_04.png"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",
            borderRadius: "7px",
            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_05.png"
            alt=""
          />
        </Box>
        <Box
          border={"1px solid RGBA(0, 0, 0, 0.04)"}
          _hover={{
            boxShadow: "dark-lg",
            border: "none",
            borderRadius: "7px",

            bg: "white",
          }}
        >
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_06.png"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
