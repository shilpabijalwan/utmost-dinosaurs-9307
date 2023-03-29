import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer/Footer";
import { Footer1 } from "./Footer/Footer";
import Brand from "./midpaet/Brand";

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
      <Secondline />
      <BankOffers />
      <MostPopular />
      <TopOffers />
      <FruitAndVegetable />
      <Staple />
      <Beverages />
      <SnacksStore />
      <CleaningHousehold />
      <BeautyandHygiene />
      <HomeandKitchen />
      <Brand />

      <Footer />
      <Footer1 />
    </div>
  );
}
