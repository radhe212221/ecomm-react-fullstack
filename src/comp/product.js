import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../utils/services";
export default function Product(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { loggedin, cart } = state;
  const id = props?._id;

  const _qty = cart?.find((x) => x.pid === id)?.qty || 0;

  const handleAddtoCart = () => {
    addToCart({ pid: id })
      .then((d) =>
        d?.status === true ? d?.data : Promise.reject("failed to add")
      )
      .then((d) =>_qty===0? [...cart, d]:cart?.map(x=>x.pid===id?(d):x))
      .then((d) => dispatch({ type: "cart", payload: d }))
      .catch((d) => console.warn(d));
  };
  return (
    <div>
      <img alt={props?.image} />
      <div>{props?.title}</div>
      <div>{props?.new}</div>
      <div>{props?.rating} reviews</div>
      <mark>{props?.discount} % off</mark>
      <br />
      <font color="orange">{props?.tags} </font>
      <br />
      {loggedin && <button onClick={handleAddtoCart}>add ({_qty})</button>}
    </div>
  );
}
