import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../utils/services";
export default function Login() {
  const navigate = useNavigate();
  const [ob, setob] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // token;
    // user;
    authLogin(ob)
      .then((d) => dispatch({ type: "login", payload: d }))
      .then((d) => navigate("/"))
      .catch((d) => console.log(`err:`, d));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setob({ ...ob, [name]: value });
  };
  return (
    <div>
      <h1>Login</h1>
      <input name="email" placeholder="email" onChange={handleChange} />
      <input name="password" placeholder="password" onChange={handleChange} />
      <button onClick={handleSubmit}>login</button>
    </div>
  );
}
