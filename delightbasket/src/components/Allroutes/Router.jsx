import { NavLinks, Navigate, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "../Signup/Signup";
import Home from "../Home";
import Login from "../Login/Login";
import Cart from "../../cart";
import { Checkout } from "../checkout/Checkout";
import { Payment } from "../Payment_Page/Payment";
import Mangoproductpage from "../Mangos/Mangoproductpage";
import SingleProductPage from "../Mangos/Singlemango";
import DryFruitpage from "../DryFruit/DryProductpage";
import SingleDry from "../DryFruit/SingleDry";

export default function Router() {
  return (
    <Routes>
      <Route
        path=""
        element={<Home />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
      <Route
        path="/payment"
        element={<Payment />}
      />
      <Route
        path="/mangos"
        element={<Mangoproductpage />}
      />
      <Route
        path="/singleproductpage/:id"
        element={<SingleProductPage />}
      />
      <Route
        path="/dryfruitproductpage"
        element={<DryFruitpage />}
      />
      <Route
        path="/singledryfurit/:id"
        element={<SingleDry />}
      />
    </Routes>
  );
}
