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
      />
    </>
  );
};
export default FormInput;
