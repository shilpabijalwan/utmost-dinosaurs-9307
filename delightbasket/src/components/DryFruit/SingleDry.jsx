import React from "react";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
  Container,
  Checkbox,
} from "@chakra-ui/react";
import Navbar, { Thirdline } from "../navbar";
import { Footer1 } from "../Footer/Footer";
function SingleDry() {
  const [data, setData] = useState({});
  const val = useParams();
  const [loading, setLoading] = useState(false);

  const getdata = () => {
    setLoading(true);
    axios
      .get(`https://tan-frail-hummingbird.cyclic.app/dryfruit/${val.id}`)

      .then((data) => {
        setLoading(false);
        setData(data.data);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log(data);

  return loading ? (
    <>
      <Navbar />
      <h1>....loading</h1>
    </>
  ) : (
    <>
      <Navbar />
      <Thirdline />

      <Box
        // border={"2px solid blue"}
        w={"80%"}
        m="auto"
        mt={20}
      >
        <br />
        <Box
          display={"flex"}
          justifyContent="space-around"
        >
          <Box>
            <img
              src={data.image}
              width="100%"
            />
          </Box>
          <Box
            // border={"1px solid red"}
            w="30%"
            textAlign={"center"}
          >
            <Text fontSize={15}>{data.brand}</Text>
            <Text fontSize={20}>
              {data.name},{data.Quantity}kg
            </Text>

            <Text
              fontSize={20}
              mb="5"
            >
              price:- Rs {data.price}
            </Text>
            <HStack pl={10}>
              <Button>1</Button>
              <Button>Add to basket</Button>
              <Button>Save</Button>
            </HStack>
          </Box>
        </Box>

        <br />
        <br />
        <hr />
        <Box>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Text fontSize={20}> Description: {data.description}</Text>
          <Text fontSize={20}>Benefits: {data.Benefits}</Text>
        </Box>
      </Box>
      <Footer1 />
    </>
  );
}
export default SingleDry;
