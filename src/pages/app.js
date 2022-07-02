import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as service from "../utils/services";
import { useDispatch } from "react-redux";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Cart from "./cart";
import Checkout from "./checkout";
import Orders from "./orders";
import Logout from "./logout";
import Errorpage from "./errorpage";
export default function App() {
  const dispatch = useDispatch();
  const boot = () => {
    service
      .getProducts()
      .then((d) => dispatch({ type: "products", payload: d.data }));
    service.getTags().then((d) => dispatch({ type: "tags", payload: d.data }));
    service.getCart().then((d) => dispatch({ type: "cart", payload: d.data }));
    service
      .getOrders()
      .then((d) => dispatch({ type: "orders", payload: d.data }));
  };
  useEffect(boot, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
