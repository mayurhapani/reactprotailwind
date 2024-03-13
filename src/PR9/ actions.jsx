import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from "./actionTypes";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const deleteFromCart = (itemId) => ({
  type: DELETE_FROM_CART,
  payload: itemId,
});

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { itemId, quantity },
});
