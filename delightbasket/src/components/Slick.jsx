import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

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
