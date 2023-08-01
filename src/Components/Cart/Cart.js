import Model from "../UI/Model";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "123", name: "Pizza", price: "300" }].map(
    (items) => <li>{items.name}</li>
  );

  return (
    <Model onclick={props.onclick}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>₹39</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
