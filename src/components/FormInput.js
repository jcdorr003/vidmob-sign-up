import React, { useState } from "react";

const FormInput = props => {
  const [inputType] = useState(props.type);
  // const [inputValue, setInputValue] = useState("");
  // const [company, setCompany] = useState(props.company);

  // const handleUserInput = event => {
  //   setInputValue(event.target.value);
  //   if (props.onChange) {
  //     props.onChange(inputValue);
  //   } else if (inputType === "email") {
  //     setEmail(inputValue.includes("@" && "."));
  //   }
  //   if (email === true) {
  //     return getCompany(inputValue);
  //   } else {
  //     return false;
  //   }
  // };

  // const getCompany = inputValue => {
  //   let firstSplit = inputValue.split("@");
  //   let secondSplit = firstSplit[1].split(".");
  //   secondSplit.pop();
  //   let emailCompany = secondSplit.toString();
  //   setCompany(emailCompany);
  //   console.log("this is company", company);
  // };

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
