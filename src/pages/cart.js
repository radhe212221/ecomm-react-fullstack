import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty } from "../utils/services";
export default function Cart() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { cart } = state;

  const handleQty = (e) => {
    // console.log(e.target)
    const { id } = e.target;
    const qty = +e.target.getAttribute("qty");
    const payload = { id, qty };
    updateQty(payload)
      .then((d) => cart.map((x) => (x._id === id ? { ...x, qty } : x)))
      .then((payload) => dispatch({ type: "cart", payload }))
      .catch((d) => console.warn(d));
  };
  const handleRemove = (e) => {
    const id = e.target.id;
    removeFromCart(id)
      .then((d) => cart?.filter((x) => x._id !== id))
      .then((payload) => dispatch({ type: "cart", payload }))
      .catch((d) => console.warn(d));
  };
  return (
    <div>
      <h1>cart {0}</h1>

      <table>
        <thead>
          <tr>
            <th>sno</th>
            <th>image</th>
            <th>price</th>
            <th>discount</th>
            <th>qty</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((x) => (
            <tr key={x._id}>
              <td>{x._id}</td>
              <td>{x.image}</td>
              <td>{x.price}</td>
              <td>{x.discount}</td>
              <td>{x.qty}</td>
              <td>
                <button onClick={handleQty} id={x._id} qty={x.qty + 1}>
                  +
                </button>
                <button onClick={handleQty} id={x._id} qty={x.qty - 1}>
                  -
                </button>
                <button onClick={handleRemove} id={x._id}>
                  0
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
