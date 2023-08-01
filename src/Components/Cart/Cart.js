import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `₹${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.item.length > 0;

  const itemAddHandler = (item) => {};

  const itemRemoveHandler = (id) => {};

  const cartItems = ctx.item.map((items) => {
    return (
      <CartItem
        key={items.id}
        price={items.price}
        name={items.name}
        amount={items.amount}
        onAdd={itemAddHandler.bind(null, items)}
        onRemove={itemRemoveHandler.bind(null, items.id)}
      />
    );
  });

  return (
    <Model onclick={props.onclick}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
