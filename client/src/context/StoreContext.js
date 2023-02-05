import createDataContext from "./createDataContext";

const productReducer = (state, action) => {
  switch (action.type) {
    case "fetch_products":
      return action.payload;
    default:
      return state;
  }
};

const fetchProducts = (dispatch) => async () => {
  const response = await trackerApi.get("/api/product");
  dispatch({ type: "fetch_products", payload: response.data });
};

export const { Context, Provider } = createDataContext(
  productReducer,
  { fetchProducts },
  []
);
