import React, { useState } from "react";

const FormInput = props => {
  const [inputType] = useState(props.type);

  return (
    <>
      <input
        type={inputType}
        value={props.inputValue}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
    </>
  );
};
export default FormInput;
