import React from "react";
import styles from "./Button.css";

const Button = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
