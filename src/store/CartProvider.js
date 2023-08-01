import { useReducer } from "react";
import CartContext from "./cart-context";

let initState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const updatedItem = state.item.concat(action.item);
  const updatedTAmount =
    state.totalAmount + action.item.price * action.item.amount;
  if (action.type === "ADD") {
    return {
      item: updatedItem,
      totalAmount: updatedTAmount,
    };
  }
  return initState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartItem = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
