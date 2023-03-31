import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Form,
  Stack,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
import Navbar2 from "../checkout/Navbar2";
import { Footer1 } from "../Footer/Footer";

export const Payment = () => {
  return (
    <>
      <Navbar2 />
      <Box
        width={"90%"}
        // border="1px solid blue"
        margin={"auto"}
        display="flex"
        mt={10}
      >
        <Paymentoption />
        <Box
          width={"75%"}
          margin="auto"
          mt="3rem"
          mb="3rem"
        >
          <Flex
            width={"100%"}
            justifyContent={"center"}
          >
            <Box
              width={"50%"}
              padding="2rem"
              border={"1px solid #e8e8e8"}
              height="250px"
              mt="1.5rem"
              bg="#f6f6f6"
            >
              <Text
                borderBottom={"1px solid #e8e8e8"}
                mb={"3px"}
                textAlign={"left"}
                fontSize={"15px"}
                fontWeight={450}
              >
                Order Summery
              </Text>
              <Box
                textAlign={"left"}
                fontSize={"14px"}
                fontWeight={400}
                ml={"1rem"}
              >
                <Text mb={"3px"}>
                  Basket value Rs
                  {/* {Math.floor(total - saved)} */}
                </Text>
                <Text
                  borderBottom={"1px solid #e8e8e8"}
                  mb={"3px"}
                >
                  Delivery Charge <span color="lightgreen">Free</span>
                </Text>
                <Flex
                  alignItems={"center"}
                  padding="2px"
                  justifyContent={"space-between"}
                >
                  <Text
                    mb={"3px"}
                    textAlign={"left"}
                    fontSize={"15px"}
                    fontWeight={450}
                    pb="1rem"
                    pt="1rem"
                  >
                    Total Amount Payable
                  </Text>
                  <Text
                    fontSize={"15px"}
                    fontWeight={450}
                  >
                    Rs
                    {/* {Math.floor(total - saved)} */}
                  </Text>
                </Flex>
              </Box>
              <Box mt="1 rem"></Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer1 />
    </>
  );
};

export function Paymentoption() {
  return (
    <>
      <Box
        display={"flex"}
        // border="1px solid black"
      >
        <Stack
          //   border="1px solid green"
          gap={5}
          mr={20}
          p={5}
        >
          <heading>Payment Option</heading>
          <Text>UPI</Text>
          <Text>Netbanking</Text>
          <Text>Cash on Delivery</Text>
          <Text>Credit / Debit card</Text>
        </Stack>
        <Stack
          //   border={"1px solid red"}
          w={350}
          p={10}
        >
          <form>
            <label htmlFor="">Card No</label>
            <Input
              variant="flushed"
              placeholder="Enter Card Number"
            />

            <br />
            <br />

            <label htmlFor="">Valid thru</label>

            <Input
              placeholder="MM dd"
              size="md"
              type={"Cvv"}
            />
            <br />
            <br />
            <label htmlFor="">CVV</label>
            <Input
              placeholder="Securty"
              size="md"
              type="password"
            />
            <br />
            <br />

            <CompExample />
          </form>
        </Stack>
      </Box>
    </>
  );
}

export function CompExample() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="success">
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Payment Successful</AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Submitt</Button>
  );
}
