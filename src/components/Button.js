import React from "react";

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
