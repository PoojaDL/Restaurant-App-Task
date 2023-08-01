import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButtton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onselect}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
