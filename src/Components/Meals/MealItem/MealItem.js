import classes from "./MealItem.module.css";

const MealItem = (props) => {
  let price = `₹${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
