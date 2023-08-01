import classes from "./Model.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclick} />;
};

const ModelBox = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const place = document.querySelector(".overlay");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onclick={props.onclick} />, place)}
      {ReactDOM.createPortal(<ModelBox>{props.children}</ModelBox>, place)}
    </Fragment>
  );
};

export default Model;
