import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boot = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({type:"logout"})
    navigate("/")
  };
  useEffect(boot, []);
  return <div>Logout</div>;
}
