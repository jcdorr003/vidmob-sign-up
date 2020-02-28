import React, { useState } from "react";

const FormInput = props => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  const handleChange = event => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        className={props.className}
        placeholder={props.placeholder}
      />
    </>
  );
};
export default FormInput;
