import { Thirdline } from "../navbar";
import Navbar from "../navbar";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
import { Footer1 } from "../Footer/Footer";

export default function DryFruitpage() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setprice] = useState(false);

  function getdata() {
    setLoading(true);
    axios
      .get("https://tan-frail-hummingbird.cyclic.app/dryfruit")
      .then((res) => {
        console.log(res);
        setdata(res.data);
        setLoading(false);
      })
      .catch((eror) => {
        console.log(eror);
      });
  }
  console.log(data);

  const handleclick = (e) => {
    console.log(e.target.checked);
    setprice(e.target.checked);
    if (price) {
      setLoading(true);
      axios
        .get("https://tan-frail-hummingbird.cyclic.app/dryfruit", {
          params: {
            ID: 12345,
          },
        })

        .then((res) => {
          console.log(res);
          setdata(res.data);
          setLoading(false);
        })
        .catch((eror) => {
          console.log(eror);
        });
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar />
      <Thirdline />
      <br />
      <Heading
        fontSize={25}
        textAlign="center"
        color={"brown"}
        mb={3}
      >
        Dry Fruit
      </Heading>
      <Box
        key={Math.random(Number)}
        display={"flex"}
        justifyContent="space-between"
        border={"1px solid RGBA(0, 0, 0, 0.06)"}
        w={"90%"}
        m="auto"
      >
        <Stack
          border={"1px solid RGBA(0, 0, 0, 0.06)"}
          w="20%"
          p={"0%"}
          spacing={5}
        >
          <Text fontWeight={"bold"}>Sort By price</Text>

          <Checkbox onChange={handleclick}>Rs 50 to Rs 200 </Checkbox>
          <Checkbox onChange={handleclick}>Rs 200 to Rs 300</Checkbox>
          <Checkbox onChange={handleclick}>Rs 300 to Rs 500</Checkbox>
          <Checkbox onChange={handleclick}>More than Rs 501 </Checkbox>
          <hr />
          <Text fontWeight={"bold"}>Brand</Text>

          <Checkbox>Fresho</Checkbox>
          <Checkbox>bb Combo </Checkbox>
        </Stack>
        <SimpleGrid
          w={"60%"}
          minChildWidth="200px"
          spacing="40px"
          m={"auto"}
          mb={10}
          mt={5}
          justifyContent="center"
        >
          {loading ? (
            <center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            </center>
          ) : (
            data?.map((ele) => {
              return (
                <>
                  <Box
                    key={ele.id}
                    border={"1px solid RGBA(0, 0, 0, 0.04)"}
                    _hover={{
                      boxShadow: "dark-lg",
                      border: "none",

                      // bg: "white",
                    }}
                    textAlign="center"
                  >
                    <Text>{ele.brand}</Text>
                    <Link to={`/singledryfurit/${ele.id}`}>
                      <Box m={10}>
                        <img
                          src={ele.image}
                          alt=""
                          width={"140"}
                        />
                      </Box>
                    </Link>
                    <Text fontSize={"20px"}>{ele.name}</Text>
                    <Text>price: Rs {ele.price}</Text>
                    <Text> Qrt: {ele.Quantity} </Text>
                    <Text>deliver: {ele.deliver} </Text>

                    <Box
                      display={"flex"}
                      pl={0}
                      border="1px solid  RGBA(0, 0, 0, 0.06)"
                      justifyContent={"space-between"}
                    >
                      <Button
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
                        pl={5}
                        colorScheme="blue"
                        borderRadius={0}
                      >
                        add
                      </Button>
                    </Box>
                  </Box>
                </>
              );
            })
          )}
        </SimpleGrid>
      </Box>
      <Footer1 />
    </>
  );
}
