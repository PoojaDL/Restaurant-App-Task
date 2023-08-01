import React from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onselect={props.onclick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Restaurant-img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
