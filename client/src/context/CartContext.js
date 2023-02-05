import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return { ...state, items: [...state.items, action.payload] };
    case "remove_from_cart":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const removeItem = (dispatch) => (id) => {
  dispatch({ type: "remove_from_cart", payload: id });
};

const addItem = (dispatch) => (item) => {
  dispatch({ type: "add_to_cart", payload: item });
};

export const { Context, Provider } = createDataContext(
  cartReducer,
  { addItem, removeItem },
  { items: [] }
);
