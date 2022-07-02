import axios from "./axios";
export const getProducts = () => {
  return axios.get("/products").then((res) => res.data);
};
export const getTags = () => {
  return axios.get("/tags").then((res) => res.data);
};
export const getCart = () => {
  return axios.get("/cart").then((res) => res.data);
};
export const getOrders = () => {
  return axios.get("/orders").then((res) => res.data);
};

export const authLogin = (payload) => {
  return axios
    .post("/login", payload)
    .then((res) =>
      res?.data?.status === true
        ? Promise.resolve(res?.data?.data?.token)
        : Promise.reject("failed to login")
    )
    .then((d) => {
      localStorage.setItem("token", d);
      return d;
    });
};
export const authSignup = (payload) => {
  return axios
    .post("/signup", payload)
    .then((res) =>
      res?.data?.status === true
        ? Promise.resolve(res?.data?.data)
        : Promise.reject("failed to signup")
    )
    .then((d) => {
      
      return d;
    });
};

export const addToCart = (payload) => {
  return axios.post("/add", payload).then((res) => res.data);
};

export const removeFromCart = (payload) => {
  return axios.delete("/remove/" + payload).then((res) => res.data);
};
export const updateQty = (payload) => {
  const { id, qty } = payload;
  return axios.patch(`/update/${id}/${qty}`).then((res) => res.data);
};
export const checkout = () => {
  return axios.get(`/checkout`).then((res) => res.data);
};
