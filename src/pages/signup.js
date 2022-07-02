import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSignup } from "../utils/services";
export default function Signup() {
  const navigate = useNavigate();
  const [ob, setob] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // token;
    // user;
    authSignup(ob)
      .then((d) => dispatch({ type: "signup", payload: d }))
      .then((d) => navigate("/login"))
      .catch((d) => console.log(`err:`, d));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setob({ ...ob, [name]: value });
  };
  return (
    <div>
      <h1>Signup</h1>
      <input name="name" placeholder="name" onChange={handleChange} />
      <input name="email" placeholder="email" onChange={handleChange} />
      <input name="phone" placeholder="phone" onChange={handleChange} />
      <input name="password" placeholder="password" onChange={handleChange} />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}
