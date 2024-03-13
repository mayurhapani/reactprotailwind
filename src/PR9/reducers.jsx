import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from "./actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
