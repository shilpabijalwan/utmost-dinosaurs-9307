import React from "react";
import { useState } from "react";
import { useColorMode, LightMode, DarkMode } from "@chakra-ui/react";
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

import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import footer from "./footer.png";
import { color } from "framer-motion";

export default function Footer() {
  return (
    <>
      <Box
        w={"90%"}
        m="auto"
        mb={20}
        h={"100%"}
      >
        <img
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg"
          alt=""
          width={"100%"}
        />
      </Box>
      <Box
        w={"90%"}
        border="1px solid gray"
        m={"auto"}
      >
        <Text p={20}>
          <Heading>bigbasket – online grocery store </Heading>
          <br />
          Did you ever imagine that the freshest of fruits and vegetables, top
          quality pulses and food grains, dairy products and hundreds of branded
          items could be handpicked and delivered to your home, all at the click
          of a button? India’s first comprehensive online megastore,
          bigbasket.com, brings a whopping 20000+ products with more than 1000
          brands, to over 4 million happy customers. From household cleaning
          products to beauty and makeup, bigbasket has everything you need for
          your daily needs. bigbasket.com is convenience personified We’ve taken
          away all the stress associated with shopping for daily essentials, and
          you can now order all your household products and even buy groceries
          online without travelling long distances or standing in serpentine
          queues. Add to this the convenience of finding all your requirements
          at one single source, along with great savings, and you will realize
          that bigbasket- India’s largest online supermarket, has revolutionized
          the way India shops for groceries. Online grocery shopping has never
          been easier. Need things fresh? Whether it’s fruits and vegetables or
          dairy and meat, we have this covered as well! Get fresh eggs, meat,
          fish and more online at your convenience. Hassle-free Home Delivery
          options We deliver to 25 cities across India and maintain excellent
          delivery times, ensuring that all your products from groceries to
          snacks branded foods reach you in time.
          <ul>
            <li>
              Slotted Delivery: Pick the most convenient delivery slot to have
              your grocery delivered. From early morning delivery for early
              birds, to late-night delivery for people who work the late shift,
              bigbasket caters to every schedule.
            </li>
            <br />
            <li>
              {" "}
              Express Delivery: This super useful service can be availed by
              customers in cities like Bangalore, Mumbai, Pune, Chennai,
              Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders
              to your doorstep in 90 Minutes.
            </li>
            <br />
            <li>
              {" "}
              BB Specialty stores: Missed out on buying that essential item from
              your favorite neighborhood store for tonight’s party? We’ll
              deliver it for you! From bakery, sweets and meat to flowers and
              chocolates, we deliver your order in 90 minutes, through a special
              arrangement with a nearby specialty store, verified by us.
            </li>{" "}
          </ul>
          <br />
          <Heading> India’s biggest Online Supermarket </Heading>
          <br />
          bigbasket.com believes in providing the highest level of customer
          service and is continuously innovating to meet customer expectations.
          Our On-time Guarantee is one such assurance where we refund 5% of the
          bill value if the delivery is delayed (however, due to the pandemic
          caused by Covid-19 our delivery might get delayed. Delivery Guarantee
          will not be applicable). For all your order values above Rs. 1200, we
          provide free delivery. A wide range of imported and gourmet products
          are available through our express delivery and slotted delivery
          service. If you ever find an item missing on delivery or want to
          return a product, you can report it to us within 48 hours for a
          ‘no-questions-asked’ refund.
          <br />
          <br />
          Best quality products for our quality-conscious customers.
          <br />
          <br />
          bigbasket.com is synonymous with superior quality and continues to
          strive for higher levels of customer trust and confidence, by taking
          feedback and giving our customers what they want. We have added the
          convenience of pre-cut fruits in our Fresho range. If it’s a product
          category you’re looking to shop from, we’ve made it convenient for you
          to access all products in a section easily. For instance, if you’re
          looking for beverages, you can order from a long list of beverages
          that include cool drinks, hot teas, fruit juices and more. <br />
          <br />
          We are proud to be associated closely with the farmers from whom we
          source our fresh products. Most of our farm-fresh products are sourced
          directly from farmers, which not only ensures the best prices and
          freshest products for our customers but also helps the farmers get
          better prices. With more than 80 Organic Fruits and Vegetables and a
          wide range of organic staples, bigbasket has the largest range in the
          organic products category.
          <br /> When it comes to payment, we have made it easy for our
          customers can pay through multiple payment channels like Credit and
          Debit cards, Internet Banking, e-wallets and Sodexo passes or simply
          pay Cash on Delivery (COD).The convenience of shopping for home and
          daily needs, while not compromising on quality, has made bigbasket.com
          the online supermarket of choice for thousands of happy customers
          across India.
        </Text>
      </Box>
    </>
  );
}

export function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setname] = useState(true);
  function handleclick() {
    setname(!name);
  }
  return (
    <HStack onClick={handleclick}>
      <Button
        size="sm"
        colorScheme="pink"
        onClick={toggleColorMode}
      >
        {name ? "Light theme" : "Dark theme"}
      </Button>
    </HStack>
  );
}

// **********************

export function Footer1() {
  return (
    <>
      <Box
        w={"90%"}
        m="auto"
        mb={20}
      >
        <Flex
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={0}
          width={"100%"}
          fontSize={"14px"}
          fontWeight={"350"}
          mt={"3rem"}
          padding={"1rem"}
        >
          <Stack
            align={"flex-start"}
            w={"25%"}
          >
            <Text
              color={"brown"}
              fontSize={20}
              fontWeight={"bold"}
            >
              bigbasket
            </Text>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>In News</Link>
            <Link href={"#"}>Green bigbasket</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Affiliate</Link>
            <Link href={"#"}>Terms and Conditions</Link>
            <Link href={"#"}>Careers At bigbasket</Link>
            <Link href={"#"}>bb Instant</Link>
            <Link href={"#"}>bb Daily</Link>
            <Link href={"#"}>bb Blog</Link>
            <Link href={"#"}>bbnow</Link>
          </Stack>
          <Stack
            align={"flex-start"}
            w={"25%"}
          >
            <Text
              color={"brown"}
              fontSize={20}
              fontWeight={"bold"}
            >
              Help
            </Text>
            <Link href={"#"}>FAQ's</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>bb Wallet FAQ's</Link>
            <Link href={"#"}>bb wallet T&Cs</Link>
            <Link href={"#"}>Vendor Connect</Link>
          </Stack>
          <Stack
            align={"flex-start"}
            w={"25%"}
          >
            <Text
              color={"brown"}
              fontSize={20}
              fontWeight={"bold"}
            >
              Download Our App
            </Text>
            <Box>
              <img
                src="https://www.bbassets.com/static/v2557/custPage/build/content/img/Google-App-store-icon.png"
                alt=""
              />
            </Box>
            <Box>
              <img
                src="	https://www.bbassets.com/static/v2557/custPage/build/content/img/Apple-App-store-icon.png"
                alt=""
              />
            </Box>
          </Stack>

          <Stack
            align={"flex-start"}
            w={"25%"}
          >
            <Text
              color={"brown"}
              fontSize={20}
              fontWeight={"bold"}
            >
              Get Social With Us
            </Text>
            <Flex>
              <Box
                bg={"#3b5998"}
                boxSize={"40px"}
                borderRadius={"50%"}
                mr={"1rem"}
              >
                <TiSocialFacebook
                  color="white"
                  size={"40px"}
                />
              </Box>
              <Box
                bg={"red"}
                boxSize={"40px"}
                borderRadius={"50%"}
                mr={"1rem"}
              >
                <TiSocialPinterest
                  color="white"
                  size={"40px"}
                />
              </Box>
              <Box
                bg={"blue"}
                boxSize={"40px"}
                borderRadius={"50%"}
                mr={"1rem"}
              >
                <TiSocialTwitter
                  color="white"
                  size={"40px"}
                />
              </Box>
              <Flex
                bg={"#517fa4"}
                boxSize={"40px"}
                borderRadius={"50%"}
                textAlign="center"
                alignItems={"center"}
                justifyContent={"center"}
                mr={"1rem"}
              >
                <BsInstagram
                  color="white"
                  size={"25px"}
                />
              </Flex>
            </Flex>
          </Stack>
        </Flex>
        <Flex alignItems={"center"}></Flex>
        <br />
        <hr />
        <br />
        <Box>
          <Text>
            <Heading
              size={20}
              color={"brown"}
            >
              POPULAR CATEGORIES:
            </Heading>
            Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes,
            Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy
            Vegetables, Frozen Veg Food, Diapers & Wipes,
            {/* </Text> */}
            {/* <Text> */}
            <Heading
              size={20}
              color={"brown"}
            >
              POPULAR BRANDS:
            </Heading>
            Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez,
            Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero,
            Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk,
            Pedigree,
            <br />
            <Heading
              size={20}
              color={"brown"}
            >
              CITIES WE SERVE:
            </Heading>
            Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai,
            Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar,
            Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam,
            Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal,
            Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack,
            Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur,
            Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore
            Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural,
            Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural,
            Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural,
            Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur
            Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur
            Rural, Ranchi, Nashik, Agra, Kozhikode, Amritsar,
          </Text>
          <img
            src={footer}
            alt=""
          />
        </Box>
      </Box>
      <hr />
      <HStack
        w={"100%"}
        bg="gray"
        textAlign="center"
      >
        <Text textAlign="center">
          Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd Customer
          Support
        </Text>
      </HStack>
    </>
  );
}
