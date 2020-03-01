import React from "react";
import styles from "./Button.css";

const Button = props => {
  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log("You've clicked the button!");
  // };
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
