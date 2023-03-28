import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/CartReducer";
import {
  INCREASE_CART_COUNT,
  ADD_TO_CART,
  TOGGLE_AMOUNT,
  CLEAR_CART,
} from "../utils/actions";
const CartData = React.createContext();
export const writeToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const CartContext = ({ children }) => {
  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const storedCart = localStorage.getItem("cart");

  if (!storedCart) {
    writeToLocalStorage("cart", []);
  }
  const initialState = {
    cart: getFromLocalStorage("cart"),
    totalAmount: 0,
    totalPrice: 0,
    shipping_fee: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    writeToLocalStorage("cart", state.cart);
    dispatch({ type: INCREASE_CART_COUNT });
  }, [state.cart]);
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const toggleAmount = (idColor, operation) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { idColor, operation } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <CartData.Provider value={{ ...state, addToCart, toggleAmount, clearCart }}>
      {children}
    </CartData.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartData);
};
export { useCartContext, CartData, CartContext };
