const initialState = {
  products: [],
  tags: [],
  cart: [],
  orders: [],
  users: [],
  filters: ["old", "new", "rating", "discount"],
  user: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loggedin: localStorage.getItem("token") ? true : false,
  tagname: "",
  search: "",
  col: "id",
  order: true,
};

const reducer = (state = initialState, action) => {
  // console.log(action.type,action.payload)
  switch (action?.type) {
    case "login":
      return { ...state, user: action?.payload, loggedin: true };
    case "products":
      return { ...state, products: action?.payload };
    case "tags":
      return { ...state, tags: action?.payload };
    case "cart":
      return { ...state, cart: action?.payload };
    case "orders":
      return { ...state, orders: action?.payload };
    case "search":
      return { ...state, search: action?.payload };
    case "tagname":
      return { ...state, tagname: action?.payload };
    case "sort":
      return { ...state, col: action?.payload, order: !state?.order };
    case "add-to-cart":
      return { ...state, cart: action?.payload };
    case "update-to-cart":
      return { ...state, cart: action?.payload };
    case "remove-to-cart":
      return { ...state, cart: action?.payload };
    case "logout":
      return { ...state, loggedin: false, user: null, token: null };

    default:
      return state;
  }
};

export default reducer;
