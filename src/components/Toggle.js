import React, { useState } from "react";
import toggleSvg from "../images/ic-selected.svg";
import uncheckedSvg from "../images/ic-unchecked.svg";

const Toggle = props => {
  const [toggle, setToggle] = useState("off");

  const handleToggle = () => {
    setToggle(toggle === "off" ? "on" : "off");
  };

  return (
    <div className={props.className}>
      <img src={toggleSvg} />
    </div>
  );
};

export default Toggle;
