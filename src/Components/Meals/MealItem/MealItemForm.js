import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [validInput, setValidity] = useState("true");
  const amtInputRef = useRef();

  const formSubmitted = (event) => {
    event.preventDefault();
    const enteredAmount = amtInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 0 ||
      enteredAmountNum > 5
    ) {
      setValidity("false");
      return;
    }

    props.onaddItem(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitted}>
      <Input
        ref={amtInputRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validInput && <p>Enter valid input</p>}
    </form>
  );
};

export default MealItemForm;
