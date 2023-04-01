import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import GenericCarouselCard from "./GenericCarouselCard";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon, ArrowLeftIcon, Icon } from "@chakra-ui/icons";

import axios from "axios";

export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <Box mb={20}>
        <Slider {...settings}>
          <Box>
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg" />
          </Box>
          <Box>
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_270323_Bangalore.jpg" />
          </Box>
        </Slider>
      </Box>
    </>
  );
}

// *******************************
export function Slick2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Box
        mb={"27px"}
        border="1px solid RGBA(0, 0, 0, 0.04)"
        w={"90% "}
        m="auto"
      >
        <Slider {...settings}>
          <Box>
            <Image
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250223_400.jpg"
              width={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250323_400.jpg"
              width={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250223_400.jpg"
              width={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250323_400.jpg"
              width={"100%"}
            />
          </Box>
        </Slider>
      </Box>
      <br />
      <br />
    </>
  );
}

// ****************************************slicker 2***************************************************************************************************************************************************\

export function GenericCarousel({ url, heading }) {
  const [data, setdata] = useState("");
  const [slider, setSlider] = useState(data);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  //   Get Data
  const getData = () => {
    axios
      .get("https://tan-frail-hummingbird.cyclic.app/randomdata")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box
        position={"relative"}
        margin="auto"
        w={"90%"}
        // border="3px solid black"
      >
        <Box
          position={"absolute"}
          top="50%"
          width="100%"
          zIndex={1}
          // border="1px solid black"
          justifyContent={"center"}
        >
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            px={9}
          >
            <Icon
              as={ArrowLeftIcon}
              boxSize={6}
              fontSize={"40px"}
              color="brown"
              onClick={(e) => slider.slickPrev()}
              left={0}
            />

            <Icon
              as={ArrowRightIcon}
              boxSize={6}
              color="brown"
              fontSize={"40px"}
              onClick={(e) => slider.slickNext()}
              right={0}
            />
          </Flex>
        </Box>

        <Divider />
        <Heading
          fontSize={25}
          textAlign="center"
          color={"brown"}
          mb={3}
        >
          Best Sellers
        </Heading>
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider)}
        >
          {data.length > 0 &&
            data?.map((item) => (
              <GenericCarouselCard
                {...item}
                key={item.id}
              />
            ))}
        </Slider>
      </Box>
    </>
  );
}
