import { Box } from "@chakra-ui/layout";
import { Text, SimpleGrid, Heading, boxSizing } from "@chakra-ui/layout";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function GenericCarouselCard({ image, name, price, rating }) {
  return (
    <>
      <Box
        w={"90%"}
        m="auto"
        boxSizing="borderBox"
        border="1px solid  RGBA(0, 0, 0, 0.06)"
      >
        <SimpleGrid
          w={"90%"}
          minChildWidth="100px"
          spacing="20px"
          m={"auto"}
          mb={10}
          mt={5}
          //   border="1px solid  RGBA(0, 0, 0, 0.06)"
          pl={5}
        >
          <img
            src={image}
            width="100px"
            alt=""
          />
          <Text>{name}</Text>

          <Text>Rs {price}</Text>
          <Text> rating:{rating}</Text>
        </SimpleGrid>
        <Box
          display={"flex"}
          pl={0}
          border="1px solid  RGBA(0, 0, 0, 0.06)"
          justifyContent={"space-between"}
        >
          <Button
            size="md"
            colorScheme="blue"
            borderRadius={0}
          >
            Qrt
          </Button>
          <Button
            size="xs"
            mt={2}
            colorScheme="teal"
            borderRadius={0}
          >
            1
          </Button>
          <Button
            size="md"
            colorScheme="blue"
            borderRadius={0}
          >
            add
          </Button>
        </Box>
      </Box>
    </>
  );
}
