import React from "react";
import Navbar, { Thirdline } from "./navbar";
import Footer from "./Footer/Footer";
import { Footer1 } from "./Footer/Footer";
import Brand from "./midpaet/Brand";
import Slick, { GenericCarousel, Slick2 } from "./Slick";

import FruitAndVegetable, {
  BankOffers,
  BeautyandHygiene,
  Beverages,
  CleaningHousehold,
  HomeandKitchen,
  MostPopular,
  Secondline,
  SnacksStore,
  Staple,
  TopOffers,
} from "./midpaet/Middle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Thirdline />
      <Slick />
      <Secondline />
      <BankOffers />
      <MostPopular />
      <TopOffers />
      <GenericCarousel />
      <FruitAndVegetable />
      <Staple />

      <Beverages />
      <SnacksStore />
      <CleaningHousehold />
      <BeautyandHygiene />
      <HomeandKitchen />
      <Slick2 />
      <Brand />
      <Footer />
      <Footer1 />
    </div>
  );
}
