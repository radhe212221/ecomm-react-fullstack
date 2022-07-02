import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../utils/services";
export default function Checkout() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { orders } = state;
  const handleClick = () => {
    checkout()
      // .then((d) => [...orders,...d])
      // .then((d) => dispatch({type:"orders",payload:d}))
      .then((d) => console.log(d))
      .catch((d) => console.warn(d));
  };
  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleClick}>chckecout</button>
    </div>
  );
}
