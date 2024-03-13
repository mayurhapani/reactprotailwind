import React from "react";
import { connect } from "react-redux";
import { addToCart, deleteFromCart, updateQuantity } from "./actions";

const YourComponent = ({ cartItems, addToCart, deleteFromCart, updateQuantity }) => {
  // Your component logic here
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
  addToCart,
  deleteFromCart,
  updateQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);
