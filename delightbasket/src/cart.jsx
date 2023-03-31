import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { useModalContext } from "@chakra-ui/react";
import { Search2Icon, PhoneIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Stack,
  Tr,
  Th,
  Td,
  TableCaption,
  VStack,
  TableContainer,
  Container,
  Box,
  Heading,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import Navbar, { Thirdline } from "./components/navbar";
import { Footer1 } from "./components/Footer/Footer";

export default function Cart() {
  return (
    <>
      <Navbar />
      <Thirdline />
      <br />
      <br />
      <Box
        // border={"2px solid black"}
        display={"flex"}
        w={"90%"}
        m="auto"
      >
        <Box
          boxShadow="dark-lg"
          m={2}
          p={10}
          w={"100%"}
        >
          <Heading
            size={10}
            textAlign="center"
            color="brown"
          >
            {" "}
            Your Basket (01 item)
          </Heading>
          <br />
          <Box
            border={"1px solid RGBA(0, 0, 0, 0.04)"}
            display={"flex"}
            // width={"90%"}
            m="auto"
            justifyContent={"space-evenly"}
          >
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>ITEM DESCRIPTION</Th>
                    <Th>UNIT PRICE</Th>
                    <Th isNumeric>QUANTITY</Th>
                    <Th isNumeric>SUBTOTAL</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>FRESHO Raw Mango 1 kg</Td>
                    <Td>41</Td>
                    <Td isNumeric>1kg</Td>
                    <Td isNumeric>412</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <br />
          <br />
          <Box
            display={"flex"}
            justifyContent="space-between"
            m={"auto"}
            // border="2px solid green"
          >
            <Box
              //   border={"1px solid red"}
              mt="20"
            >
              <VStack spacing={40}>
                <AlertDialogExample />
                <Link to="/">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                  >
                    CONTINUE SHOPPING
                  </Button>
                </Link>
              </VStack>
            </Box>

            <Box
              display={"flex"}
              //   border={"3px solid brown"}
              ml={"10%"}
              justifyContent="space-between"
            >
              <Box
                border={"2px solid  RGBA(0, 0, 0, 0.17)"}
                borderRadius="5px"
                p={5}
                pt={20}
                pb={20}
                //   w={"20%"}
                h="50px"
                mt="20"
                mr={2}
              >
                product discription
              </Box>

              <Box
                border={"2px solid  RGBA(0, 0, 0, 0.17)"}
                borderRadius="5px"
                mt={5}
                mb={5}
                mr={5}
                p={20}
                pr={50}
                pl={50}
                w={500}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Text>Subtotal</Text>
                  <Text>RS</Text>
                </Box>
                <br />
                <hr />
                <br />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Text>TOTAL</Text>
                  <Text>RS</Text>
                </Box>
                <br />
                <hr />
                <Box alignItems={"end"}>
                  <br />
                  <br />
                  <Link to="/checkout">
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="yellow"
                      variant="solid"
                      p={7}
                      pl={10}
                      pr={10}
                    >
                      <Text size={25}>Checkout</Text>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer1 />
    </>
  );
}
// *******************************************************************************************************************************************
export function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        variant={"outline"}
      >
        Empty Basket
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              Are you sure you want to remove all items from your basket?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                variant={"outline"}
                colorScheme={"red"}
              >
                Ok
              </Button>
              <Button
                onClick={onClose}
                ml={3}
                variant={"outline"}
                colorScheme={"green"}
              >
                Cancle
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
