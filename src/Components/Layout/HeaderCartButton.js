import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButtton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.item.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onselect}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
