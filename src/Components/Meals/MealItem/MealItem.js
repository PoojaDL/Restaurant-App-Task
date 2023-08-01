import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  let price = `₹${props.price.toFixed(2)}`;

  const addItem = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onaddItem={addItem} />
      </div>
    </li>
  );
};

export default MealItem;
