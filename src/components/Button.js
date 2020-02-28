import React from "react";
import styles from "./Button.css";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <Link to={props.to}>
      <button className={props.className}>{props.children}</button>
    </Link>
  );
};

export default Button;
