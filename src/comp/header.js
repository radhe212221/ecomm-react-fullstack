import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { loggedin, user, cart, orders } = state;
  return (
    <div>
      <Link to="/">home</Link>
      {!loggedin && <Link to="/login">login</Link>}
      {!loggedin && <Link to="/signup">signup</Link>}
      {loggedin && <Link to="/cart">cart ({cart?.length || 0})</Link>}
      {loggedin && <Link to="/orders">orders ({orders?.length || 0})</Link>}
      {loggedin && <Link to="/checkout">checkout</Link>}
      {loggedin && <Link to="/logout">logout {user?.name || "guest"}</Link>}
    </div>
  );
}
