import {
  INCREASE_CART_COUNT,
  ADD_TO_CART,
  TOGGLE_AMOUNT,
  CLEAR_CART,
} from "../utils/actions";
import { writeToLocalStorage } from "../context/CartContext";
export const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE_CART_COUNT: {
      let { updatedTotalAmount, updatedTotalPrice } = state.cart.reduce(
        (p, c) => {
          p.updatedTotalAmount = p.updatedTotalAmount + c.amount;
          p.updatedTotalPrice = p.updatedTotalPrice + c.amount * c.price;
          return p;
        },
        { updatedTotalAmount: 0, updatedTotalPrice: 0 }
      );
      return {
        ...state,
        totalAmount: updatedTotalAmount,
        totalPrice: updatedTotalPrice,
      };
    }
    case ADD_TO_CART: {
      const { idColor, amount, stock } = action.payload;
      let updatedCart;
      let tempProduct = state.cart.find((i) => i.idColor === idColor);
      if (tempProduct) {
        updatedCart = state.cart.map((item) => {
          if (item.idColor === idColor) {
            let pendingAmount = item.amount + amount;
            if (pendingAmount > stock) return { ...item, amount: stock };
            return { ...item, amount: pendingAmount };
          } else {
            return item;
          }
        });
      } else {
        updatedCart = [...state.cart, action.payload];
      }
      writeToLocalStorage("cart", updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case TOGGLE_AMOUNT: {
      const { idColor, operation } = action.payload;
      let updatedCart = state.cart.map((item, index) => {
        if (item.idColor === idColor) {
          let newAmount;
          if (operation == "INCREMENT") {
            item.amount < item.stock
              ? (newAmount = item.amount + 1)
              : (newAmount = item.stock);
            return { ...item, amount: newAmount };
          }

          if (operation == "DECREMENT") {
            if (item.amount > 1) {
              newAmount = item.amount - 1;
              return { ...item, amount: newAmount };
            }
            if (item.amount == 1) {
              return { ...item, amount: 0 };
            }
          }
        } else {
          return item;
        }
      });
      updatedCart = updatedCart.filter((el) => el.amount !== 0);
      return { ...state, cart: updatedCart };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
        totalAmount: 0,
        totalPrice: 0,
        shipping_fee: 2,
      };
    }

    default:
      return state;
  }
};
