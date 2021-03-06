import React from "react";
import { Provider } from "react-redux";
import App from "../pages/app";
import store from "./store";
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
