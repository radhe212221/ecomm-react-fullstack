import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromorders, updateQty } from "../utils/services";
export default function Orders() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { orders } = state;

  return (
    <div>
      <h1>orders {orders?.length||0}</h1>

      <table>
        <thead>
          <tr>
            <th>sno</th>
            <th>image</th>
            <th>price</th>
            <th>discount</th>
            <th>qty</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((x) => (
            <tr key={x._id}>
              <td>{x._id}</td>
              <td>{x.image}</td>
              <td>{x.price}</td>
              <td>{x.discount}</td>
              <td>{x.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
